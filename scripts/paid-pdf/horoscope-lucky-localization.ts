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
    "Couleur favorable":
      "Favorable color",

    "Planète favorable":
      "Favorable planet",

    "Jour favorable":
      "Favorable day",

    "Pierre symbolique":
      "Symbolic stone",

    "Élément dominant":
      "Dominant element",

    "Moment favorable":
      "Favorable time",

    "Une teinte à privilégier dans vos vêtements, vos accessoires ou votre environnement.":
      "A color to favor in your clothing, accessories, or surroundings.",

    "L’influence céleste à observer plus particulièrement durant cette période.":
      "The celestial influence to observe more closely during this period.",

    "Une journée propice pour agir, communiquer ou prendre une initiative.":
      "A favorable day to act, communicate, or take initiative.",

    "Une pierre associée aux énergies astrologiques de votre période.":
      "A stone associated with the astrological energies of your period.",

    "L’énergie élémentaire qui peut soutenir votre équilibre et votre intuition.":
      "The elemental energy that can support your balance and intuition.",

    "Un moment de la journée où votre énergie pourrait être plus fluide.":
      "A time of day when your energy may flow more easily.",

    "Vos repères favorables":
      "Your favorable signs",

    "Chance, intuition et symboles":
      "Luck, intuition and symbols",

    "Votre énergie favorable":
      "Your favorable energy",

    "Vos symboles de la période":
      "Your symbols for this period",

    "Ces repères ne prédisent pas un résultat précis. Ils vous invitent à remarquer les moments où votre intuition et votre énergie semblent plus naturellement disponibles.":
      "These signs do not predict a specific outcome. They invite you to notice the moments when your intuition and energy seem more naturally available.",

    "Votre guide symbolique":
      "Your symbolic guide",

    "Nombres, inspiration et rituel":
      "Numbers, inspiration and ritual",

    "Votre boussole symbolique":
      "Your symbolic compass",

    "Observez ces symboles au fil de la période. Ils peuvent devenir des points de repère pour reconnaître les moments où votre intuition, votre confiance et votre capacité d’action sont plus naturellement accessibles. Utilisez-les comme une invitation à ralentir et à écouter ce qui résonne réellement avec vous.":
      "Observe these symbols throughout the period. They can become reference points for recognizing moments when your intuition, confidence, and ability to act are more naturally accessible. Use them as an invitation to slow down and listen to what truly resonates with you.",

    "Vos nombres favorables":
      "Your favorable numbers",

    "repères":
      "signs",

    "Ces nombres peuvent accompagner vos choix personnels, vos intentions, vos dates importantes ou vos petits rituels de la période.":
      "These numbers can accompany your personal choices, intentions, important dates, or small rituals during this period.",

    "Votre phrase d’inspiration":
      "Your inspirational phrase",

    "Rituel personnel":
      "Personal ritual",

    "Créez votre moment favorable":
      "Create your favorable moment",

    "Choisissez un moment calme de la journée. Entourez-vous de votre couleur favorable, gardez votre pierre symbolique près de vous et notez une intention claire liée à cette période. Respirez lentement, relisez votre phrase d’inspiration et laissez votre intuition vous indiquer la prochaine action juste.":
      "Choose a quiet moment of the day. Surround yourself with your favorable color, keep your symbolic stone nearby, and write down a clear intention for this period. Breathe slowly, reread your inspirational phrase, and let your intuition guide you toward the next right action.",

    "À retenir":
      "Keep in mind",

    "Ces éléments sont des repères symboliques destinés à accompagner votre intuition. Ils ne garantissent pas un résultat précis, mais peuvent vous aider à rester attentive aux occasions favorables et à renforcer votre confiance dans vos propres ressentis.":
      "These elements are symbolic signs intended to support your intuition. They do not guarantee a specific outcome, but they can help you remain attentive to favorable opportunities and strengthen your confidence in your own feelings.",
  },

  es: {
    "Couleur favorable":
      "Color favorable",

    "Planète favorable":
      "Planeta favorable",

    "Jour favorable":
      "Día favorable",

    "Pierre symbolique":
      "Piedra simbólica",

    "Élément dominant":
      "Elemento dominante",

    "Moment favorable":
      "Momento favorable",

    "Une teinte à privilégier dans vos vêtements, vos accessoires ou votre environnement.":
      "Un color que puede favorecer en su ropa, accesorios o entorno.",

    "L’influence céleste à observer plus particulièrement durant cette période.":
      "La influencia celeste que conviene observar especialmente durante este período.",

    "Une journée propice pour agir, communiquer ou prendre une initiative.":
      "Un día propicio para actuar, comunicarse o tomar una iniciativa.",

    "Une pierre associée aux énergies astrologiques de votre période.":
      "Una piedra asociada con las energías astrológicas de su período.",

    "L’énergie élémentaire qui peut soutenir votre équilibre et votre intuition.":
      "La energía elemental que puede favorecer su equilibrio y su intuición.",

    "Un moment de la journée où votre énergie pourrait être plus fluide.":
      "Un momento del día en el que su energía podría fluir con mayor facilidad.",

    "Vos repères favorables":
      "Sus referencias favorables",

    "Chance, intuition et symboles":
      "Suerte, intuición y símbolos",

    "Votre énergie favorable":
      "Su energía favorable",

    "Vos symboles de la période":
      "Sus símbolos del período",

    "Ces repères ne prédisent pas un résultat précis. Ils vous invitent à remarquer les moments où votre intuition et votre énergie semblent plus naturellement disponibles.":
      "Estas referencias no predicen un resultado concreto. Le invitan a observar los momentos en los que su intuición y su energía parecen estar disponibles de manera más natural.",

    "Votre guide symbolique":
      "Su guía simbólica",

    "Nombres, inspiration et rituel":
      "Números, inspiración y ritual",

    "Votre boussole symbolique":
      "Su brújula simbólica",

    "Observez ces symboles au fil de la période. Ils peuvent devenir des points de repère pour reconnaître les moments où votre intuition, votre confiance et votre capacité d’action sont plus naturellement accessibles. Utilisez-les comme une invitation à ralentir et à écouter ce qui résonne réellement avec vous.":
      "Observe estos símbolos a lo largo del período. Pueden convertirse en puntos de referencia para reconocer los momentos en que su intuición, confianza y capacidad de acción son más accesibles. Utilícelos como una invitación a reducir el ritmo y escuchar lo que realmente resuena con usted.",

    "Vos nombres favorables":
      "Sus números favorables",

    "repères":
      "referencias",

    "Ces nombres peuvent accompagner vos choix personnels, vos intentions, vos dates importantes ou vos petits rituels de la période.":
      "Estos números pueden acompañar sus decisiones personales, sus intenciones, sus fechas importantes o sus pequeños rituales del período.",

    "Votre phrase d’inspiration":
      "Su frase de inspiración",

    "Rituel personnel":
      "Ritual personal",

    "Créez votre moment favorable":
      "Cree su momento favorable",

    "Choisissez un moment calme de la journée. Entourez-vous de votre couleur favorable, gardez votre pierre symbolique près de vous et notez une intention claire liée à cette période. Respirez lentement, relisez votre phrase d’inspiration et laissez votre intuition vous indiquer la prochaine action juste.":
      "Elija un momento tranquilo del día. Rodéese de su color favorable, mantenga su piedra simbólica cerca y escriba una intención clara relacionada con este período. Respire lentamente, relea su frase de inspiración y deje que su intuición le indique la siguiente acción adecuada.",

    "À retenir":
      "Para recordar",

    "Ces éléments sont des repères symboliques destinés à accompagner votre intuition. Ils ne garantissent pas un résultat précis, mais peuvent vous aider à rester attentive aux occasions favorables et à renforcer votre confiance dans vos propres ressentis.":
      "Estos elementos son referencias simbólicas destinadas a acompañar su intuición. No garantizan un resultado concreto, pero pueden ayudarle a mantenerse atento a las oportunidades favorables y a reforzar la confianza en sus propias sensaciones.",
  },

  de: {
    "Couleur favorable":
      "Günstige Farbe",

    "Planète favorable":
      "Günstiger Planet",

    "Jour favorable":
      "Günstiger Tag",

    "Pierre symbolique":
      "Symbolischer Stein",

    "Élément dominant":
      "Dominierendes Element",

    "Moment favorable":
      "Günstiger Zeitpunkt",

    "Une teinte à privilégier dans vos vêtements, vos accessoires ou votre environnement.":
      "Eine Farbe, die Sie bei Ihrer Kleidung, Ihren Accessoires oder in Ihrer Umgebung bevorzugen können.",

    "L’influence céleste à observer plus particulièrement durant cette période.":
      "Der himmlische Einfluss, dem Sie in dieser Phase besondere Aufmerksamkeit schenken können.",

    "Une journée propice pour agir, communiquer ou prendre une initiative.":
      "Ein günstiger Tag, um zu handeln, zu kommunizieren oder Initiative zu ergreifen.",

    "Une pierre associée aux énergies astrologiques de votre période.":
      "Ein Stein, der mit den astrologischen Energien dieser Phase verbunden ist.",

    "L’énergie élémentaire qui peut soutenir votre équilibre et votre intuition.":
      "Die elementare Energie, die Ihr Gleichgewicht und Ihre Intuition unterstützen kann.",

    "Un moment de la journée où votre énergie pourrait être plus fluide.":
      "Eine Tageszeit, zu der Ihre Energie leichter fließen könnte.",

    "Vos repères favorables":
      "Ihre günstigen Orientierungspunkte",

    "Chance, intuition et symboles":
      "Glück, Intuition und Symbole",

    "Votre énergie favorable":
      "Ihre günstige Energie",

    "Vos symboles de la période":
      "Ihre Symbole dieser Phase",

    "Ces repères ne prédisent pas un résultat précis. Ils vous invitent à remarquer les moments où votre intuition et votre énergie semblent plus naturellement disponibles.":
      "Diese Orientierungspunkte sagen kein bestimmtes Ergebnis voraus. Sie laden Sie dazu ein, jene Momente wahrzunehmen, in denen Ihre Intuition und Energie besonders natürlich verfügbar erscheinen.",

    "Votre guide symbolique":
      "Ihr symbolischer Leitfaden",

    "Nombres, inspiration et rituel":
      "Zahlen, Inspiration und Ritual",

    "Votre boussole symbolique":
      "Ihr symbolischer Kompass",

    "Observez ces symboles au fil de la période. Ils peuvent devenir des points de repère pour reconnaître les moments où votre intuition, votre confiance et votre capacité d’action sont plus naturellement accessibles. Utilisez-les comme une invitation à ralentir et à écouter ce qui résonne réellement avec vous.":
      "Beobachten Sie diese Symbole im Verlauf dieser Phase. Sie können zu Orientierungspunkten werden, um Momente zu erkennen, in denen Ihre Intuition, Ihr Vertrauen und Ihre Handlungsfähigkeit leichter zugänglich sind. Nutzen Sie sie als Einladung, langsamer zu werden und darauf zu hören, was wirklich mit Ihnen in Resonanz steht.",

    "Vos nombres favorables":
      "Ihre günstigen Zahlen",

    "repères":
      "Hinweise",

    "Ces nombres peuvent accompagner vos choix personnels, vos intentions, vos dates importantes ou vos petits rituels de la période.":
      "Diese Zahlen können Ihre persönlichen Entscheidungen, Absichten, wichtigen Daten oder kleinen Rituale dieser Phase begleiten.",

    "Votre phrase d’inspiration":
      "Ihr inspirierender Satz",

    "Rituel personnel":
      "Persönliches Ritual",

    "Créez votre moment favorable":
      "Gestalten Sie Ihren günstigen Moment",

    "Choisissez un moment calme de la journée. Entourez-vous de votre couleur favorable, gardez votre pierre symbolique près de vous et notez une intention claire liée à cette période. Respirez lentement, relisez votre phrase d’inspiration et laissez votre intuition vous indiquer la prochaine action juste.":
      "Wählen Sie einen ruhigen Moment des Tages. Umgeben Sie sich mit Ihrer günstigen Farbe, halten Sie Ihren symbolischen Stein in Ihrer Nähe und notieren Sie eine klare Absicht für diese Phase. Atmen Sie langsam, lesen Sie Ihren inspirierenden Satz erneut und lassen Sie Ihre Intuition den nächsten passenden Schritt weisen.",

    "À retenir":
      "Wichtig",

    "Ces éléments sont des repères symboliques destinés à accompagner votre intuition. Ils ne garantissent pas un résultat précis, mais peuvent vous aider à rester attentive aux occasions favorables et à renforcer votre confiance dans vos propres ressentis.":
      "Diese Elemente sind symbolische Orientierungspunkte, die Ihre Intuition begleiten sollen. Sie garantieren kein bestimmtes Ergebnis, können Ihnen jedoch helfen, günstige Gelegenheiten bewusster wahrzunehmen und das Vertrauen in Ihre eigenen Empfindungen zu stärken.",
  },

  it: {
    "Couleur favorable":
      "Colore favorevole",

    "Planète favorable":
      "Pianeta favorevole",

    "Jour favorable":
      "Giorno favorevole",

    "Pierre symbolique":
      "Pietra simbolica",

    "Élément dominant":
      "Elemento dominante",

    "Moment favorable":
      "Momento favorevole",

    "Une teinte à privilégier dans vos vêtements, vos accessoires ou votre environnement.":
      "Una tonalità da privilegiare nell'abbigliamento, negli accessori o nell'ambiente.",

    "L’influence céleste à observer plus particulièrement durant cette période.":
      "L'influenza celeste da osservare con particolare attenzione durante questo periodo.",

    "Une journée propice pour agir, communiquer ou prendre une initiative.":
      "Una giornata favorevole per agire, comunicare o prendere un'iniziativa.",

    "Une pierre associée aux énergies astrologiques de votre période.":
      "Una pietra associata alle energie astrologiche del tuo periodo.",

    "L’énergie élémentaire qui peut soutenir votre équilibre et votre intuition.":
      "L'energia elementale che può sostenere il tuo equilibrio e la tua intuizione.",

    "Un moment de la journée où votre énergie pourrait être plus fluide.":
      "Un momento della giornata in cui la tua energia potrebbe fluire più facilmente.",

    "Vos repères favorables":
      "I tuoi riferimenti favorevoli",

    "Chance, intuition et symboles":
      "Fortuna, intuizione e simboli",

    "Votre énergie favorable":
      "La tua energia favorevole",

    "Vos symboles de la période":
      "I tuoi simboli del periodo",

    "Ces repères ne prédisent pas un résultat précis. Ils vous invitent à remarquer les moments où votre intuition et votre énergie semblent plus naturellement disponibles.":
      "Questi riferimenti non predicono un risultato preciso. Ti invitano a riconoscere i momenti in cui la tua intuizione e la tua energia sembrano essere più naturalmente disponibili.",

    "Votre guide symbolique":
      "La tua guida simbolica",

    "Nombres, inspiration et rituel":
      "Numeri, ispirazione e rituale",

    "Votre boussole symbolique":
      "La tua bussola simbolica",

    "Observez ces symboles au fil de la période. Ils peuvent devenir des points de repère pour reconnaître les moments où votre intuition, votre confiance et votre capacité d’action sont plus naturellement accessibles. Utilisez-les comme une invitation à ralentir et à écouter ce qui résonne réellement avec vous.":
      "Osserva questi simboli nel corso del periodo. Possono diventare punti di riferimento per riconoscere i momenti in cui la tua intuizione, la tua fiducia e la tua capacità di agire sono più naturalmente accessibili. Usali come un invito a rallentare e ad ascoltare ciò che risuona davvero con te.",

    "Vos nombres favorables":
      "I tuoi numeri favorevoli",

    "repères":
      "riferimenti",

    "Ces nombres peuvent accompagner vos choix personnels, vos intentions, vos dates importantes ou vos petits rituels de la période.":
      "Questi numeri possono accompagnare le tue scelte personali, le tue intenzioni, le date importanti o i piccoli rituali del periodo.",

    "Votre phrase d’inspiration":
      "La tua frase d'ispirazione",

    "Rituel personnel":
      "Rituale personale",

    "Créez votre moment favorable":
      "Crea il tuo momento favorevole",

    "Choisissez un moment calme de la journée. Entourez-vous de votre couleur favorable, gardez votre pierre symbolique près de vous et notez une intention claire liée à cette période. Respirez lentement, relisez votre phrase d’inspiration et laissez votre intuition vous indiquer la prochaine action juste.":
      "Scegli un momento tranquillo della giornata. Circondati del tuo colore favorevole, tieni vicino a te la tua pietra simbolica e annota un'intenzione chiara legata a questo periodo. Respira lentamente, rileggi la tua frase d'ispirazione e lascia che la tua intuizione ti indichi la prossima azione giusta.",

    "À retenir":
      "Da ricordare",

    "Ces éléments sont des repères symboliques destinés à accompagner votre intuition. Ils ne garantissent pas un résultat précis, mais peuvent vous aider à rester attentive aux occasions favorables et à renforcer votre confiance dans vos propres ressentis.":
      "Questi elementi sono riferimenti simbolici pensati per accompagnare la tua intuizione. Non garantiscono un risultato preciso, ma possono aiutarti a riconoscere le opportunità favorevoli e a rafforzare la fiducia nelle tue sensazioni.",
  },

  pt: {
    "Couleur favorable":
      "Cor favorável",

    "Planète favorable":
      "Planeta favorável",

    "Jour favorable":
      "Dia favorável",

    "Pierre symbolique":
      "Pedra simbólica",

    "Élément dominant":
      "Elemento dominante",

    "Moment favorable":
      "Momento favorável",

    "Une teinte à privilégier dans vos vêtements, vos accessoires ou votre environnement.":
      "Uma cor a privilegiar nas suas roupas, acessórios ou ambiente.",

    "L’influence céleste à observer plus particulièrement durant cette période.":
      "A influência celeste a observar com mais atenção durante este período.",

    "Une journée propice pour agir, communiquer ou prendre une initiative.":
      "Um dia favorável para agir, comunicar ou tomar uma iniciativa.",

    "Une pierre associée aux énergies astrologiques de votre période.":
      "Uma pedra associada às energias astrológicas do seu período.",

    "L’énergie élémentaire qui peut soutenir votre équilibre et votre intuition.":
      "A energia elemental que pode apoiar seu equilíbrio e sua intuição.",

    "Un moment de la journée où votre énergie pourrait être plus fluide.":
      "Um momento do dia em que sua energia poderá fluir com mais facilidade.",

    "Vos repères favorables":
      "Suas referências favoráveis",

    "Chance, intuition et symboles":
      "Sorte, intuição e símbolos",

    "Votre énergie favorable":
      "Sua energia favorável",

    "Vos symboles de la période":
      "Seus símbolos do período",

    "Ces repères ne prédisent pas un résultat précis. Ils vous invitent à remarquer les moments où votre intuition et votre énergie semblent plus naturellement disponibles.":
      "Essas referências não preveem um resultado específico. Elas convidam você a perceber os momentos em que sua intuição e sua energia parecem estar naturalmente mais disponíveis.",

    "Votre guide symbolique":
      "Seu guia simbólico",

    "Nombres, inspiration et rituel":
      "Números, inspiração e ritual",

    "Votre boussole symbolique":
      "Sua bússola simbólica",

    "Observez ces symboles au fil de la période. Ils peuvent devenir des points de repère pour reconnaître les moments où votre intuition, votre confiance et votre capacité d’action sont plus naturellement accessibles. Utilisez-les comme une invitation à ralentir et à écouter ce qui résonne réellement avec vous.":
      "Observe esses símbolos ao longo do período. Eles podem se tornar pontos de referência para reconhecer os momentos em que sua intuição, confiança e capacidade de agir estão mais naturalmente acessíveis. Use-os como um convite para desacelerar e ouvir o que realmente ressoa com você.",

    "Vos nombres favorables":
      "Seus números favoráveis",

    "repères":
      "referências",

    "Ces nombres peuvent accompagner vos choix personnels, vos intentions, vos dates importantes ou vos petits rituels de la période.":
      "Esses números podem acompanhar suas escolhas pessoais, intenções, datas importantes ou pequenos rituais do período.",

    "Votre phrase d’inspiration":
      "Sua frase de inspiração",

    "Rituel personnel":
      "Ritual pessoal",

    "Créez votre moment favorable":
      "Crie seu momento favorável",

    "Choisissez un moment calme de la journée. Entourez-vous de votre couleur favorable, gardez votre pierre symbolique près de vous et notez une intention claire liée à cette période. Respirez lentement, relisez votre phrase d’inspiration et laissez votre intuition vous indiquer la prochaine action juste.":
      "Escolha um momento tranquilo do dia. Cerque-se de sua cor favorável, mantenha sua pedra simbólica por perto e anote uma intenção clara relacionada a este período. Respire lentamente, releia sua frase de inspiração e deixe sua intuição indicar a próxima ação adequada.",

    "À retenir":
      "Para lembrar",

    "Ces éléments sont des repères symboliques destinés à accompagner votre intuition. Ils ne garantissent pas un résultat précis, mais peuvent vous aider à rester attentive aux occasions favorables et à renforcer votre confiance dans vos propres ressentis.":
      "Esses elementos são referências simbólicas destinadas a acompanhar sua intuição. Eles não garantem um resultado específico, mas podem ajudar você a perceber oportunidades favoráveis e fortalecer sua confiança em suas próprias percepções.",
  },
};

const DYNAMIC_VALUES: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    lundi: "Monday",
    mardi: "Tuesday",
    mercredi: "Wednesday",
    jeudi: "Thursday",
    vendredi: "Friday",
    samedi: "Saturday",
    dimanche: "Sunday",

    feu: "Fire",
    terre: "Earth",
    air: "Air",
    eau: "Water",

    soleil: "Sun",
    lune: "Moon",
    mercure: "Mercury",
    "vénus": "Venus",
    venus: "Venus",
    mars: "Mars",
    jupiter: "Jupiter",
    saturne: "Saturn",
    uranus: "Uranus",
    neptune: "Neptune",
    pluton: "Pluto",

    bordeaux: "Burgundy",
    obsidienne: "Obsidian",
  },

  es: {
    lundi: "lunes",
    mardi: "martes",
    mercredi: "miércoles",
    jeudi: "jueves",
    vendredi: "viernes",
    samedi: "sábado",
    dimanche: "domingo",

    feu: "Fuego",
    terre: "Tierra",
    air: "Aire",
    eau: "Agua",

    soleil: "Sol",
    lune: "Luna",
    mercure: "Mercurio",
    "vénus": "Venus",
    venus: "Venus",
    mars: "Marte",
    jupiter: "Júpiter",
    saturne: "Saturno",
    uranus: "Urano",
    neptune: "Neptuno",
    pluton: "Plutón",

    bordeaux: "Burdeos",
    obsidienne: "Obsidiana",
  },

  de: {
    lundi: "Montag",
    mardi: "Dienstag",
    mercredi: "Mittwoch",
    jeudi: "Donnerstag",
    vendredi: "Freitag",
    samedi: "Samstag",
    dimanche: "Sonntag",

    feu: "Feuer",
    terre: "Erde",
    air: "Luft",
    eau: "Wasser",

    soleil: "Sonne",
    lune: "Mond",
    mercure: "Merkur",
    "vénus": "Venus",
    venus: "Venus",
    mars: "Mars",
    jupiter: "Jupiter",
    saturne: "Saturn",
    uranus: "Uranus",
    neptune: "Neptun",
    pluton: "Pluto",

    bordeaux: "Bordeauxrot",
    obsidienne: "Obsidian",
  },

  it: {
    lundi: "lunedì",
    mardi: "martedì",
    mercredi: "mercoledì",
    jeudi: "giovedì",
    vendredi: "venerdì",
    samedi: "sabato",
    dimanche: "domenica",

    feu: "Fuoco",
    terre: "Terra",
    air: "Aria",
    eau: "Acqua",

    soleil: "Sole",
    lune: "Luna",
    mercure: "Mercurio",
    "vénus": "Venere",
    venus: "Venere",
    mars: "Marte",
    jupiter: "Giove",
    saturne: "Saturno",
    uranus: "Urano",
    neptune: "Nettuno",
    pluton: "Plutone",

    bordeaux: "Bordeaux",
    obsidienne: "Ossidiana",
  },

  pt: {
    lundi: "segunda-feira",
    mardi: "terça-feira",
    mercredi: "quarta-feira",
    jeudi: "quinta-feira",
    vendredi: "sexta-feira",
    samedi: "sábado",
    dimanche: "domingo",

    feu: "Fogo",
    terre: "Terra",
    air: "Ar",
    eau: "Água",

    soleil: "Sol",
    lune: "Lua",
    mercure: "Mercúrio",
    "vénus": "Vênus",
    venus: "Vênus",
    mars: "Marte",
    jupiter: "Júpiter",
    saturne: "Saturno",
    uranus: "Urano",
    neptune: "Netuno",
    pluton: "Plutão",

    bordeaux: "Bordô",
    obsidienne: "Obsidiana",
  },
};

const MONTHS: Record<
  NonFrenchLocale,
  string[]
> = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],

  es: [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ],

  de: [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ],

  it: [
    "gennaio",
    "febbraio",
    "marzo",
    "aprile",
    "maggio",
    "giugno",
    "luglio",
    "agosto",
    "settembre",
    "ottobre",
    "novembre",
    "dicembre",
  ],

  pt: [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
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

function localizeSafeLiterals(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile =
    ts.createSourceFile(
      "HoroscopeLucky.tsx",
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
          start:
            node.getStart(sourceFile),
          end:
            node.getEnd(),
          value:
            JSON.stringify(translated),
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
          start:
            node.getStart(sourceFile),
          end:
            node.getEnd(),
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

function replaceDynamicLuckyValues(
  source: string,
): string {
  let output = source;

  output = output.replace(
    /const\s+periodLabel\s*=\s*formatHoroscopePeriodLabel\(\s*period\s*\);/g,
    `const periodLabel =
    __luckyLocalizedPeriodLabel(
      period,
    );`,
  );

  output = output.replace(
    /\{identity\.zodiacSignLabel\}/g,
    "{__luckyLocalizeDynamicText(identity.zodiacSignLabel)}",
  );

  output = output.replace(
    /value:\s*lucky\.color,/g,
    "value: __luckyLocalizeDynamicText(lucky.color),",
  );

  output = output.replace(
    /value:\s*lucky\.planet,/g,
    "value: __luckyLocalizeDynamicText(lucky.planet),",
  );

  output = output.replace(
    /value:\s*lucky\.day,/g,
    "value: __luckyLocalizeDynamicText(lucky.day),",
  );

  output = output.replace(
    /value:\s*lucky\.stone,/g,
    "value: __luckyLocalizeDynamicText(lucky.stone),",
  );

  output = output.replace(
    /value:\s*lucky\.element,/g,
    "value: __luckyLocalizeDynamicText(lucky.element),",
  );

  output = output.replace(
    /value:\s*lucky\.time,/g,
    "value: __luckyLocalizeDynamicText(lucky.time),",
  );

  output = output.replace(
    /\{lucky\.introduction\}/g,
    "{__luckyLocalizeDynamicText(lucky.introduction)}",
  );

  output = output.replace(
    /\{lucky\.quote\}/g,
    "{__luckyLocalizeDynamicText(lucky.quote)}",
  );

  return output;
}

function injectLuckyHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __luckyLocalizeDynamicText",
    )
  ) {
    return source;
  }

  const dynamicValues =
    DYNAMIC_VALUES[locale];

  const helper = `
/* =========================================================
   HOROSCOPE LUCKY — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __LUCKY_DYNAMIC_VALUES:
  Record<string, string> =
  ${JSON.stringify(dynamicValues, null, 2)};

const __LUCKY_MONTHS =
  ${JSON.stringify(MONTHS[locale], null, 2)} as const;

const __LUCKY_FRENCH_MONTHS =
  ${JSON.stringify(FRENCH_MONTHS, null, 2)} as const;

function __luckyNormalizeText(
  value: string,
): string {
  return value
    .trim()
    .toLowerCase();
}

function __luckyLocalizeDynamicText(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  const normalized =
    __luckyNormalizeText(value);

  return (
    __LUCKY_DYNAMIC_VALUES[normalized] ??
    value
  );
}

function __luckyFormatIsoDate(
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
    return isoDate;
  }

  const year =
    Number(match[1]);

  const month =
    Number(match[2]);

  const day =
    Number(match[3]);

  ${
    locale === "en"
      ? 'return `${__LUCKY_MONTHS[month - 1]} ${day}, ${year}`;'
      : locale === "de"
        ? 'return `${day}. ${__LUCKY_MONTHS[month - 1]} ${year}`;'
        : locale === "es"
          ? 'return `${day} de ${__LUCKY_MONTHS[month - 1]} de ${year}`;'
          : locale === "pt"
            ? 'return `${day} de ${__LUCKY_MONTHS[month - 1]} de ${year}`;'
            : 'return `${day} ${__LUCKY_MONTHS[month - 1]} ${year}`;'
  }
}

function __luckyTranslateFrenchDate(
  value: string,
): string {
  const normalized =
    value.trim().toLowerCase();

  const match =
    normalized.match(
      /^(\\d{1,2})\\s+([a-zàâäéèêëîïôöùûüç]+)\\s+(\\d{4})$/,
    );

  if (!match) {
    return value;
  }

  const day =
    Number(match[1]);

  const frenchMonth =
    match[2];

  const year =
    Number(match[3]);

  const monthIndex =
    __LUCKY_FRENCH_MONTHS.findIndex(
      (month) =>
        month === frenchMonth,
    );

  if (monthIndex < 0) {
    return value;
  }

  ${
    locale === "en"
      ? 'return `${__LUCKY_MONTHS[monthIndex]} ${day}, ${year}`;'
      : locale === "de"
        ? 'return `${day}. ${__LUCKY_MONTHS[monthIndex]} ${year}`;'
        : locale === "es"
          ? 'return `${day} de ${__LUCKY_MONTHS[monthIndex]} de ${year}`;'
          : locale === "pt"
            ? 'return `${day} de ${__LUCKY_MONTHS[monthIndex]} de ${year}`;'
            : 'return `${day} ${__LUCKY_MONTHS[monthIndex]} ${year}`;'
  }
}

function __luckyLocalizedPeriodLabel(
  period: HoroscopeSectionProps["period"],
): string {
  if (
    period.type === "month" &&
    period.startDate
  ) {
    const match =
      period.startDate.match(
        /^(\\d{4})-(\\d{2})-(\\d{2})$/,
      );

    if (match) {
      const year = Number(match[1]);
      const month = Number(match[2]);

      return (
        __LUCKY_MONTHS[month - 1] +
        " " +
        year
      );
    }
  }

  if (
    period.type === "year" &&
    period.startDate
  ) {
    const match =
      period.startDate.match(
        /^(\\d{4})-(\\d{2})-(\\d{2})$/,
      );

    if (match) {
      return match[1];
    }
  }

  if (
    period.type === "day" &&
    period.startDate &&
    /^\\d{4}-\\d{2}-\\d{2}$/.test(
      period.startDate,
    )
  ) {
    return __luckyFormatIsoDate(
      period.startDate,
    );
  }
  const value =
    formatHoroscopePeriodLabel(
      period,
    );

  /*
   * Si le formatter français retourne par
   * exemple "21 juillet 2026", on le traduit
   * ici correctement.
   */
  const localizedDate =
    __luckyTranslateFrenchDate(
      value,
    );

  if (localizedDate !== value) {
    return localizedDate;
  }

  return __luckyLocalizeDynamicText(
    value,
  );
}

/* =========================================================
   END HOROSCOPE LUCKY — GENERATED LOCALE HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopeLucky";

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

export function localizeHoroscopeLucky(
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
    replaceDynamicLuckyValues(
      source,
    );

  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  localized =
    injectLuckyHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
