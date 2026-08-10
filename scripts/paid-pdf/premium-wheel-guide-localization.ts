import type { PaidPdfLocale } from "./premium-localization";

type NonFrenchLocale = Exclude<PaidPdfLocale, "fr">;

const TRANSLATIONS = {
  "en": {
    "Repères de lecture": "Reading guidelines",
    "Comprendre votre carte du ciel": "Understanding your birth chart",
    "Comment lire votre roue astrologique": "How to read your astrological wheel",
    "Votre roue astrologique représente le ciel au moment précis\n            de votre naissance. Chaque signe, planète, maison, angle et\n            aspect participe à la construction de votre thème natal.": "Your astrological wheel represents the sky at the precise moment\n            of your birth. Each sign, planet, house, angle, and aspect contributes\n            to the construction of your natal chart.",
    "Les douze signes du zodiaque": "The twelve zodiac signs",
    "L’anneau extérieur présente les douze signes du zodiaque.\n              Chaque signe décrit une manière particulière d’exprimer\n              une énergie. Lorsqu’une planète se trouve dans un signe,\n              elle adopte ses qualités, ses besoins, ses réflexes et sa\n              manière d’agir.": "The outer ring displays the twelve zodiac signs.\n              Each sign describes a particular way of expressing energy.\n              When a planet is in a sign, it adopts its qualities, needs,\n              reflexes, and manner of acting.",
    "Les douze maisons astrologiques": "The twelve astrological houses",
    "Les maisons divisent la roue en douze secteurs. Elles\n              représentent les grands domaines de votre existence :\n              identité, ressources, communication, foyer, créativité,\n              travail, relations, transformation, aspirations et\n              vocation.": "The houses divide the wheel into twelve sectors. They represent\n              the major areas of your existence: identity, resources,\n              communication, home, creativity, work, relationships,\n              transformation, aspirations, and vocation.",
    "Les planètes": "The planets",
    "Les planètes symbolisent les différentes fonctions de\n              votre personnalité. Leur signe montre comment elles\n              s’expriment, tandis que leur maison indique dans quel\n              domaine de votre vie leur influence se manifeste.": "The planets symbolize the different functions of your personality.\n              Their sign shows how they express themselves, while their house\n              indicates in which area of your life their influence manifests.",
    "Soleil": "Sun",
    "Identité et volonté": "Identity and will",
    "Lune": "Moon",
    "Émotions et sécurité": "Emotions and security",
    "Mercure": "Mercury",
    "Pensée et communication": "Thought and communication",
    "Vénus": "Venus",
    "Amour et valeurs": "Love and values",
    "Mars": "Mars",
    "Action et désir": "Action and desire",
    "Les aspects astrologiques": "The astrological aspects",
    "Les lignes tracées au centre relient les planètes entre\n              elles. Elles représentent les aspects astrologiques.\n              Certains facilitent une expression naturelle de vos\n              énergies, tandis que d’autres révèlent des tensions, des\n              contrastes ou des défis porteurs d’évolution.": "The lines drawn in the center connect the planets to each other.\n              They represent the astrological aspects. Some facilitate a natural\n              expression of your energies, while others reveal tensions,\n              contrasts, or challenges that foster evolution.",
    "Les quatre angles majeurs": "The four major angles",
    "L’Ascendant indique votre manière d’aborder le monde. Le\n              Descendant décrit votre rapport aux autres. Le Milieu du\n              Ciel concerne votre vocation et votre direction sociale.\n              Le Fond du Ciel représente vos racines et votre sécurité\n              intérieure.": "The Ascendant indicates your approach to the world. The Descendant\n              describes your relationship with others. The Midheaven concerns\n              your vocation and social direction. The Imum Coeli represents\n              your roots and inner security.",
    "La lecture d’ensemble": "The overall reading",
    "Aucun élément ne doit être interprété isolément. La\n              richesse de votre thème vient de la combinaison entre les\n              planètes, les signes, les maisons, les angles et les\n              aspects. C’est leur dialogue qui révèle votre signature\n              astrologique personnelle.": "No element should be interpreted in isolation. The richness of your\n              chart comes from the combination of planets, signs, houses,\n              angles, and aspects. It is their dialogue that reveals your\n              personal astrological signature.",
    "Votre thème natal forme un ensemble vivant": "Your natal chart forms a living whole",
    "Les pages suivantes approfondiront progressivement chacun\n            de ces éléments afin de mettre en lumière votre\n            personnalité, votre monde émotionnel, votre manière\n            d’aimer, vos forces naturelles, vos défis et votre\n            potentiel d’évolution.": "The following pages will progressively delve into each of these\n            elements to illuminate your personality, emotional world, way of\n            loving, natural strengths, challenges, and potential for evolution.",
    "Cette page constitue votre guide de référence pour mieux\n          comprendre les interprétations de votre rapport Premium.": "This page serves as your reference guide to better understand\n          the interpretations of your Premium report."
  },
  "es": {
    "Repères de lecture": "Pautas de lectura",
    "Comprendre votre carte du ciel": "Comprender tu carta natal",
    "Comment lire votre roue astrologique": "Cómo leer tu rueda astrológica",
    "Votre roue astrologique représente le ciel au moment précis\n            de votre naissance. Chaque signe, planète, maison, angle et\n            aspect participe à la construction de votre thème natal.": "Tu rueda astrológica representa el cielo en el momento preciso\n            de tu nacimiento. Cada signo, planeta, casa, ángulo y aspecto\n            contribuye a la construcción de tu carta natal.",
    "Les douze signes du zodiaque": "Los doce signos del zodíaco",
    "L’anneau extérieur présente les douze signes du zodiaque.\n              Chaque signe décrit une manière particulière d’exprimer\n              une énergie. Lorsqu’une planète se trouve dans un signe,\n              elle adopte ses qualités, ses besoins, ses réflexes et sa\n              manière d’agir.": "El anillo exterior muestra los doce signos del zodíaco.\n              Cada signo describe una forma particular de expresar energía.\n              Cuando un planeta está en un signo, adopta sus cualidades,\n              necesidades, reflejos y manera de actuar.",
    "Les douze maisons astrologiques": "Las doce casas astrológicas",
    "Les maisons divisent la roue en douze secteurs. Elles\n              représentent les grands domaines de votre existence :\n              identité, ressources, communication, foyer, créativité,\n              travail, relations, transformation, aspirations et\n              vocation.": "Las casas dividen la rueda en doce sectores. Representan las\n              grandes áreas de tu existencia: identidad, recursos,\n              comunicación, hogar, creatividad, trabajo, relaciones,\n              transformación, aspiraciones y vocación.",
    "Les planètes": "Los planetas",
    "Les planètes symbolisent les différentes fonctions de\n              votre personnalité. Leur signe montre comment elles\n              s’expriment, tandis que leur maison indique dans quel\n              domaine de votre vie leur influence se manifeste.": "Los planetas simbolizan las diferentes funciones de tu personalidad.\n              Su signo muestra cómo se expresan, mientras que su casa indica\n              en qué área de tu vida se manifiesta su influencia.",
    "Soleil": "Sol",
    "Identité et volonté": "Identidad y voluntad",
    "Lune": "Luna",
    "Émotions et sécurité": "Emociones y seguridad",
    "Mercure": "Mercurio",
    "Pensée et communication": "Pensamiento y comunicación",
    "Vénus": "Venus",
    "Amour et valeurs": "Amor y valores",
    "Mars": "Marte",
    "Action et désir": "Acción y deseo",
    "Les aspects astrologiques": "Los aspectos astrológicos",
    "Les lignes tracées au centre relient les planètes entre\n              elles. Elles représentent les aspects astrologiques.\n              Certains facilitent une expression naturelle de vos\n              énergies, tandis que d’autres révèlent des tensions, des\n              contrastes ou des défis porteurs d’évolution.": "Las líneas trazadas en el centro conectan los planetas entre sí.\n              Representan los aspectos astrológicos. Algunos facilitan una\n              expresión natural de tus energías, mientras otros revelan\n              tensiones, contrastes o desafíos que favorecen la evolución.",
    "Les quatre angles majeurs": "Los cuatro ángulos principales",
    "L’Ascendant indique votre manière d’aborder le monde. Le\n              Descendant décrit votre rapport aux autres. Le Milieu du\n              Ciel concerne votre vocation et votre direction sociale.\n              Le Fond du Ciel représente vos racines et votre sécurité\n              intérieure.": "El Ascendente indica tu manera de abordar el mundo. El Descendente\n              describe tu relación con los demás. El Medio Cielo se relaciona\n              con tu vocación y dirección social. El Fondo del Cielo representa\n              tus raíces y tu seguridad interior.",
    "La lecture d’ensemble": "La lectura global",
    "Aucun élément ne doit être interprété isolément. La\n              richesse de votre thème vient de la combinaison entre les\n              planètes, les signes, les maisons, les angles et les\n              aspects. C’est leur dialogue qui révèle votre signature\n              astrologique personnelle.": "Ningún elemento debe interpretarse de forma aislada. La riqueza de\n              tu carta proviene de la combinación de planetas, signos, casas,\n              ángulos y aspectos. Su diálogo revela tu firma astrológica personal.",
    "Votre thème natal forme un ensemble vivant": "Tu carta natal forma un conjunto vivo",
    "Les pages suivantes approfondiront progressivement chacun\n            de ces éléments afin de mettre en lumière votre\n            personnalité, votre monde émotionnel, votre manière\n            d’aimer, vos forces naturelles, vos défis et votre\n            potentiel d’évolution.": "Las páginas siguientes profundizarán progresivamente en cada uno\n            de estos elementos para iluminar tu personalidad, tu mundo emocional,\n            tu manera de amar, tus fortalezas naturales, tus desafíos y tu\n            potencial de evolución.",
    "Cette page constitue votre guide de référence pour mieux\n          comprendre les interprétations de votre rapport Premium.": "Esta página sirve como guía de referencia para comprender mejor\n          las interpretaciones de tu informe Premium."
  },
  "de": {
    "Repères de lecture": "Lesehinweise",
    "Comprendre votre carte du ciel": "Ihr Geburtshoroskop verstehen",
    "Comment lire votre roue astrologique": "So lesen Sie Ihr astrologisches Rad",
    "Votre roue astrologique représente le ciel au moment précis\n            de votre naissance. Chaque signe, planète, maison, angle et\n            aspect participe à la construction de votre thème natal.": "Ihr astrologisches Rad zeigt den Himmel zum genauen Zeitpunkt\n            Ihrer Geburt. Jedes Zeichen, jeder Planet, jedes Haus, jeder Winkel\n            und jeder Aspekt trägt zum Aufbau Ihres Geburtshoroskops bei.",
    "Les douze signes du zodiaque": "Die zwölf Tierkreiszeichen",
    "L’anneau extérieur présente les douze signes du zodiaque.\n              Chaque signe décrit une manière particulière d’exprimer\n              une énergie. Lorsqu’une planète se trouve dans un signe,\n              elle adopte ses qualités, ses besoins, ses réflexes et sa\n              manière d’agir.": "Der äußere Ring zeigt die zwölf Tierkreiszeichen.\n              Jedes Zeichen beschreibt eine bestimmte Art, Energie auszudrücken.\n              Befindet sich ein Planet in einem Zeichen, übernimmt er dessen\n              Qualitäten, Bedürfnisse, Reflexe und Handlungsweise.",
    "Les douze maisons astrologiques": "Die zwölf astrologischen Häuser",
    "Les maisons divisent la roue en douze secteurs. Elles\n              représentent les grands domaines de votre existence :\n              identité, ressources, communication, foyer, créativité,\n              travail, relations, transformation, aspirations et\n              vocation.": "Die Häuser teilen das Rad in zwölf Bereiche. Sie stehen für die\n              großen Lebensbereiche: Identität, Ressourcen, Kommunikation,\n              Zuhause, Kreativität, Arbeit, Beziehungen, Transformation,\n              Bestrebungen und Berufung.",
    "Les planètes": "Die Planeten",
    "Les planètes symbolisent les différentes fonctions de\n              votre personnalité. Leur signe montre comment elles\n              s’expriment, tandis que leur maison indique dans quel\n              domaine de votre vie leur influence se manifeste.": "Die Planeten symbolisieren die verschiedenen Funktionen Ihrer\n              Persönlichkeit. Ihr Zeichen zeigt, wie sie sich ausdrücken,\n              während ihr Haus angibt, in welchem Lebensbereich ihr Einfluss wirkt.",
    "Soleil": "Sonne",
    "Identité et volonté": "Identität und Wille",
    "Lune": "Mond",
    "Émotions et sécurité": "Emotionen und Sicherheit",
    "Mercure": "Merkur",
    "Pensée et communication": "Denken und Kommunikation",
    "Vénus": "Venus",
    "Amour et valeurs": "Liebe und Werte",
    "Mars": "Mars",
    "Action et désir": "Handlung und Verlangen",
    "Les aspects astrologiques": "Die astrologischen Aspekte",
    "Les lignes tracées au centre relient les planètes entre\n              elles. Elles représentent les aspects astrologiques.\n              Certains facilitent une expression naturelle de vos\n              énergies, tandis que d’autres révèlent des tensions, des\n              contrastes ou des défis porteurs d’évolution.": "Die Linien im Zentrum verbinden die Planeten miteinander.\n              Sie stellen die astrologischen Aspekte dar. Einige erleichtern\n              einen natürlichen Ausdruck Ihrer Energien, andere zeigen\n              Spannungen, Kontraste oder entwicklungsfördernde Herausforderungen.",
    "Les quatre angles majeurs": "Die vier Hauptachsen",
    "L’Ascendant indique votre manière d’aborder le monde. Le\n              Descendant décrit votre rapport aux autres. Le Milieu du\n              Ciel concerne votre vocation et votre direction sociale.\n              Le Fond du Ciel représente vos racines et votre sécurité\n              intérieure.": "Der Aszendent zeigt Ihre Art, der Welt zu begegnen. Der Deszendent\n              beschreibt Ihre Beziehung zu anderen. Das Medium Coeli betrifft\n              Berufung und gesellschaftliche Richtung. Das Imum Coeli steht für\n              Ihre Wurzeln und innere Sicherheit.",
    "La lecture d’ensemble": "Die Gesamtdeutung",
    "Aucun élément ne doit être interprété isolément. La\n              richesse de votre thème vient de la combinaison entre les\n              planètes, les signes, les maisons, les angles et les\n              aspects. C’est leur dialogue qui révèle votre signature\n              astrologique personnelle.": "Kein Element sollte isoliert gedeutet werden. Der Reichtum Ihres\n              Horoskops entsteht aus dem Zusammenspiel von Planeten, Zeichen,\n              Häusern, Winkeln und Aspekten. Ihr Dialog zeigt Ihre persönliche\n              astrologische Signatur.",
    "Votre thème natal forme un ensemble vivant": "Ihr Geburtshoroskop bildet ein lebendiges Ganzes",
    "Les pages suivantes approfondiront progressivement chacun\n            de ces éléments afin de mettre en lumière votre\n            personnalité, votre monde émotionnel, votre manière\n            d’aimer, vos forces naturelles, vos défis et votre\n            potentiel d’évolution.": "Die folgenden Seiten vertiefen nach und nach jedes dieser Elemente,\n            um Ihre Persönlichkeit, Gefühlswelt, Art zu lieben, natürlichen\n            Stärken, Herausforderungen und Ihr Entwicklungspotenzial zu beleuchten.",
    "Cette page constitue votre guide de référence pour mieux\n          comprendre les interprétations de votre rapport Premium.": "Diese Seite dient als Orientierungshilfe, um die Deutungen Ihres\n          Premium-Berichts besser zu verstehen."
  },
  "it": {
    "Repères de lecture": "Indicazioni di lettura",
    "Comprendre votre carte du ciel": "Comprendere il tuo tema natale",
    "Comment lire votre roue astrologique": "Come leggere la tua ruota astrologica",
    "Votre roue astrologique représente le ciel au moment précis\n            de votre naissance. Chaque signe, planète, maison, angle et\n            aspect participe à la construction de votre thème natal.": "La tua ruota astrologica rappresenta il cielo nel momento preciso\n            della tua nascita. Ogni segno, pianeta, casa, angolo e aspetto\n            contribuisce alla costruzione del tuo tema natale.",
    "Les douze signes du zodiaque": "I dodici segni zodiacali",
    "L’anneau extérieur présente les douze signes du zodiaque.\n              Chaque signe décrit une manière particulière d’exprimer\n              une énergie. Lorsqu’une planète se trouve dans un signe,\n              elle adopte ses qualités, ses besoins, ses réflexes et sa\n              manière d’agir.": "L’anello esterno mostra i dodici segni zodiacali.\n              Ogni segno descrive un modo particolare di esprimere energia.\n              Quando un pianeta si trova in un segno, ne assume qualità,\n              bisogni, riflessi e modo di agire.",
    "Les douze maisons astrologiques": "Le dodici case astrologiche",
    "Les maisons divisent la roue en douze secteurs. Elles\n              représentent les grands domaines de votre existence :\n              identité, ressources, communication, foyer, créativité,\n              travail, relations, transformation, aspirations et\n              vocation.": "Le case dividono la ruota in dodici settori. Rappresentano i\n              grandi ambiti della tua esistenza: identità, risorse,\n              comunicazione, casa, creatività, lavoro, relazioni,\n              trasformazione, aspirazioni e vocazione.",
    "Les planètes": "I pianeti",
    "Les planètes symbolisent les différentes fonctions de\n              votre personnalité. Leur signe montre comment elles\n              s’expriment, tandis que leur maison indique dans quel\n              domaine de votre vie leur influence se manifeste.": "I pianeti simboleggiano le diverse funzioni della tua personalità.\n              Il loro segno mostra come si esprimono, mentre la loro casa indica\n              in quale ambito della tua vita si manifesta la loro influenza.",
    "Soleil": "Sole",
    "Identité et volonté": "Identità e volontà",
    "Lune": "Luna",
    "Émotions et sécurité": "Emozioni e sicurezza",
    "Mercure": "Mercurio",
    "Pensée et communication": "Pensiero e comunicazione",
    "Vénus": "Venere",
    "Amour et valeurs": "Amore e valori",
    "Mars": "Marte",
    "Action et désir": "Azione e desiderio",
    "Les aspects astrologiques": "Gli aspetti astrologici",
    "Les lignes tracées au centre relient les planètes entre\n              elles. Elles représentent les aspects astrologiques.\n              Certains facilitent une expression naturelle de vos\n              énergies, tandis que d’autres révèlent des tensions, des\n              contrastes ou des défis porteurs d’évolution.": "Le linee tracciate al centro collegano i pianeti tra loro.\n              Rappresentano gli aspetti astrologici. Alcuni facilitano una\n              naturale espressione delle tue energie, mentre altri rivelano\n              tensioni, contrasti o sfide che favoriscono l’evoluzione.",
    "Les quatre angles majeurs": "I quattro angoli principali",
    "L’Ascendant indique votre manière d’aborder le monde. Le\n              Descendant décrit votre rapport aux autres. Le Milieu du\n              Ciel concerne votre vocation et votre direction sociale.\n              Le Fond du Ciel représente vos racines et votre sécurité\n              intérieure.": "L’Ascendente indica il tuo modo di affrontare il mondo. Il Discendente\n              descrive il rapporto con gli altri. Il Medio Cielo riguarda la tua\n              vocazione e direzione sociale. Il Fondo Cielo rappresenta le tue\n              radici e la tua sicurezza interiore.",
    "La lecture d’ensemble": "La lettura complessiva",
    "Aucun élément ne doit être interprété isolément. La\n              richesse de votre thème vient de la combinaison entre les\n              planètes, les signes, les maisons, les angles et les\n              aspects. C’est leur dialogue qui révèle votre signature\n              astrologique personnelle.": "Nessun elemento deve essere interpretato isolatamente. La ricchezza\n              del tuo tema nasce dalla combinazione di pianeti, segni, case,\n              angoli e aspetti. Il loro dialogo rivela la tua firma astrologica personale.",
    "Votre thème natal forme un ensemble vivant": "Il tuo tema natale forma un insieme vivente",
    "Les pages suivantes approfondiront progressivement chacun\n            de ces éléments afin de mettre en lumière votre\n            personnalité, votre monde émotionnel, votre manière\n            d’aimer, vos forces naturelles, vos défis et votre\n            potentiel d’évolution.": "Le pagine seguenti approfondiranno progressivamente ciascuno\n            di questi elementi per mettere in luce la tua personalità, il tuo\n            mondo emotivo, il tuo modo di amare, le tue forze naturali, le\n            tue sfide e il tuo potenziale di evoluzione.",
    "Cette page constitue votre guide de référence pour mieux\n          comprendre les interprétations de votre rapport Premium.": "Questa pagina è la tua guida di riferimento per comprendere meglio\n          le interpretazioni del tuo rapporto Premium."
  },
  "pt": {
    "Repères de lecture": "Orientações de leitura",
    "Comprendre votre carte du ciel": "Compreender seu mapa natal",
    "Comment lire votre roue astrologique": "Como ler sua roda astrológica",
    "Votre roue astrologique représente le ciel au moment précis\n            de votre naissance. Chaque signe, planète, maison, angle et\n            aspect participe à la construction de votre thème natal.": "Sua roda astrológica representa o céu no momento exato\n            do seu nascimento. Cada signo, planeta, casa, ângulo e aspecto\n            contribui para a construção do seu mapa natal.",
    "Les douze signes du zodiaque": "Os doze signos do zodíaco",
    "L’anneau extérieur présente les douze signes du zodiaque.\n              Chaque signe décrit une manière particulière d’exprimer\n              une énergie. Lorsqu’une planète se trouve dans un signe,\n              elle adopte ses qualités, ses besoins, ses réflexes et sa\n              manière d’agir.": "O anel externo apresenta os doze signos do zodíaco.\n              Cada signo descreve uma maneira particular de expressar energia.\n              Quando um planeta está em um signo, ele adota suas qualidades,\n              necessidades, reflexos e maneira de agir.",
    "Les douze maisons astrologiques": "As doze casas astrológicas",
    "Les maisons divisent la roue en douze secteurs. Elles\n              représentent les grands domaines de votre existence :\n              identité, ressources, communication, foyer, créativité,\n              travail, relations, transformation, aspirations et\n              vocation.": "As casas dividem a roda em doze setores. Elas representam os\n              grandes domínios da sua existência: identidade, recursos,\n              comunicação, lar, criatividade, trabalho, relacionamentos,\n              transformação, aspirações e vocação.",
    "Les planètes": "Os planetas",
    "Les planètes symbolisent les différentes fonctions de\n              votre personnalité. Leur signe montre comment elles\n              s’expriment, tandis que leur maison indique dans quel\n              domaine de votre vie leur influence se manifeste.": "Os planetas simbolizam as diferentes funções da sua personalidade.\n              O signo mostra como elas se expressam, enquanto a casa indica\n              em qual área da sua vida sua influência se manifesta.",
    "Soleil": "Sol",
    "Identité et volonté": "Identidade e vontade",
    "Lune": "Lua",
    "Émotions et sécurité": "Emoções e segurança",
    "Mercure": "Mercúrio",
    "Pensée et communication": "Pensamento e comunicação",
    "Vénus": "Vênus",
    "Amour et valeurs": "Amor e valores",
    "Mars": "Marte",
    "Action et désir": "Ação e desejo",
    "Les aspects astrologiques": "Os aspectos astrológicos",
    "Les lignes tracées au centre relient les planètes entre\n              elles. Elles représentent les aspects astrologiques.\n              Certains facilitent une expression naturelle de vos\n              énergies, tandis que d’autres révèlent des tensions, des\n              contrastes ou des défis porteurs d’évolution.": "As linhas traçadas no centro conectam os planetas entre si.\n              Elas representam os aspectos astrológicos. Alguns facilitam\n              uma expressão natural das suas energias, enquanto outros revelam\n              tensões, contrastes ou desafios que favorecem a evolução.",
    "Les quatre angles majeurs": "Os quatro ângulos principais",
    "L’Ascendant indique votre manière d’aborder le monde. Le\n              Descendant décrit votre rapport aux autres. Le Milieu du\n              Ciel concerne votre vocation et votre direction sociale.\n              Le Fond du Ciel représente vos racines et votre sécurité\n              intérieure.": "O Ascendente indica sua maneira de abordar o mundo. O Descendente\n              descreve sua relação com os outros. O Meio do Céu diz respeito\n              à sua vocação e direção social. O Fundo do Céu representa suas\n              raízes e sua segurança interior.",
    "La lecture d’ensemble": "A leitura geral",
    "Aucun élément ne doit être interprété isolément. La\n              richesse de votre thème vient de la combinaison entre les\n              planètes, les signes, les maisons, les angles et les\n              aspects. C’est leur dialogue qui révèle votre signature\n              astrologique personnelle.": "Nenhum elemento deve ser interpretado isoladamente. A riqueza do\n              seu mapa vem da combinação entre planetas, signos, casas,\n              ângulos e aspectos. O diálogo entre eles revela sua assinatura\n              astrológica pessoal.",
    "Votre thème natal forme un ensemble vivant": "Seu mapa natal forma um conjunto vivo",
    "Les pages suivantes approfondiront progressivement chacun\n            de ces éléments afin de mettre en lumière votre\n            personnalité, votre monde émotionnel, votre manière\n            d’aimer, vos forces naturelles, vos défis et votre\n            potentiel d’évolution.": "As páginas seguintes aprofundarão progressivamente cada um\n            desses elementos para iluminar sua personalidade, seu mundo\n            emocional, sua maneira de amar, suas forças naturais, seus desafios\n            e seu potencial de evolução.",
    "Cette page constitue votre guide de référence pour mieux\n          comprendre les interprétations de votre rapport Premium.": "Esta página serve como guia de referência para compreender melhor\n          as interpretações do seu relatório Premium."
  }
} as const;

function replaceAll(
  source: string,
  from: string,
  to: string,
): string {
  return source.split(from).join(to);
}

export function localizePremiumWheelGuide(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const lang = locale as NonFrenchLocale;
  const dictionary = TRANSLATIONS[lang];

  let out = source.replace(/\r\n/g, "\n");

  for (const [from, to] of Object.entries(dictionary)) {
    out = replaceAll(
      out,
      from,
      to,
    );
  }

  return out;
}
