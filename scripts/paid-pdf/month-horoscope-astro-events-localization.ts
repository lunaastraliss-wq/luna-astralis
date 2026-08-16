import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

type TranslationMap =
  Record<string, string>;

const TRANSLATIONS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Entrée dans un nouveau signe": "Entry into a new sign",
    "Transition": "Transition",
    "Début de rétrogradation": "Start of retrograde",
    "Révision": "Review",
    "Fin de rétrogradation": "End of retrograde",
    "Reprise": "Resumption",
    "Station rétrograde": "Retrograde station",
    "Retour en mouvement direct": "Return to direct motion",
    "Conjonction planétaire": "Planetary conjunction",
    "Alignement": "Alignment",
    "Trigone planétaire": "Planetary trine",
    "Harmonie": "Harmony",
    "Sextile planétaire": "Planetary sextile",
    "Ouverture": "Opening",
    "Carré planétaire": "Planetary square",
    "Ajustement": "Adjustment",
    "Opposition planétaire": "Planetary opposition",
    "Prise de conscience": "Awareness",
    "Mouvement": "Movement",
    "Date à confirmer": "Date to be confirmed",
    "Une période propice à la révision": "A favorable period for review",
    "Une configuration qui transforme le climat du mois": "A configuration that transforms the month's climate",
    "Une nouvelle dynamique commence à se dessiner": "A new dynamic begins to emerge",
    "Un mouvement céleste attire votre attention": "A celestial movement draws your attention",
    "Cette influence peut ramener un dossier, une décision ou une situation qui mérite d’être examinée avec davantage de recul.": "This influence may bring back a matter, decision, or situation that deserves to be reviewed with greater perspective.",
    "Cette configuration peut favoriser une ouverture, une prise de conscience ou une nouvelle manière d’envisager la situation.": "This configuration may support an opening, a realization, or a new way of viewing the situation.",
    "Cette transition peut déplacer progressivement votre attention vers de nouvelles priorités ou un autre domaine de votre vie.": "This transition may gradually shift your attention toward new priorities or another area of your life.",
    "Ce mouvement peut modifier le rythme de vos échanges, de vos décisions ou de vos initiatives.": "This movement may alter the rhythm of your exchanges, decisions, or initiatives.",
    "Prenez le temps de vérifier, de corriger et de consolider avant de poursuivre.": "Take time to verify, correct, and consolidate before moving forward.",
    "Accueillez cette ouverture avec clarté et utilisez-la pour coordonner vos efforts.": "Welcome this opening with clarity and use it to coordinate your efforts.",
    "Observez ce qui se termine et ce qui commence naturellement à prendre de l’importance.": "Observe what is ending and what is naturally beginning to gain importance.",
    "Restez attentif aux changements de rythme et adaptez vos décisions au contexte.": "Stay attentive to changes in pace and adapt your decisions to the context.",
    "Cet événement astrologique fait évoluer le climat général du mois. Il peut mettre en lumière une nouvelle priorité, un ajustement nécessaire ou une étape importante de votre progression.": "This astrological event changes the month's overall climate. It may highlight a new priority, a necessary adjustment, or an important step in your progress.",
    "Les mouvements du ciel": "Movements in the sky",
    "Les événements astrologiques du mois": "The astrological events of the month",
    "Votre calendrier céleste": "Your celestial calendar",
    "Ces événements décrivent d’abord des tendances collectives. Leur effet personnel dépend de leur interaction avec votre signe, votre thème natal et les autres mouvements présents durant le mois.": "These events primarily describe collective trends. Their personal effect depends on how they interact with your sign, your natal chart, and the other movements present during the month.",
    "Les moments importants du mois": "The important moments of the month",
    "Événement astrologique": "Astrological event",
    "Influence possible": "Possible influence",
    "Conseil": "Guidance",
    "Observer les transitions du mois": "Observe the month's transitions",
  },
  es: {
    "Entrée dans un nouveau signe": "Entrada en un nuevo signo",
    "Transition": "Transición",
    "Début de rétrogradation": "Inicio de retrogradación",
    "Révision": "Revisión",
    "Fin de rétrogradation": "Fin de retrogradación",
    "Reprise": "Reanudación",
    "Station rétrograde": "Estación retrógrada",
    "Retour en mouvement direct": "Retorno al movimiento directo",
    "Conjonction planétaire": "Conjunción planetaria",
    "Alignement": "Alineación",
    "Trigone planétaire": "Trígono planetario",
    "Harmonie": "Armonía",
    "Sextile planétaire": "Sextil planetario",
    "Ouverture": "Apertura",
    "Carré planétaire": "Cuadratura planetaria",
    "Ajustement": "Ajuste",
    "Opposition planétaire": "Oposición planetaria",
    "Prise de conscience": "Toma de conciencia",
    "Mouvement": "Movimiento",
    "Date à confirmer": "Fecha por confirmar",
    "Une période propice à la révision": "Un período favorable para la revisión",
    "Une configuration qui transforme le climat du mois": "Una configuración que transforma el clima del mes",
    "Une nouvelle dynamique commence à se dessiner": "Empieza a perfilarse una nueva dinámica",
    "Un mouvement céleste attire votre attention": "Un movimiento celeste llama su atención",
    "Cette influence peut ramener un dossier, une décision ou une situation qui mérite d’être examinée avec davantage de recul.": "Esta influencia puede hacer reaparecer un asunto, una decisión o una situación que merece ser examinada con mayor perspectiva.",
    "Cette configuration peut favoriser une ouverture, une prise de conscience ou une nouvelle manière d’envisager la situation.": "Esta configuración puede favorecer una apertura, una toma de conciencia o una nueva forma de considerar la situación.",
    "Cette transition peut déplacer progressivement votre attention vers de nouvelles priorités ou un autre domaine de votre vie.": "Esta transición puede desplazar gradualmente su atención hacia nuevas prioridades u otro ámbito de su vida.",
    "Ce mouvement peut modifier le rythme de vos échanges, de vos décisions ou de vos initiatives.": "Este movimiento puede modificar el ritmo de sus intercambios, decisiones o iniciativas.",
    "Prenez le temps de vérifier, de corriger et de consolider avant de poursuivre.": "Tómese el tiempo de verificar, corregir y consolidar antes de continuar.",
    "Accueillez cette ouverture avec clarté et utilisez-la pour coordonner vos efforts.": "Reciba esta apertura con claridad y utilícela para coordinar sus esfuerzos.",
    "Observez ce qui se termine et ce qui commence naturellement à prendre de l’importance.": "Observe lo que termina y lo que empieza naturalmente a adquirir importancia.",
    "Restez attentif aux changements de rythme et adaptez vos décisions au contexte.": "Manténgase atento a los cambios de ritmo y adapte sus decisiones al contexto.",
    "Cet événement astrologique fait évoluer le climat général du mois. Il peut mettre en lumière une nouvelle priorité, un ajustement nécessaire ou une étape importante de votre progression.": "Este acontecimiento astrológico hace evolucionar el clima general del mes. Puede poner de relieve una nueva prioridad, un ajuste necesario o una etapa importante de su progreso.",
    "Les mouvements du ciel": "Los movimientos del cielo",
    "Les événements astrologiques du mois": "Los acontecimientos astrológicos del mes",
    "Votre calendrier céleste": "Su calendario celeste",
    "Ces événements décrivent d’abord des tendances collectives. Leur effet personnel dépend de leur interaction avec votre signe, votre thème natal et les autres mouvements présents durant le mois.": "Estos acontecimientos describen ante todo tendencias colectivas. Su efecto personal depende de su interacción con su signo, su carta natal y los demás movimientos presentes durante el mes.",
    "Les moments importants du mois": "Los momentos importantes del mes",
    "Événement astrologique": "Acontecimiento astrológico",
    "Influence possible": "Influencia posible",
    "Conseil": "Consejo",
    "Observer les transitions du mois": "Observar las transiciones del mes",
  },
  de: {
    "Entrée dans un nouveau signe": "Eintritt in ein neues Zeichen",
    "Transition": "Übergang",
    "Début de rétrogradation": "Beginn der Rückläufigkeit",
    "Révision": "Überprüfung",
    "Fin de rétrogradation": "Ende der Rückläufigkeit",
    "Reprise": "Wiederaufnahme",
    "Station rétrograde": "Rückläufige Station",
    "Retour en mouvement direct": "Rückkehr zur Direktläufigkeit",
    "Conjonction planétaire": "Planetarische Konjunktion",
    "Alignement": "Ausrichtung",
    "Trigone planétaire": "Planetarisches Trigon",
    "Harmonie": "Harmonie",
    "Sextile planétaire": "Planetarisches Sextil",
    "Ouverture": "Öffnung",
    "Carré planétaire": "Planetarisches Quadrat",
    "Ajustement": "Anpassung",
    "Opposition planétaire": "Planetarische Opposition",
    "Prise de conscience": "Erkenntnis",
    "Mouvement": "Bewegung",
    "Date à confirmer": "Datum noch zu bestätigen",
    "Une période propice à la révision": "Eine günstige Phase zur Überprüfung",
    "Une configuration qui transforme le climat du mois": "Eine Konstellation, die das Monatsklima verändert",
    "Une nouvelle dynamique commence à se dessiner": "Eine neue Dynamik beginnt sich abzuzeichnen",
    "Un mouvement céleste attire votre attention": "Eine Himmelsbewegung zieht Ihre Aufmerksamkeit auf sich",
    "Cette influence peut ramener un dossier, une décision ou une situation qui mérite d’être examinée avec davantage de recul.": "Dieser Einfluss kann ein Thema, eine Entscheidung oder eine Situation zurückbringen, die mit größerem Abstand betrachtet werden sollte.",
    "Cette configuration peut favoriser une ouverture, une prise de conscience ou une nouvelle manière d’envisager la situation.": "Diese Konstellation kann eine Öffnung, eine Erkenntnis oder eine neue Sichtweise auf die Situation begünstigen.",
    "Cette transition peut déplacer progressivement votre attention vers de nouvelles priorités ou un autre domaine de votre vie.": "Dieser Übergang kann Ihre Aufmerksamkeit allmählich auf neue Prioritäten oder einen anderen Lebensbereich lenken.",
    "Ce mouvement peut modifier le rythme de vos échanges, de vos décisions ou de vos initiatives.": "Diese Bewegung kann den Rhythmus Ihrer Gespräche, Entscheidungen oder Initiativen verändern.",
    "Prenez le temps de vérifier, de corriger et de consolider avant de poursuivre.": "Nehmen Sie sich Zeit zum Prüfen, Korrigieren und Festigen, bevor Sie fortfahren.",
    "Accueillez cette ouverture avec clarté et utilisez-la pour coordonner vos efforts.": "Nehmen Sie diese Öffnung mit Klarheit an und nutzen Sie sie, um Ihre Bemühungen zu koordinieren.",
    "Observez ce qui se termine et ce qui commence naturellement à prendre de l’importance.": "Beobachten Sie, was endet und was auf natürliche Weise an Bedeutung gewinnt.",
    "Restez attentif aux changements de rythme et adaptez vos décisions au contexte.": "Achten Sie auf Rhythmusänderungen und passen Sie Ihre Entscheidungen an den Kontext an.",
    "Cet événement astrologique fait évoluer le climat général du mois. Il peut mettre en lumière une nouvelle priorité, un ajustement nécessaire ou une étape importante de votre progression.": "Dieses astrologische Ereignis verändert das allgemeine Monatsklima. Es kann eine neue Priorität, eine notwendige Anpassung oder einen wichtigen Schritt Ihres Fortschritts hervorheben.",
    "Les mouvements du ciel": "Die Bewegungen am Himmel",
    "Les événements astrologiques du mois": "Die astrologischen Ereignisse des Monats",
    "Votre calendrier céleste": "Ihr Himmelskalender",
    "Ces événements décrivent d’abord des tendances collectives. Leur effet personnel dépend de leur interaction avec votre signe, votre thème natal et les autres mouvements présents durant le mois.": "Diese Ereignisse beschreiben zunächst kollektive Tendenzen. Ihre persönliche Wirkung hängt von ihrem Zusammenspiel mit Ihrem Zeichen, Ihrem Geburtshoroskop und den anderen Bewegungen des Monats ab.",
    "Les moments importants du mois": "Die wichtigen Momente des Monats",
    "Événement astrologique": "Astrologisches Ereignis",
    "Influence possible": "Möglicher Einfluss",
    "Conseil": "Rat",
    "Observer les transitions du mois": "Die Übergänge des Monats beobachten",
  },
  it: {
    "Entrée dans un nouveau signe": "Ingresso in un nuovo segno",
    "Transition": "Transizione",
    "Début de rétrogradation": "Inizio della retrogradazione",
    "Révision": "Revisione",
    "Fin de rétrogradation": "Fine della retrogradazione",
    "Reprise": "Ripresa",
    "Station rétrograde": "Stazione retrograda",
    "Retour en mouvement direct": "Ritorno al moto diretto",
    "Conjonction planétaire": "Congiunzione planetaria",
    "Alignement": "Allineamento",
    "Trigone planétaire": "Trigono planetario",
    "Harmonie": "Armonia",
    "Sextile planétaire": "Sestile planetario",
    "Ouverture": "Apertura",
    "Carré planétaire": "Quadratura planetaria",
    "Ajustement": "Aggiustamento",
    "Opposition planétaire": "Opposizione planetaria",
    "Prise de conscience": "Presa di coscienza",
    "Mouvement": "Movimento",
    "Date à confirmer": "Data da confermare",
    "Une période propice à la révision": "Un periodo favorevole alla revisione",
    "Une configuration qui transforme le climat du mois": "Una configurazione che trasforma il clima del mese",
    "Une nouvelle dynamique commence à se dessiner": "Una nuova dinamica inizia a delinearsi",
    "Un mouvement céleste attire votre attention": "Un movimento celeste attira la tua attenzione",
    "Cette influence peut ramener un dossier, une décision ou une situation qui mérite d’être examinée avec davantage de recul.": "Questa influenza può riportare un tema, una decisione o una situazione che merita di essere esaminata con maggiore distacco.",
    "Cette configuration peut favoriser une ouverture, une prise de conscience ou une nouvelle manière d’envisager la situation.": "Questa configurazione può favorire un'apertura, una presa di coscienza o un nuovo modo di considerare la situazione.",
    "Cette transition peut déplacer progressivement votre attention vers de nouvelles priorités ou un autre domaine de votre vie.": "Questa transizione può spostare gradualmente la tua attenzione verso nuove priorità o un altro ambito della tua vita.",
    "Ce mouvement peut modifier le rythme de vos échanges, de vos décisions ou de vos initiatives.": "Questo movimento può modificare il ritmo dei tuoi scambi, delle tue decisioni o delle tue iniziative.",
    "Prenez le temps de vérifier, de corriger et de consolider avant de poursuivre.": "Prenditi il tempo per verificare, correggere e consolidare prima di proseguire.",
    "Accueillez cette ouverture avec clarté et utilisez-la pour coordonner vos efforts.": "Accogli questa apertura con chiarezza e usala per coordinare i tuoi sforzi.",
    "Observez ce qui se termine et ce qui commence naturellement à prendre de l’importance.": "Osserva ciò che si conclude e ciò che inizia naturalmente ad assumere importanza.",
    "Restez attentif aux changements de rythme et adaptez vos décisions au contexte.": "Resta attento ai cambiamenti di ritmo e adatta le tue decisioni al contesto.",
    "Cet événement astrologique fait évoluer le climat général du mois. Il peut mettre en lumière une nouvelle priorité, un ajustement nécessaire ou une étape importante de votre progression.": "Questo evento astrologico modifica il clima generale del mese. Può mettere in luce una nuova priorità, un aggiustamento necessario o una tappa importante del tuo percorso.",
    "Les mouvements du ciel": "I movimenti del cielo",
    "Les événements astrologiques du mois": "Gli eventi astrologici del mese",
    "Votre calendrier céleste": "Il tuo calendario celeste",
    "Ces événements décrivent d’abord des tendances collectives. Leur effet personnel dépend de leur interaction avec votre signe, votre thème natal et les autres mouvements présents durant le mois.": "Questi eventi descrivono innanzitutto tendenze collettive. Il loro effetto personale dipende dall'interazione con il tuo segno, il tuo tema natale e gli altri movimenti presenti durante il mese.",
    "Les moments importants du mois": "I momenti importanti del mese",
    "Événement astrologique": "Evento astrologico",
    "Influence possible": "Influenza possibile",
    "Conseil": "Consiglio",
    "Observer les transitions du mois": "Osservare le transizioni del mese",
  },
  pt: {
    "Entrée dans un nouveau signe": "Entrada em um novo signo",
    "Transition": "Transição",
    "Début de rétrogradation": "Início da retrogradação",
    "Révision": "Revisão",
    "Fin de rétrogradation": "Fim da retrogradação",
    "Reprise": "Retomada",
    "Station rétrograde": "Estação retrógrada",
    "Retour en mouvement direct": "Retorno ao movimento direto",
    "Conjonction planétaire": "Conjunção planetária",
    "Alignement": "Alinhamento",
    "Trigone planétaire": "Trígono planetário",
    "Harmonie": "Harmonia",
    "Sextile planétaire": "Sextil planetário",
    "Ouverture": "Abertura",
    "Carré planétaire": "Quadratura planetária",
    "Ajustement": "Ajuste",
    "Opposition planétaire": "Oposição planetária",
    "Prise de conscience": "Tomada de consciência",
    "Mouvement": "Movimento",
    "Date à confirmer": "Data a confirmar",
    "Une période propice à la révision": "Um período favorável à revisão",
    "Une configuration qui transforme le climat du mois": "Uma configuração que transforma o clima do mês",
    "Une nouvelle dynamique commence à se dessiner": "Uma nova dinâmica começa a se delinear",
    "Un mouvement céleste attire votre attention": "Um movimento celeste chama sua atenção",
    "Cette influence peut ramener un dossier, une décision ou une situation qui mérite d’être examinée avec davantage de recul.": "Esta influência pode trazer de volta uma questão, decisão ou situação que merece ser examinada com mais distanciamento.",
    "Cette configuration peut favoriser une ouverture, une prise de conscience ou une nouvelle manière d’envisager la situation.": "Esta configuração pode favorecer uma abertura, uma tomada de consciência ou uma nova forma de enxergar a situação.",
    "Cette transition peut déplacer progressivement votre attention vers de nouvelles priorités ou un autre domaine de votre vie.": "Esta transição pode deslocar gradualmente sua atenção para novas prioridades ou outra área da sua vida.",
    "Ce mouvement peut modifier le rythme de vos échanges, de vos décisions ou de vos initiatives.": "Este movimento pode alterar o ritmo das suas trocas, decisões ou iniciativas.",
    "Prenez le temps de vérifier, de corriger et de consolider avant de poursuivre.": "Reserve um tempo para verificar, corrigir e consolidar antes de prosseguir.",
    "Accueillez cette ouverture avec clarté et utilisez-la pour coordonner vos efforts.": "Acolha esta abertura com clareza e use-a para coordenar seus esforços.",
    "Observez ce qui se termine et ce qui commence naturellement à prendre de l’importance.": "Observe o que está terminando e o que começa naturalmente a ganhar importância.",
    "Restez attentif aux changements de rythme et adaptez vos décisions au contexte.": "Fique atento às mudanças de ritmo e adapte suas decisões ao contexto.",
    "Cet événement astrologique fait évoluer le climat général du mois. Il peut mettre en lumière une nouvelle priorité, un ajustement nécessaire ou une étape importante de votre progression.": "Este evento astrológico altera o clima geral do mês. Pode destacar uma nova prioridade, um ajuste necessário ou uma etapa importante do seu progresso.",
    "Les mouvements du ciel": "Os movimentos do céu",
    "Les événements astrologiques du mois": "Os eventos astrológicos do mês",
    "Votre calendrier céleste": "Seu calendário celeste",
    "Ces événements décrivent d’abord des tendances collectives. Leur effet personnel dépend de leur interaction avec votre signe, votre thème natal et les autres mouvements présents durant le mois.": "Esses eventos descrevem, antes de tudo, tendências coletivas. Seu efeito pessoal depende da interação com seu signo, seu mapa natal e os outros movimentos presentes durante o mês.",
    "Les moments importants du mois": "Os momentos importantes do mês",
    "Événement astrologique": "Evento astrológico",
    "Influence possible": "Influência possível",
    "Conseil": "Conselho",
    "Observer les transitions du mois": "Observar as transições do mês",
  },
};

const LOCALE_TAGS: Record<
  NonFrenchLocale,
  string
> = {
  en: "en-CA",
  es: "es",
  de: "de",
  it: "it",
  pt: "pt-BR",
};

function localizeStaticText(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile =
    ts.createSourceFile(
      "HoroscopeMonthAstroEvents.tsx",
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
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(
        node,
      )
    ) {
      const translated =
        translations[node.text];

      if (
        translated &&
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

      if (translated) {
        const trimmed =
          raw.trim();

        replacements.push({
          start:
            node.getStart(sourceFile),
          end:
            node.getEnd(),
          value:
            trimmed
              ? raw.replace(
                  trimmed,
                  translated,
                )
              : raw,
        });
      }
    }

    ts.forEachChild(node, visit);
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

function localizeDateFormatter(
  source: string,
  locale: NonFrenchLocale,
): string {
  return source.replace(
    /new Intl\.DateTimeFormat\(\s*"fr-CA",/g,
    `new Intl.DateTimeFormat(\n    ${JSON.stringify(
      LOCALE_TAGS[locale],
    )},`,
  );
}

function localizeDynamicText(
  source: string,
  locale: NonFrenchLocale,
): string {
  const eventFallback: Record<
    NonFrenchLocale,
    string
  > = {
    en: "Astrological event ${index + 1}",
    es: "Acontecimiento astrológico ${index + 1}",
    de: "Astrologisches Ereignis ${index + 1}",
    it: "Evento astrologico ${index + 1}",
    pt: "Evento astrológico ${index + 1}",
  };

  const closingWithEvents: Record<
    NonFrenchLocale,
    string
  > = {
    en:
      "The main events of ${period.label} are ${eventNames}. Some support momentum and decision-making, while others invite you to review, adjust, or slow down. Use these milestones to move forward at the right time.",
    es:
      "Los principales acontecimientos de ${period.label} son ${eventNames}. Algunos favorecen el impulso y la toma de decisiones, mientras que otros invitan a revisar, ajustar o reducir el ritmo. Utilice estos hitos para avanzar en el momento adecuado.",
    de:
      "Die wichtigsten Ereignisse von ${period.label} sind ${eventNames}. Einige fördern Schwung und Entscheidungen, andere laden zum Überprüfen, Anpassen oder Verlangsamen ein. Nutzen Sie diese Orientierungspunkte, um zum richtigen Zeitpunkt voranzugehen.",
    it:
      "I principali eventi di ${period.label} sono ${eventNames}. Alcuni favoriscono lo slancio e le decisioni, mentre altri invitano a rivedere, aggiustare o rallentare. Usa questi riferimenti per avanzare nel momento più opportuno.",
    pt:
      "Os principais eventos de ${period.label} são ${eventNames}. Alguns favorecem o impulso e a tomada de decisões, enquanto outros convidam a revisar, ajustar ou desacelerar. Use esses marcos para avançar no momento mais adequado.",
  };

  const closingWithoutEvents: Record<
    NonFrenchLocale,
    string
  > = {
    en:
      "No major astrological event was selected for ${period.label}. Nevertheless, remain attentive to changes in pace so you can adapt your decisions with greater discernment.",
    es:
      "No se seleccionó ningún acontecimiento astrológico mayor para ${period.label}. No obstante, manténgase atento a los cambios de ritmo para adaptar sus decisiones con mayor discernimiento.",
    de:
      "Für ${period.label} wurde kein bedeutendes astrologisches Ereignis ausgewählt. Achten Sie dennoch auf Rhythmusänderungen, um Ihre Entscheidungen mit größerem Urteilsvermögen anzupassen.",
    it:
      "Nessun evento astrologico maggiore è stato selezionato per ${period.label}. Resta comunque attento ai cambiamenti di ritmo per adattare le tue decisioni con maggiore discernimento.",
    pt:
      "Nenhum evento astrológico importante foi selecionado para ${period.label}. Ainda assim, fique atento às mudanças de ritmo para adaptar suas decisões com mais discernimento.",
  };

  let output = source;

  output = output.replace(
    /`Événement astrologique \$\{index \+ 1\}`/g,
    `\`${eventFallback[locale]}\``,
  );

  output = output.replace(
    /`Les principaux événements de \$\{period\.label\} sont \$\{eventNames\}\. Certains favorisent l’élan et les prises de décision, tandis que d’autres invitent à réviser, ajuster ou ralentir\. Utilisez ces repères pour avancer au moment le plus juste\.`/g,
    `\`${closingWithEvents[locale]}\``,
  );

  output = output.replace(
    /`Aucun événement astrologique majeur n’a été retenu pour \$\{period\.label\}\. Restez néanmoins attentif aux changements de rythme afin d’adapter vos décisions avec davantage de discernement\.`/g,
    `\`${closingWithoutEvents[locale]}\``,
  );

  return output;
}

function localizeIntroduction(
  source: string,
  locale: NonFrenchLocale,
): string {
  const introductions: Record<
    NonFrenchLocale,
    string
  > = {
    en:
      `The astrological movements of{" "}{period.label} shape the overall climate of the month for the sign{" "}{identity.zodiacSignLabel}. They highlight the periods when energy intensifies, slows down, or invites you to change the way you move forward.`,
    es:
      `Los movimientos astrológicos de{" "}{period.label} hacen evolucionar el clima general del mes para el signo{" "}{identity.zodiacSignLabel}. Ponen de relieve los períodos en los que la energía se intensifica, se ralentiza o le invita a modificar su manera de avanzar.`,
    de:
      `Die astrologischen Bewegungen von{" "}{period.label} verändern das allgemeine Monatsklima für das Zeichen{" "}{identity.zodiacSignLabel}. Sie zeigen die Phasen, in denen sich die Energie verstärkt, verlangsamt oder Sie dazu einlädt, Ihre Vorgehensweise anzupassen.`,
    it:
      `I movimenti astrologici di{" "}{period.label} modificano il clima generale del mese per il segno{" "}{identity.zodiacSignLabel}. Mettono in luce i periodi in cui l'energia si intensifica, rallenta o ti invita a cambiare il modo di procedere.`,
    pt:
      `Os movimentos astrológicos de{" "}{period.label} modificam o clima geral do mês para o signo{" "}{identity.zodiacSignLabel}. Eles destacam os períodos em que a energia se intensifica, desacelera ou convida você a mudar a forma de avançar.`,
  };

  const pattern =
    /Les mouvements astrologiques de\{" "\}\s*\{period\.label\} font évoluer le climat\s*général du mois pour le signe\{" "\}\s*\{identity\.zodiacSignLabel\}\. Ils mettent\s*en lumière les périodes où l’énergie\s*s’intensifie, ralentit ou vous invite\s*à modifier votre manière d’avancer\./g;

  return source.replace(
    pattern,
    introductions[locale],
  );
}

export function localizeHoroscopeMonthAstroEvents(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const normalizedLocale =
    locale as NonFrenchLocale;

  const translations =
    TRANSLATIONS[
      normalizedLocale
    ];

  if (!translations) {
    return source;
  }

  let localized =
    localizeDynamicText(
      source,
      normalizedLocale,
    );

  localized =
    localizeIntroduction(
      localized,
      normalizedLocale,
    );

  localized =
    localizeDateFormatter(
      localized,
      normalizedLocale,
    );

  localized =
    localizeStaticText(
      localized,
      translations,
    );

  return localized;
}
