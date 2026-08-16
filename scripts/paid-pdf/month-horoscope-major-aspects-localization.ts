import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<PaidPdfLocale, "fr">;
type TranslationMap = Record<string, string>;

const TRANSLATIONS: Record<NonFrenchLocale, TranslationMap> = {
  en: {
    "Deux forces se réunissent": "Two forces come together",
    "Une occasion à faire grandir": "An opportunity to develop",
    "Une tension qui demande un ajustement": "A tension that calls for adjustment",
    "Une énergie qui circule avec fluidité": "Energy flowing with ease",
    "Deux besoins à rééquilibrer": "Two needs to rebalance",
    "Concentrez cette énergie sur une priorité claire afin de lui donner une direction constructive.": "Focus this energy on one clear priority to give it a constructive direction.",
    "Restez attentif aux ouvertures du moment et transformez-les en gestes concrets.": "Stay alert to current openings and turn them into concrete actions.",
    "Évitez les réactions précipitées. Prenez le temps de comprendre la tension avant de choisir votre réponse.": "Avoid hasty reactions. Take time to understand the tension before choosing your response.",
    "Appuyez-vous sur cette facilité pour avancer, sans toutefois tenir les résultats pour acquis.": "Use this ease to move forward without taking the results for granted.",
    "Cherchez un point d’équilibre entre les deux besoins en présence plutôt que de favoriser un seul extrême.": "Seek a balance between the two needs rather than favoring one extreme.",
    "Conjonction": "Conjunction",
    "Sextile": "Sextile",
    "Carré": "Square",
    "Trigone": "Trine",
    "Opposition": "Opposition",
    "La conjonction réunit deux énergies planétaires dans une même direction. Son influence peut être très concentrée et devenir particulièrement marquante.": "A conjunction brings two planetary energies together in the same direction. Its influence can be highly concentrated and especially significant.",
    "Le sextile crée une ouverture favorable. Il facilite les échanges entre les deux planètes, à condition de saisir consciemment l’occasion qu’il propose.": "A sextile creates a favorable opening. It facilitates exchange between the two planets, provided you consciously seize the opportunity it offers.",
    "Le carré révèle une tension entre deux forces qui ne progressent pas au même rythme. Il pousse à agir autrement et à corriger ce qui ne fonctionne plus.": "A square reveals tension between two forces moving at different rhythms. It encourages a different approach and correction of what no longer works.",
    "Le trigone favorise une circulation naturelle entre les deux planètes. Les choses peuvent sembler plus simples, plus cohérentes ou plus faciles à mettre en mouvement.": "A trine supports a natural flow between the two planets. Things may feel simpler, more coherent, or easier to set in motion.",
    "L’opposition place deux besoins face à face. Elle invite à sortir des positions extrêmes pour retrouver une manière plus équilibrée d’avancer.": "An opposition places two needs face to face. It invites you to move beyond extremes and find a more balanced way forward.",
    "date à confirmer": "date to be confirmed",
    "orbe non précisé": "orb not specified",
    "L’aspect se rapproche encore de son point le plus précis.": "The aspect is still approaching its most exact point.",
    "L’aspect vient de dépasser son point le plus précis, mais son influence demeure active.": "The aspect has just passed its most exact point, but its influence remains active.",
    "L’aspect agit durant cette période sans indication supplémentaire sur sa progression.": "The aspect is active during this period without further indication of its progression.",
    "Les mouvements du ciel": "Movements in the sky",
    "Les grands aspects de votre mois": "The major aspects of your month",
    "Votre climat astrologique": "Your astrological climate",
    "Les trois influences les plus marquantes": "The three most significant influences",
    "Dynamique planétaire": "Planetary dynamic",
    "Conseil": "Guidance",
    "Votre ligne directrice": "Your guiding direction",
  },
  es: {
    "Deux forces se réunissent": "Dos fuerzas se unen",
    "Une occasion à faire grandir": "Una oportunidad para desarrollar",
    "Une tension qui demande un ajustement": "Una tensión que requiere un ajuste",
    "Une énergie qui circule avec fluidité": "Una energía que fluye con facilidad",
    "Deux besoins à rééquilibrer": "Dos necesidades que reequilibrar",
    "Concentrez cette énergie sur une priorité claire afin de lui donner une direction constructive.": "Concentre esta energía en una prioridad clara para darle una dirección constructiva.",
    "Restez attentif aux ouvertures du moment et transformez-les en gestes concrets.": "Manténgase atento a las oportunidades del momento y conviértalas en acciones concretas.",
    "Évitez les réactions précipitées. Prenez le temps de comprendre la tension avant de choisir votre réponse.": "Evite las reacciones precipitadas. Tómese el tiempo de comprender la tensión antes de elegir su respuesta.",
    "Appuyez-vous sur cette facilité pour avancer, sans toutefois tenir les résultats pour acquis.": "Apóyese en esta facilidad para avanzar, sin dar los resultados por sentados.",
    "Cherchez un point d’équilibre entre les deux besoins en présence plutôt que de favoriser un seul extrême.": "Busque un punto de equilibrio entre ambas necesidades en lugar de favorecer un solo extremo.",
    "Conjonction": "Conjunción",
    "Sextile": "Sextil",
    "Carré": "Cuadratura",
    "Trigone": "Trígono",
    "Opposition": "Oposición",
    "La conjonction réunit deux énergies planétaires dans une même direction. Son influence peut être très concentrée et devenir particulièrement marquante.": "La conjunción reúne dos energías planetarias en una misma dirección. Su influencia puede ser muy concentrada y especialmente significativa.",
    "Le sextile crée une ouverture favorable. Il facilite les échanges entre les deux planètes, à condition de saisir consciemment l’occasion qu’il propose.": "El sextil crea una apertura favorable. Facilita los intercambios entre ambos planetas, siempre que se aproveche conscientemente la oportunidad que ofrece.",
    "Le carré révèle une tension entre deux forces qui ne progressent pas au même rythme. Il pousse à agir autrement et à corriger ce qui ne fonctionne plus.": "La cuadratura revela una tensión entre dos fuerzas que no avanzan al mismo ritmo. Impulsa a actuar de otra manera y a corregir lo que ya no funciona.",
    "Le trigone favorise une circulation naturelle entre les deux planètes. Les choses peuvent sembler plus simples, plus cohérentes ou plus faciles à mettre en mouvement.": "El trígono favorece un flujo natural entre ambos planetas. Las cosas pueden parecer más sencillas, coherentes o fáciles de poner en marcha.",
    "L’opposition place deux besoins face à face. Elle invite à sortir des positions extrêmes pour retrouver une manière plus équilibrée d’avancer.": "La oposición enfrenta dos necesidades. Invita a abandonar las posiciones extremas para encontrar una forma más equilibrada de avanzar.",
    "date à confirmer": "fecha por confirmar",
    "orbe non précisé": "orbe no especificado",
    "L’aspect se rapproche encore de son point le plus précis.": "El aspecto sigue acercándose a su punto más exacto.",
    "L’aspect vient de dépasser son point le plus précis, mais son influence demeure active.": "El aspecto acaba de superar su punto más exacto, pero su influencia sigue activa.",
    "L’aspect agit durant cette période sans indication supplémentaire sur sa progression.": "El aspecto actúa durante este período sin indicaciones adicionales sobre su evolución.",
    "Les mouvements du ciel": "Los movimientos del cielo",
    "Les grands aspects de votre mois": "Los grandes aspectos de su mes",
    "Votre climat astrologique": "Su clima astrológico",
    "Les trois influences les plus marquantes": "Las tres influencias más destacadas",
    "Dynamique planétaire": "Dinámica planetaria",
    "Conseil": "Consejo",
    "Votre ligne directrice": "Su línea directriz",
  },
  de: {
    "Deux forces se réunissent": "Zwei Kräfte vereinen sich",
    "Une occasion à faire grandir": "Eine Chance, die wachsen kann",
    "Une tension qui demande un ajustement": "Eine Spannung, die Anpassung verlangt",
    "Une énergie qui circule avec fluidité": "Eine Energie, die frei fließt",
    "Deux besoins à rééquilibrer": "Zwei Bedürfnisse neu ausbalancieren",
    "Concentrez cette énergie sur une priorité claire afin de lui donner une direction constructive.": "Richten Sie diese Energie auf eine klare Priorität, um ihr eine konstruktive Richtung zu geben.",
    "Restez attentif aux ouvertures du moment et transformez-les en gestes concrets.": "Achten Sie auf aktuelle Möglichkeiten und setzen Sie sie in konkrete Schritte um.",
    "Évitez les réactions précipitées. Prenez le temps de comprendre la tension avant de choisir votre réponse.": "Vermeiden Sie vorschnelle Reaktionen. Nehmen Sie sich Zeit, die Spannung zu verstehen, bevor Sie reagieren.",
    "Appuyez-vous sur cette facilité pour avancer, sans toutefois tenir les résultats pour acquis.": "Nutzen Sie diese Leichtigkeit, um voranzukommen, ohne Ergebnisse als selbstverständlich anzusehen.",
    "Cherchez un point d’équilibre entre les deux besoins en présence plutôt que de favoriser un seul extrême.": "Suchen Sie ein Gleichgewicht zwischen beiden Bedürfnissen, statt ein Extrem zu bevorzugen.",
    "Conjonction": "Konjunktion",
    "Sextile": "Sextil",
    "Carré": "Quadrat",
    "Trigone": "Trigon",
    "Opposition": "Opposition",
    "La conjonction réunit deux énergies planétaires dans une même direction. Son influence peut être très concentrée et devenir particulièrement marquante.": "Die Konjunktion vereint zwei planetarische Energien in derselben Richtung. Ihr Einfluss kann stark gebündelt und besonders prägend sein.",
    "Le sextile crée une ouverture favorable. Il facilite les échanges entre les deux planètes, à condition de saisir consciemment l’occasion qu’il propose.": "Das Sextil schafft eine günstige Öffnung. Es erleichtert den Austausch zwischen den beiden Planeten, sofern die angebotene Chance bewusst genutzt wird.",
    "Le carré révèle une tension entre deux forces qui ne progressent pas au même rythme. Il pousse à agir autrement et à corriger ce qui ne fonctionne plus.": "Das Quadrat zeigt eine Spannung zwischen zwei Kräften, die sich nicht im gleichen Rhythmus entwickeln. Es fordert dazu auf, anders zu handeln und zu korrigieren, was nicht mehr funktioniert.",
    "Le trigone favorise une circulation naturelle entre les deux planètes. Les choses peuvent sembler plus simples, plus cohérentes ou plus faciles à mettre en mouvement.": "Das Trigon fördert einen natürlichen Fluss zwischen den beiden Planeten. Dinge können einfacher, stimmiger oder leichter in Bewegung zu bringen erscheinen.",
    "L’opposition place deux besoins face à face. Elle invite à sortir des positions extrêmes pour retrouver une manière plus équilibrée d’avancer.": "Die Opposition stellt zwei Bedürfnisse einander gegenüber. Sie lädt dazu ein, extreme Positionen zu verlassen und ausgewogener voranzugehen.",
    "date à confirmer": "Datum noch zu bestätigen",
    "orbe non précisé": "Orb nicht angegeben",
    "L’aspect se rapproche encore de son point le plus précis.": "Der Aspekt nähert sich noch seinem exaktesten Punkt.",
    "L’aspect vient de dépasser son point le plus précis, mais son influence demeure active.": "Der Aspekt hat seinen exaktesten Punkt gerade überschritten, sein Einfluss bleibt jedoch aktiv.",
    "L’aspect agit durant cette période sans indication supplémentaire sur sa progression.": "Der Aspekt wirkt in diesem Zeitraum ohne weitere Angaben zu seinem Verlauf.",
    "Les mouvements du ciel": "Die Bewegungen am Himmel",
    "Les grands aspects de votre mois": "Die wichtigsten Aspekte Ihres Monats",
    "Votre climat astrologique": "Ihr astrologisches Klima",
    "Les trois influences les plus marquantes": "Die drei prägendsten Einflüsse",
    "Dynamique planétaire": "Planetarische Dynamik",
    "Conseil": "Rat",
    "Votre ligne directrice": "Ihre Leitlinie",
  },
  it: {
    "Deux forces se réunissent": "Due forze si uniscono",
    "Une occasion à faire grandir": "Un’opportunità da far crescere",
    "Une tension qui demande un ajustement": "Una tensione che richiede un aggiustamento",
    "Une énergie qui circule avec fluidité": "Un’energia che scorre con fluidità",
    "Deux besoins à rééquilibrer": "Due bisogni da riequilibrare",
    "Concentrez cette énergie sur une priorité claire afin de lui donner une direction constructive.": "Concentra questa energia su una priorità chiara per darle una direzione costruttiva.",
    "Restez attentif aux ouvertures du moment et transformez-les en gestes concrets.": "Resta attento alle opportunità del momento e trasformale in azioni concrete.",
    "Évitez les réactions précipitées. Prenez le temps de comprendre la tension avant de choisir votre réponse.": "Evita reazioni affrettate. Prenditi il tempo di comprendere la tensione prima di scegliere la tua risposta.",
    "Appuyez-vous sur cette facilité pour avancer, sans toutefois tenir les résultats pour acquis.": "Sfrutta questa facilità per avanzare, senza però dare i risultati per scontati.",
    "Cherchez un point d’équilibre entre les deux besoins en présence plutôt que de favoriser un seul extrême.": "Cerca un punto di equilibrio tra i due bisogni invece di favorire un solo estremo.",
    "Conjonction": "Congiunzione",
    "Sextile": "Sestile",
    "Carré": "Quadratura",
    "Trigone": "Trigono",
    "Opposition": "Opposizione",
    "La conjonction réunit deux énergies planétaires dans une même direction. Son influence peut être très concentrée et devenir particulièrement marquante.": "La congiunzione riunisce due energie planetarie nella stessa direzione. La sua influenza può essere molto concentrata e particolarmente significativa.",
    "Le sextile crée une ouverture favorable. Il facilite les échanges entre les deux planètes, à condition de saisir consciemment l’occasion qu’il propose.": "Il sestile crea un’apertura favorevole. Facilita gli scambi tra i due pianeti, a condizione di cogliere consapevolmente l’opportunità che offre.",
    "Le carré révèle une tension entre deux forces qui ne progressent pas au même rythme. Il pousse à agir autrement et à corriger ce qui ne fonctionne plus.": "La quadratura rivela una tensione tra due forze che non avanzano allo stesso ritmo. Spinge ad agire diversamente e a correggere ciò che non funziona più.",
    "Le trigone favorise une circulation naturelle entre les deux planètes. Les choses peuvent sembler plus simples, plus cohérentes ou plus faciles à mettre en mouvement.": "Il trigono favorisce un flusso naturale tra i due pianeti. Le cose possono sembrare più semplici, coerenti o facili da mettere in movimento.",
    "L’opposition place deux besoins face à face. Elle invite à sortir des positions extrêmes pour retrouver une manière plus équilibrée d’avancer.": "L’opposizione mette due bisogni l’uno di fronte all’altro. Invita a uscire dalle posizioni estreme per ritrovare un modo più equilibrato di avanzare.",
    "date à confirmer": "data da confermare",
    "orbe non précisé": "orbita non specificata",
    "L’aspect se rapproche encore de son point le plus précis.": "L’aspetto si sta ancora avvicinando al suo punto più esatto.",
    "L’aspect vient de dépasser son point le plus précis, mais son influence demeure active.": "L’aspetto ha appena superato il suo punto più esatto, ma la sua influenza rimane attiva.",
    "L’aspect agit durant cette période sans indication supplémentaire sur sa progression.": "L’aspetto agisce durante questo periodo senza ulteriori indicazioni sulla sua evoluzione.",
    "Les mouvements du ciel": "I movimenti del cielo",
    "Les grands aspects de votre mois": "I grandi aspetti del tuo mese",
    "Votre climat astrologique": "Il tuo clima astrologico",
    "Les trois influences les plus marquantes": "Le tre influenze più significative",
    "Dynamique planétaire": "Dinamica planetaria",
    "Conseil": "Consiglio",
    "Votre ligne directrice": "La tua linea guida",
  },
  pt: {
    "Deux forces se réunissent": "Duas forças se unem",
    "Une occasion à faire grandir": "Uma oportunidade para desenvolver",
    "Une tension qui demande un ajustement": "Uma tensão que exige ajuste",
    "Une énergie qui circule avec fluidité": "Uma energia que flui com facilidade",
    "Deux besoins à rééquilibrer": "Duas necessidades para reequilibrar",
    "Concentrez cette énergie sur une priorité claire afin de lui donner une direction constructive.": "Concentre esta energia em uma prioridade clara para dar a ela uma direção construtiva.",
    "Restez attentif aux ouvertures du moment et transformez-les en gestes concrets.": "Fique atento às oportunidades do momento e transforme-as em ações concretas.",
    "Évitez les réactions précipitées. Prenez le temps de comprendre la tension avant de choisir votre réponse.": "Evite reações precipitadas. Reserve um tempo para compreender a tensão antes de escolher sua resposta.",
    "Appuyez-vous sur cette facilité pour avancer, sans toutefois tenir les résultats pour acquis.": "Apoie-se nessa facilidade para avançar, sem considerar os resultados garantidos.",
    "Cherchez un point d’équilibre entre les deux besoins en présence plutôt que de favoriser un seul extrême.": "Busque um ponto de equilíbrio entre as duas necessidades em vez de favorecer apenas um extremo.",
    "Conjonction": "Conjunção",
    "Sextile": "Sextil",
    "Carré": "Quadratura",
    "Trigone": "Trígono",
    "Opposition": "Oposição",
    "La conjonction réunit deux énergies planétaires dans une même direction. Son influence peut être très concentrée et devenir particulièrement marquante.": "A conjunção reúne duas energias planetárias na mesma direção. Sua influência pode ser muito concentrada e especialmente marcante.",
    "Le sextile crée une ouverture favorable. Il facilite les échanges entre les deux planètes, à condition de saisir consciemment l’occasion qu’il propose.": "O sextil cria uma abertura favorável. Facilita as trocas entre os dois planetas, desde que a oportunidade oferecida seja aproveitada conscientemente.",
    "Le carré révèle une tension entre deux forces qui ne progressent pas au même rythme. Il pousse à agir autrement et à corriger ce qui ne fonctionne plus.": "A quadratura revela uma tensão entre duas forças que não avançam no mesmo ritmo. Ela incentiva a agir de outra forma e corrigir o que já não funciona.",
    "Le trigone favorise une circulation naturelle entre les deux planètes. Les choses peuvent sembler plus simples, plus cohérentes ou plus faciles à mettre en mouvement.": "O trígono favorece um fluxo natural entre os dois planetas. As coisas podem parecer mais simples, coerentes ou fáceis de colocar em movimento.",
    "L’opposition place deux besoins face à face. Elle invite à sortir des positions extrêmes pour retrouver une manière plus équilibrée d’avancer.": "A oposição coloca duas necessidades frente a frente. Ela convida a sair de posições extremas para encontrar uma maneira mais equilibrada de avançar.",
    "date à confirmer": "data a confirmar",
    "orbe non précisé": "orbe não especificado",
    "L’aspect se rapproche encore de son point le plus précis.": "O aspecto ainda está se aproximando de seu ponto mais exato.",
    "L’aspect vient de dépasser son point le plus précis, mais son influence demeure active.": "O aspecto acaba de ultrapassar seu ponto mais exato, mas sua influência permanece ativa.",
    "L’aspect agit durant cette période sans indication supplémentaire sur sa progression.": "O aspecto atua durante este período sem indicação adicional sobre sua progressão.",
    "Les mouvements du ciel": "Os movimentos do céu",
    "Les grands aspects de votre mois": "Os grandes aspectos do seu mês",
    "Votre climat astrologique": "Seu clima astrológico",
    "Les trois influences les plus marquantes": "As três influências mais marcantes",
    "Dynamique planétaire": "Dinâmica planetária",
    "Conseil": "Conselho",
    "Votre ligne directrice": "Sua linha orientadora",
  },
};

const LOCALE_TAGS: Record<NonFrenchLocale, string> = {
  en: "en-CA",
  es: "es",
  de: "de",
  it: "it",
  pt: "pt-BR",
};

function replaceAllLiteral(
  source: string,
  from: string,
  to: string,
): string {
  return source.split(from).join(to);
}

function localizeStaticStrings(
  source: string,
  translations: TranslationMap,
): string {
  let output = source;

  for (const [from, to] of Object.entries(translations)) {
    output = replaceAllLiteral(
      output,
      JSON.stringify(from),
      JSON.stringify(to),
    );
  }

  return output;
}

function localizeJsxText(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile = ts.createSourceFile(
    "HoroscopeMonthMajorAspects.tsx",
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

  function visit(node: ts.Node): void {
    if (ts.isJsxText(node)) {
      const raw = node.getText(sourceFile);
      const normalized = raw.replace(/\s+/g, " ").trim();

      const translated = translations[normalized];

      if (translated) {
        replacements.push({
          start: node.getStart(sourceFile),
          end: node.getEnd(),
          value: `\n            ${translated}\n          `,
        });
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  return replacements
    .sort((a, b) => b.start - a.start)
    .reduce(
      (output, replacement) =>
        output.slice(0, replacement.start) +
        replacement.value +
        output.slice(replacement.end),
      source,
    );
}

function localizeDynamicText(
  source: string,
  locale: NonFrenchLocale,
): string {
  const exactInfluence: Record<NonFrenchLocale, string> = {
    en: "Its influence reaches its peak around ${exactDate}, with an ${orb}.",
    es: "Su influencia alcanza su máximo alrededor del ${exactDate}, con un ${orb}.",
    de: "Sein Einfluss erreicht um den ${exactDate} seinen Höhepunkt, mit einem ${orb}.",
    it: "La sua influenza raggiunge il massimo intorno al ${exactDate}, con un ${orb}.",
    pt: "Sua influência atinge o máximo por volta de ${exactDate}, com um ${orb}.",
  };

  const summaryWithAspects: Record<NonFrenchLocale, string> = {
    en: "The most exact aspects of ${periodLabel} invite you to observe how the different forces of the month complement or confront one another. Use the available openings while taking time to understand tensions before responding to them.",
    es: "Los aspectos más exactos de ${periodLabel} le invitan a observar cómo las distintas fuerzas del mes se complementan o se enfrentan. Aproveche las oportunidades disponibles y tómese el tiempo de comprender las tensiones antes de responder.",
    de: "Die genauesten Aspekte von ${periodLabel} laden Sie dazu ein, zu beobachten, wie sich die verschiedenen Kräfte des Monats ergänzen oder gegenüberstehen. Nutzen Sie vorhandene Möglichkeiten und nehmen Sie sich Zeit, Spannungen zu verstehen, bevor Sie darauf reagieren.",
    it: "Gli aspetti più esatti di ${periodLabel} ti invitano a osservare come le diverse forze del mese si completano o si confrontano. Sfrutta le opportunità disponibili, prendendoti il tempo di comprendere le tensioni prima di reagire.",
    pt: "Os aspectos mais exatos de ${periodLabel} convidam você a observar como as diferentes forças do mês se complementam ou se confrontam. Aproveite as oportunidades disponíveis e reserve um tempo para compreender as tensões antes de responder a elas.",
  };

  const summaryWithoutAspects: Record<NonFrenchLocale, string> = {
    en: "No major aspect was selected for ${periodLabel}. The month's astrological climate nevertheless remains evolving: observe changes in rhythm and adapt your decisions with discernment.",
    es: "No se seleccionó ningún aspecto mayor para ${periodLabel}. Sin embargo, el clima astrológico del mes sigue evolucionando: observe los cambios de ritmo y adapte sus decisiones con discernimiento.",
    de: "Für ${periodLabel} wurde kein Hauptaspekt ausgewählt. Das astrologische Klima des Monats bleibt dennoch im Wandel: Beobachten Sie Rhythmusänderungen und passen Sie Ihre Entscheidungen mit Bedacht an.",
    it: "Nessun aspetto maggiore è stato selezionato per ${periodLabel}. Il clima astrologico del mese rimane comunque in evoluzione: osserva i cambiamenti di ritmo e adatta le tue decisioni con discernimento.",
    pt: "Nenhum aspecto maior foi selecionado para ${periodLabel}. Ainda assim, o clima astrológico do mês permanece em evolução: observe as mudanças de ritmo e adapte suas decisões com discernimento.",
  };

  let output = source;

  output = output.replace(
    /`Son influence atteint son maximum autour du \$\{exactDate\}, avec un \$\{orb\}\.`/g,
    `\`${exactInfluence[locale]}\``,
  );

  output = output.replace(
    /`Les aspects les plus précis de \$\{periodLabel\} vous invitent à observer comment les différentes forces du mois se complètent ou se confrontent\. Appuyez-vous sur les ouvertures disponibles, tout en prenant le temps de comprendre les tensions avant d’y répondre\.`/g,
    `\`${summaryWithAspects[locale]}\``,
  );

  output = output.replace(
    /`Aucun aspect majeur n’a été retenu pour \$\{periodLabel\}\. Le climat astrologique du mois demeure toutefois évolutif : observez les changements de rythme et adaptez vos décisions avec discernement\.`/g,
    `\`${summaryWithoutAspects[locale]}\``,
  );

  return output;
}

function localizeFormatter(
  source: string,
  locale: NonFrenchLocale,
): string {
  return source.replace(
    /new Intl\.DateTimeFormat\(\s*"fr-CA",/g,
    `new Intl.DateTimeFormat(\n    ${JSON.stringify(LOCALE_TAGS[locale])},`,
  );
}

export function localizeHoroscopeMonthMajorAspects(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const normalizedLocale = locale as NonFrenchLocale;
  const translations = TRANSLATIONS[normalizedLocale];

  if (!translations) {
    return source;
  }

  let localized = localizeStaticStrings(
    source,
    translations,
  );

  localized = localizeJsxText(
    localized,
    translations,
  );

  localized = localizeDynamicText(
    localized,
    normalizedLocale,
  );

  localized = localizeFormatter(
    localized,
    normalizedLocale,
  );

  return localized;
}
