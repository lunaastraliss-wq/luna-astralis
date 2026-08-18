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

/* =========================================================
   STATIC TRANSLATIONS
========================================================= */

const TRANSLATIONS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Entrée dans un nouveau signe":
      "Entry into a new sign",
    "Transition":
      "Transition",
    "Début de rétrogradation":
      "Beginning of retrograde motion",
    "Révision":
      "Review",
    "Fin de rétrogradation":
      "End of retrograde motion",
    "Reprise":
      "Resumption",
    "Station rétrograde":
      "Retrograde station",
    "Retour en mouvement direct":
      "Return to direct motion",
    "Conjonction planétaire":
      "Planetary conjunction",
    "Alignement":
      "Alignment",
    "Trigone planétaire":
      "Planetary trine",
    "Harmonie":
      "Harmony",
    "Sextile planétaire":
      "Planetary sextile",
    "Ouverture":
      "Opening",
    "Carré planétaire":
      "Planetary square",
    "Ajustement":
      "Adjustment",
    "Opposition planétaire":
      "Planetary opposition",
    "Prise de conscience":
      "Awareness",
    "Mouvement":
      "Movement",

    "Date à confirmer":
      "Date to be confirmed",

    "Une période propice à la révision":
      "A period favorable for review",
    "Une configuration qui transforme le climat du mois":
      "A configuration that transforms the climate of the month",
    "Une nouvelle dynamique commence à se dessiner":
      "A new dynamic begins to emerge",
    "Un mouvement céleste attire votre attention":
      "A celestial movement draws your attention",

    "Cette influence peut ramener un dossier, une décision ou une situation qui mérite d’être examinée avec davantage de recul.":
      "This influence may bring back a matter, decision, or situation that deserves to be examined with greater perspective.",
    "Cette configuration peut favoriser une ouverture, une prise de conscience ou une nouvelle manière d’envisager la situation.":
      "This configuration may encourage an opening, an awareness, or a new way of viewing the situation.",
    "Cette transition peut déplacer progressivement votre attention vers de nouvelles priorités ou un autre domaine de votre vie.":
      "This transition may gradually shift your attention toward new priorities or another area of your life.",
    "Ce mouvement peut modifier le rythme de vos échanges, de vos décisions ou de vos initiatives.":
      "This movement may change the rhythm of your interactions, decisions, or initiatives.",

    "Prenez le temps de vérifier, de corriger et de consolider avant de poursuivre.":
      "Take time to verify, correct, and consolidate before moving forward.",
    "Accueillez cette ouverture avec clarté et utilisez-la pour coordonner vos efforts.":
      "Welcome this opening with clarity and use it to coordinate your efforts.",
    "Observez ce qui se termine et ce qui commence naturellement à prendre de l’importance.":
      "Observe what is ending and what is naturally beginning to gain importance.",

    "Accueillez les changements émotionnels sans prendre immédiatement de décision définitive.":
      "Welcome emotional changes without making an immediate final decision.",
    "Restez attentif aux changements de rythme et adaptez vos décisions au contexte.":
      "Stay attentive to changes in pace and adapt your decisions to the context.",

    "Cet événement astrologique fait évoluer le climat général du mois. Il peut mettre en lumière une nouvelle priorité, un ajustement nécessaire ou une étape importante de votre progression.":
      "This astrological event changes the overall climate of the month. It may highlight a new priority, a necessary adjustment, or an important stage in your progress.",

    "Les mouvements du ciel":
      "The movements of the sky",
    "Les événements astrologiques du mois":
      "The astrological events of the month",
    "Votre calendrier céleste":
      "Your celestial calendar",

    "Ces événements décrivent d’abord des tendances collectives. Leur effet personnel dépend de leur interaction avec votre signe, votre thème natal et les autres mouvements présents durant le mois.":
      "These events primarily describe collective trends. Their personal effect depends on their interaction with your sign, your natal chart, and the other movements present during the month.",

    "Les moments importants du mois":
      "The important moments of the month",
    "Événement astrologique":
      "Astrological event",
    "Influence possible":
      "Possible influence",
    "Conseil":
      "Guidance",
    "Observer les transitions du mois":
      "Observe the transitions of the month",
  },

  es: {
    "Entrée dans un nouveau signe":
      "Entrada en un nuevo signo",
    "Transition":
      "Transición",
    "Début de rétrogradation":
      "Inicio de la retrogradación",
    "Révision":
      "Revisión",
    "Fin de rétrogradation":
      "Fin de la retrogradación",
    "Reprise":
      "Reanudación",
    "Station rétrograde":
      "Estación retrógrada",
    "Retour en mouvement direct":
      "Retorno al movimiento directo",
    "Conjonction planétaire":
      "Conjunción planetaria",
    "Alignement":
      "Alineación",
    "Trigone planétaire":
      "Trígono planetario",
    "Harmonie":
      "Armonía",
    "Sextile planétaire":
      "Sextil planetario",
    "Ouverture":
      "Apertura",
    "Carré planétaire":
      "Cuadratura planetaria",
    "Ajustement":
      "Ajuste",
    "Opposition planétaire":
      "Oposición planetaria",
    "Prise de conscience":
      "Toma de conciencia",
    "Mouvement":
      "Movimiento",

    "Date à confirmer":
      "Fecha por confirmar",

    "Une période propice à la révision":
      "Un período favorable para la revisión",
    "Une configuration qui transforme le climat du mois":
      "Una configuración que transforma el clima del mes",
    "Une nouvelle dynamique commence à se dessiner":
      "Una nueva dinámica comienza a tomar forma",
    "Un mouvement céleste attire votre attention":
      "Un movimiento celeste atrae su atención",

    "Cette influence peut ramener un dossier, une décision ou une situation qui mérite d’être examinée avec davantage de recul.":
      "Esta influencia puede traer de nuevo un asunto, una decisión o una situación que merece ser examinada con mayor perspectiva.",
    "Cette configuration peut favoriser une ouverture, une prise de conscience ou une nouvelle manière d’envisager la situation.":
      "Esta configuración puede favorecer una apertura, una toma de conciencia o una nueva forma de considerar la situación.",
    "Cette transition peut déplacer progressivement votre attention vers de nouvelles priorités ou un autre domaine de votre vie.":
      "Esta transición puede desplazar progresivamente su atención hacia nuevas prioridades u otra área de su vida.",
    "Ce mouvement peut modifier le rythme de vos échanges, de vos décisions ou de vos initiatives.":
      "Este movimiento puede modificar el ritmo de sus intercambios, decisiones o iniciativas.",

    "Prenez le temps de vérifier, de corriger et de consolider avant de poursuivre.":
      "Tómese el tiempo para verificar, corregir y consolidar antes de continuar.",
    "Accueillez cette ouverture avec clarté et utilisez-la pour coordonner vos efforts.":
      "Reciba esta apertura con claridad y utilícela para coordinar sus esfuerzos.",
    "Observez ce qui se termine et ce qui commence naturellement à prendre de l’importance.":
      "Observe lo que termina y lo que comienza naturalmente a adquirir importancia.",

    "Accueillez les changements émotionnels sans prendre immédiatement de décision définitive.":
      "Acoja los cambios emocionales sin tomar inmediatamente una decisión definitiva.",
    "Restez attentif aux changements de rythme et adaptez vos décisions au contexte.":
      "Manténgase atento a los cambios de ritmo y adapte sus decisiones al contexto.",

    "Cet événement astrologique fait évoluer le climat général du mois. Il peut mettre en lumière une nouvelle priorité, un ajustement nécessaire ou une étape importante de votre progression.":
      "Este acontecimiento astrológico modifica el clima general del mes. Puede destacar una nueva prioridad, un ajuste necesario o una etapa importante de su evolución.",

    "Les mouvements du ciel":
      "Los movimientos del cielo",
    "Les événements astrologiques du mois":
      "Los acontecimientos astrológicos del mes",
    "Votre calendrier céleste":
      "Su calendario celeste",

    "Ces événements décrivent d’abord des tendances collectives. Leur effet personnel dépend de leur interaction avec votre signe, votre thème natal et les autres mouvements présents durant le mois.":
      "Estos acontecimientos describen principalmente tendencias colectivas. Su efecto personal depende de su interacción con su signo, su carta natal y los demás movimientos presentes durante el mes.",

    "Les moments importants du mois":
      "Los momentos importantes del mes",
    "Événement astrologique":
      "Acontecimiento astrológico",
    "Influence possible":
      "Influencia posible",
    "Conseil":
      "Consejo",
    "Observer les transitions du mois":
      "Observar las transiciones del mes",
  },

  de: {
    "Entrée dans un nouveau signe":
      "Eintritt in ein neues Zeichen",
    "Transition":
      "Übergang",
    "Début de rétrogradation":
      "Beginn der Rückläufigkeit",
    "Révision":
      "Überprüfung",
    "Fin de rétrogradation":
      "Ende der Rückläufigkeit",
    "Reprise":
      "Wiederaufnahme",
    "Station rétrograde":
      "Rückläufige Station",
    "Retour en mouvement direct":
      "Rückkehr zur Direktläufigkeit",
    "Conjonction planétaire":
      "Planetare Konjunktion",
    "Alignement":
      "Ausrichtung",
    "Trigone planétaire":
      "Planetarisches Trigon",
    "Harmonie":
      "Harmonie",
    "Sextile planétaire":
      "Planetarisches Sextil",
    "Ouverture":
      "Öffnung",
    "Carré planétaire":
      "Planetarisches Quadrat",
    "Ajustement":
      "Anpassung",
    "Opposition planétaire":
      "Planetare Opposition",
    "Prise de conscience":
      "Erkenntnis",
    "Mouvement":
      "Bewegung",

    "Date à confirmer":
      "Datum noch zu bestätigen",

    "Une période propice à la révision":
      "Eine günstige Phase zur Überprüfung",
    "Une configuration qui transforme le climat du mois":
      "Eine Konstellation, die das Klima des Monats verändert",
    "Une nouvelle dynamique commence à se dessiner":
      "Eine neue Dynamik beginnt sich abzuzeichnen",
    "Un mouvement céleste attire votre attention":
      "Eine Himmelsbewegung zieht Ihre Aufmerksamkeit auf sich",

    "Cette influence peut ramener un dossier, une décision ou une situation qui mérite d’être examinée avec davantage de recul.":
      "Dieser Einfluss kann ein Thema, eine Entscheidung oder eine Situation zurückbringen, die mit mehr Abstand betrachtet werden sollte.",
    "Cette configuration peut favoriser une ouverture, une prise de conscience ou une nouvelle manière d’envisager la situation.":
      "Diese Konstellation kann eine Öffnung, eine Erkenntnis oder eine neue Sichtweise auf die Situation fördern.",
    "Cette transition peut déplacer progressivement votre attention vers de nouvelles priorités ou un autre domaine de votre vie.":
      "Dieser Übergang kann Ihre Aufmerksamkeit schrittweise auf neue Prioritäten oder einen anderen Lebensbereich lenken.",
    "Ce mouvement peut modifier le rythme de vos échanges, de vos décisions ou de vos initiatives.":
      "Diese Bewegung kann den Rhythmus Ihrer Kontakte, Entscheidungen oder Initiativen verändern.",

    "Prenez le temps de vérifier, de corriger et de consolider avant de poursuivre.":
      "Nehmen Sie sich Zeit zum Prüfen, Korrigieren und Festigen, bevor Sie fortfahren.",
    "Accueillez cette ouverture avec clarté et utilisez-la pour coordonner vos efforts.":
      "Nehmen Sie diese Öffnung bewusst an und nutzen Sie sie, um Ihre Bemühungen zu koordinieren.",
    "Observez ce qui se termine et ce qui commence naturellement à prendre de l’importance.":
      "Beobachten Sie, was endet und was auf natürliche Weise an Bedeutung gewinnt.",

    "Accueillez les changements émotionnels sans prendre immédiatement de décision définitive.":
      "Nehmen Sie emotionale Veränderungen an, ohne sofort eine endgültige Entscheidung zu treffen.",
    "Restez attentif aux changements de rythme et adaptez vos décisions au contexte.":
      "Achten Sie auf Veränderungen des Tempos und passen Sie Ihre Entscheidungen an den Kontext an.",

    "Cet événement astrologique fait évoluer le climat général du mois. Il peut mettre en lumière une nouvelle priorité, un ajustement nécessaire ou une étape importante de votre progression.":
      "Dieses astrologische Ereignis verändert das allgemeine Klima des Monats. Es kann eine neue Priorität, eine notwendige Anpassung oder eine wichtige Etappe Ihrer Entwicklung hervorheben.",

    "Les mouvements du ciel":
      "Die Bewegungen des Himmels",
    "Les événements astrologiques du mois":
      "Die astrologischen Ereignisse des Monats",
    "Votre calendrier céleste":
      "Ihr Himmelskalender",

    "Ces événements décrivent d’abord des tendances collectives. Leur effet personnel dépend de leur interaction avec votre signe, votre thème natal et les autres mouvements présents durant le mois.":
      "Diese Ereignisse beschreiben zunächst kollektive Tendenzen. Ihre persönliche Wirkung hängt von ihrer Wechselwirkung mit Ihrem Zeichen, Ihrem Geburtshoroskop und den anderen Bewegungen des Monats ab.",

    "Les moments importants du mois":
      "Die wichtigen Momente des Monats",
    "Événement astrologique":
      "Astrologisches Ereignis",
    "Influence possible":
      "Möglicher Einfluss",
    "Conseil":
      "Rat",
    "Observer les transitions du mois":
      "Die Übergänge des Monats beobachten",
  },

  it: {
    "Entrée dans un nouveau signe":
      "Ingresso in un nuovo segno",
    "Transition":
      "Transizione",
    "Début de rétrogradation":
      "Inizio della retrogradazione",
    "Révision":
      "Revisione",
    "Fin de rétrogradation":
      "Fine della retrogradazione",
    "Reprise":
      "Ripresa",
    "Station rétrograde":
      "Stazione retrograda",
    "Retour en mouvement direct":
      "Ritorno al moto diretto",
    "Conjonction planétaire":
      "Congiunzione planetaria",
    "Alignement":
      "Allineamento",
    "Trigone planétaire":
      "Trigono planetario",
    "Harmonie":
      "Armonia",
    "Sextile planétaire":
      "Sestile planetario",
    "Ouverture":
      "Apertura",
    "Carré planétaire":
      "Quadratura planetaria",
    "Ajustement":
      "Adattamento",
    "Opposition planétaire":
      "Opposizione planetaria",
    "Prise de conscience":
      "Consapevolezza",
    "Mouvement":
      "Movimento",

    "Date à confirmer":
      "Data da confermare",

    "Une période propice à la révision":
      "Un periodo favorevole alla revisione",
    "Une configuration qui transforme le climat du mois":
      "Una configurazione che trasforma il clima del mese",
    "Une nouvelle dynamique commence à se dessiner":
      "Una nuova dinamica comincia a delinearsi",
    "Un mouvement céleste attire votre attention":
      "Un movimento celeste attira la tua attenzione",

    "Cette influence peut ramener un dossier, une décision ou une situation qui mérite d’être examinée avec davantage de recul.":
      "Questa influenza può riportare alla luce una questione, una decisione o una situazione che merita di essere esaminata con maggiore distacco.",
    "Cette configuration peut favoriser une ouverture, une prise de conscience ou une nouvelle manière d’envisager la situation.":
      "Questa configurazione può favorire un'apertura, una presa di coscienza o un nuovo modo di considerare la situazione.",
    "Cette transition peut déplacer progressivement votre attention vers de nouvelles priorités ou un autre domaine de votre vie.":
      "Questa transizione può spostare gradualmente la tua attenzione verso nuove priorità o un altro ambito della tua vita.",
    "Ce mouvement peut modifier le rythme de vos échanges, de vos décisions ou de vos initiatives.":
      "Questo movimento può modificare il ritmo dei tuoi scambi, delle tue decisioni o delle tue iniziative.",

    "Prenez le temps de vérifier, de corriger et de consolider avant de poursuivre.":
      "Prenditi il tempo per verificare, correggere e consolidare prima di proseguire.",
    "Accueillez cette ouverture avec clarté et utilisez-la pour coordonner vos efforts.":
      "Accogli questa apertura con chiarezza e usala per coordinare i tuoi sforzi.",
    "Observez ce qui se termine et ce qui commence naturellement à prendre de l’importance.":
      "Osserva ciò che termina e ciò che comincia naturalmente ad assumere maggiore importanza.",

    "Accueillez les changements émotionnels sans prendre immédiatement de décision définitive.":
      "Accogli i cambiamenti emotivi senza prendere immediatamente una decisione definitiva.",
    "Restez attentif aux changements de rythme et adaptez vos décisions au contexte.":
      "Resta attento ai cambiamenti di ritmo e adatta le tue decisioni al contesto.",

    "Cet événement astrologique fait évoluer le climat général du mois. Il peut mettre en lumière une nouvelle priorité, un ajustement nécessaire ou une étape importante de votre progression.":
      "Questo evento astrologico modifica il clima generale del mese. Può mettere in evidenza una nuova priorità, un adattamento necessario o una tappa importante della tua evoluzione.",

    "Les mouvements du ciel":
      "I movimenti del cielo",
    "Les événements astrologiques du mois":
      "Gli eventi astrologici del mese",
    "Votre calendrier céleste":
      "Il tuo calendario celeste",

    "Ces événements décrivent d’abord des tendances collectives. Leur effet personnel dépend de leur interaction avec votre signe, votre thème natal et les autres mouvements présents durant le mois.":
      "Questi eventi descrivono innanzitutto tendenze collettive. Il loro effetto personale dipende dall'interazione con il tuo segno, il tuo tema natale e gli altri movimenti presenti durante il mese.",

    "Les moments importants du mois":
      "I momenti importanti del mese",
    "Événement astrologique":
      "Evento astrologico",
    "Influence possible":
      "Influenza possibile",
    "Conseil":
      "Consiglio",
    "Observer les transitions du mois":
      "Osservare le transizioni del mese",
  },

  pt: {
    "Entrée dans un nouveau signe":
      "Entrada em um novo signo",
    "Transition":
      "Transição",
    "Début de rétrogradation":
      "Início da retrogradação",
    "Révision":
      "Revisão",
    "Fin de rétrogradation":
      "Fim da retrogradação",
    "Reprise":
      "Retomada",
    "Station rétrograde":
      "Estação retrógrada",
    "Retour en mouvement direct":
      "Retorno ao movimento direto",
    "Conjonction planétaire":
      "Conjunção planetária",
    "Alignement":
      "Alinhamento",
    "Trigone planétaire":
      "Trígono planetário",
    "Harmonie":
      "Harmonia",
    "Sextile planétaire":
      "Sextil planetário",
    "Ouverture":
      "Abertura",
    "Carré planétaire":
      "Quadratura planetária",
    "Ajustement":
      "Ajuste",
    "Opposition planétaire":
      "Oposição planetária",
    "Prise de conscience":
      "Tomada de consciência",
    "Mouvement":
      "Movimento",

    "Date à confirmer":
      "Data a confirmar",

    "Une période propice à la révision":
      "Um período favorável à revisão",
    "Une configuration qui transforme le climat du mois":
      "Uma configuração que transforma o clima do mês",
    "Une nouvelle dynamique commence à se dessiner":
      "Uma nova dinâmica começa a surgir",
    "Un mouvement céleste attire votre attention":
      "Um movimento celeste chama sua atenção",

    "Cette influence peut ramener un dossier, une décision ou une situation qui mérite d’être examinée avec davantage de recul.":
      "Essa influência pode trazer de volta uma questão, decisão ou situação que merece ser analisada com maior distanciamento.",
    "Cette configuration peut favoriser une ouverture, une prise de conscience ou une nouvelle manière d’envisager la situation.":
      "Essa configuração pode favorecer uma abertura, uma tomada de consciência ou uma nova maneira de considerar a situação.",
    "Cette transition peut déplacer progressivement votre attention vers de nouvelles priorités ou un autre domaine de votre vie.":
      "Essa transição pode direcionar gradualmente sua atenção para novas prioridades ou outra área da sua vida.",
    "Ce mouvement peut modifier le rythme de vos échanges, de vos décisions ou de vos initiatives.":
      "Esse movimento pode modificar o ritmo das suas interações, decisões ou iniciativas.",

    "Prenez le temps de vérifier, de corriger et de consolider avant de poursuivre.":
      "Reserve um tempo para verificar, corrigir e consolidar antes de prosseguir.",
    "Accueillez cette ouverture avec clarté et utilisez-la pour coordonner vos efforts.":
      "Receba essa abertura com clareza e use-a para coordenar seus esforços.",
    "Observez ce qui se termine et ce qui commence naturellement à prendre de l’importance.":
      "Observe o que está terminando e o que começa naturalmente a ganhar importância.",

    "Accueillez les changements émotionnels sans prendre immédiatement de décision définitive.":
      "Acolha as mudanças emocionais sem tomar imediatamente uma decisão definitiva.",
    "Restez attentif aux changements de rythme et adaptez vos décisions au contexte.":
      "Permaneça atento às mudanças de ritmo e adapte suas decisões ao contexto.",

    "Cet événement astrologique fait évoluer le climat général du mois. Il peut mettre en lumière une nouvelle priorité, un ajustement nécessaire ou une étape importante de votre progression.":
      "Este evento astrológico modifica o clima geral do mês. Pode destacar uma nova prioridade, um ajuste necessário ou uma etapa importante da sua evolução.",

    "Les mouvements du ciel":
      "Os movimentos do céu",
    "Les événements astrologiques du mois":
      "Os eventos astrológicos do mês",
    "Votre calendrier céleste":
      "Seu calendário celeste",

    "Ces événements décrivent d’abord des tendances collectives. Leur effet personnel dépend de leur interaction avec votre signe, votre thème natal et les autres mouvements présents durant le mois.":
      "Esses eventos descrevem principalmente tendências coletivas. Seu efeito pessoal depende da interação com seu signo, seu mapa natal e os outros movimentos presentes durante o mês.",

    "Les moments importants du mois":
      "Os momentos importantes do mês",
    "Événement astrologique":
      "Evento astrológico",
    "Influence possible":
      "Influência possível",
    "Conseil":
      "Conselho",
    "Observer les transitions du mois":
      "Observar as transições do mês",
  },
};

/* =========================================================
   MONTHS
========================================================= */

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

/* =========================================================
   ZODIAC
========================================================= */

const ZODIAC_LABELS: Record<
  NonFrenchLocale,
  Record<string, string>
> = {
  en: {
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

    Aries: "Aries",
    Taurus: "Taurus",
    Gemini: "Gemini",
    Leo: "Leo",
    Virgo: "Virgo",
    Libra: "Libra",
    Scorpio: "Scorpio",
    Sagittarius: "Sagittarius",
    Capricorn: "Capricorn",
    Aquarius: "Aquarius",
    Pisces: "Pisces",
  },

  es: {
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

    Aries: "Aries",
    Taurus: "Tauro",
    Gemini: "Géminis",
    Leo: "Leo",
    Virgo: "Virgo",
    Libra: "Libra",
    Scorpio: "Escorpio",
    Sagittarius: "Sagitario",
    Capricorn: "Capricornio",
    Aquarius: "Acuario",
    Pisces: "Piscis",
  },

  de: {
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

    Aries: "Widder",
    Taurus: "Stier",
    Gemini: "Zwillinge",
    Leo: "Löwe",
    Virgo: "Jungfrau",
    Libra: "Waage",
    Scorpio: "Skorpion",
    Sagittarius: "Schütze",
    Capricorn: "Steinbock",
    Aquarius: "Wassermann",
    Pisces: "Fische",
  },

  it: {
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

    Aries: "Ariete",
    Taurus: "Toro",
    Gemini: "Gemelli",
    Leo: "Leone",
    Virgo: "Vergine",
    Libra: "Bilancia",
    Scorpio: "Scorpione",
    Sagittarius: "Sagittario",
    Capricorn: "Capricorno",
    Aquarius: "Acquario",
    Pisces: "Pesci",
  },

  pt: {
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

    Aries: "Áries",
    Taurus: "Touro",
    Gemini: "Gêmeos",
    Leo: "Leão",
    Virgo: "Virgem",
    Libra: "Libra",
    Scorpio: "Escorpião",
    Sagittarius: "Sagitário",
    Capricorn: "Capricórnio",
    Aquarius: "Aquário",
    Pisces: "Peixes",
  },
};

/* =========================================================
   PLANETS
========================================================= */

const PLANET_LABELS: Record<
  NonFrenchLocale,
  Record<string, string>
> = {
  en: {
    Soleil: "Sun",
    Lune: "Moon",
    Mercure: "Mercury",
    Vénus: "Venus",
    Mars: "Mars",
    Jupiter: "Jupiter",
    Saturne: "Saturn",
    Uranus: "Uranus",
    Neptune: "Neptune",
    Pluton: "Pluto",
  },

  es: {
    Soleil: "Sol",
    Lune: "Luna",
    Mercure: "Mercurio",
    Vénus: "Venus",
    Mars: "Marte",
    Jupiter: "Júpiter",
    Saturne: "Saturno",
    Uranus: "Urano",
    Neptune: "Neptuno",
    Pluton: "Plutón",
  },

  de: {
    Soleil: "Sonne",
    Lune: "Mond",
    Mercure: "Merkur",
    Vénus: "Venus",
    Mars: "Mars",
    Jupiter: "Jupiter",
    Saturne: "Saturn",
    Uranus: "Uranus",
    Neptune: "Neptun",
    Pluton: "Pluto",
  },

  it: {
    Soleil: "Sole",
    Lune: "Luna",
    Mercure: "Mercurio",
    Vénus: "Venere",
    Mars: "Marte",
    Jupiter: "Giove",
    Saturne: "Saturno",
    Uranus: "Urano",
    Neptune: "Nettuno",
    Pluton: "Plutone",
  },

  pt: {
    Soleil: "Sol",
    Lune: "Lua",
    Mercure: "Mercúrio",
    Vénus: "Vênus",
    Mars: "Marte",
    Jupiter: "Júpiter",
    Saturne: "Saturno",
    Uranus: "Urano",
    Neptune: "Netuno",
    Pluton: "Plutão",
  },
};

/* =========================================================
   SAFE LITERAL REPLACEMENT
========================================================= */

function localizeSafeLiterals(
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

  function visit(
    node: ts.Node,
  ): void {
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(node)
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
            JSON.stringify(
              translated,
            ),
        });
      }
    }

    if (
      ts.isJsxText(node)
    ) {
      const raw =
        node.getText(
          sourceFile,
        );

      const normalized =
        raw
          .replace(
            /\s+/g,
            " ",
          )
          .trim();

      const translated =
        translations[
          normalized
        ];

      if (
        normalized &&
        typeof translated ===
          "string"
      ) {
        const leading =
          raw.match(
            /^\s*/,
          )?.[0] ?? "";

        const trailing =
          raw.match(
            /\s*$/,
          )?.[0] ?? "";

        replacements.push({
          start:
            node.getStart(
              sourceFile,
            ),

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

  visit(
    sourceFile,
  );

  return replacements
    .sort(
      (a, b) =>
        b.start -
        a.start,
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

/* =========================================================
   DYNAMIC VALUES
========================================================= */

function replaceDynamicAstroEventValues(
  source: string,
): string {
  let output =
    source;

  /*
   * IMPORTANT:
   * La conclusion doit être remplacée AVANT
   * les expressions {period.label}, sinon le remplacement
   * générique de period.label modifie aussi le template literal
   * et empêche la regex de reconnaître la conclusion.
   */

  output =
    output.replace(
      /`Les principaux événements de \$\{period\.label\} sont \$\{eventNames\}\. Certains favorisent l’élan et les prises de décision, tandis que d’autres invitent à réviser, ajuster ou ralentir\. Utilisez ces repères pour avancer au moment le plus juste\.`/g,
      `__astroEventsClosingText(
        eventNames,
        __astroEventsLocalizeDynamicText(
          period.label,
        ),
      )`,
    );

  output =
    output.replace(
      /`Aucun événement astrologique majeur n’a été retenu pour \$\{period\.label\}\. Restez néanmoins attentif aux changements de rythme afin d’adapter vos décisions avec davantage de discernement\.`/g,
      `__astroEventsClosingText(
        "",
        __astroEventsLocalizeDynamicText(
          period.label,
        ),
      )`,
    );

  /*
   * Badge du signe
   */

  output =
    output.replace(
      /\{identity\.zodiacSignLabel\}/g,
      "{__astroEventsLocalizeDynamicText(identity.zodiacSignLabel)}",
    );

  /*
   * Période affichée dans le JSX
   */

  output =
    output.replace(
      /\{period\.label\}/g,
      "{__astroEventsLocalizeDynamicText(period.label)}",
    );

  /*
   * Valeurs dynamiques affichées
   */

  output =
    output.replace(
      /\{item\.event\}/g,
      "{__astroEventsLocalizeDynamicText(item.event)}",
    );

  output =
    output.replace(
      /\{item\.category\}/g,
      "{__astroEventsLocalizeDynamicText(item.category)}",
    );

  output =
    output.replace(
      /\{item\.title\}/g,
      "{__astroEventsLocalizeDynamicText(item.title)}",
    );

  output =
    output.replace(
      /\{item\.description\}/g,
      "{__astroEventsLocalizeDynamicText(item.description)}",
    );

  output =
    output.replace(
      /\{item\.impact\}/g,
      "{__astroEventsLocalizeDynamicText(item.impact)}",
    );

  output =
    output.replace(
      /\{item\.advice\}/g,
      "{__astroEventsLocalizeDynamicText(item.advice)}",
    );

  /*
   * Date de l'événement
   */

  output =
    output.replace(
      /date:\s*formatEventDate\(\s*rawDate,?\s*\)/g,
      `date:
      __astroEventsFormatEventDate(
        rawDate,
      )`,
    );

  return output;
}

/* =========================================================
   HELPERS
========================================================= */

function injectAstroEventHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __astroEventsLocalizeDynamicText",
    )
  ) {
    return source;
  }

  const dateLocale =
    locale === "en"
      ? "en-CA"
      : locale === "es"
        ? "es-ES"
        : locale === "de"
          ? "de-DE"
          : locale === "it"
            ? "it-IT"
            : "pt-BR";

  const helper = `
/* =========================================================
   MONTH HOROSCOPE ASTRO EVENTS — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __ASTRO_EVENTS_TRANSLATIONS:
  Record<string, string> =
  ${JSON.stringify(
    TRANSLATIONS[locale],
    null,
    2,
  )};

const __ASTRO_EVENTS_MONTHS =
  ${JSON.stringify(
    MONTHS[locale],
    null,
    2,
  )} as const;

const __ASTRO_EVENTS_ZODIAC:
  Record<string, string> =
  ${JSON.stringify(
    ZODIAC_LABELS[locale],
    null,
    2,
  )};

const __ASTRO_EVENTS_PLANETS:
  Record<string, string> =
  ${JSON.stringify(
    PLANET_LABELS[locale],
    null,
    2,
  )};

function __astroEventsReplaceWords(
  value: string,
  dictionary:
    Record<string, string>,
): string {
  let output =
    value;

  Object.entries(
    dictionary,
  )
    .sort(
      ([first], [second]) =>
        second.length -
        first.length,
    )
    .forEach(
      ([sourceValue, localizedValue]) => {
        output =
          output.replace(
            new RegExp(
              \`\\\\b\${sourceValue}\\\\b\`,
              "gi",
            ),
            localizedValue,
          );
      },
    );

  return output;
}

function __astroEventsLocalizeIngress(
  value: string,
): string | null {
  const match =
    value.match(
      /^(.+?) (?:entre en|enters|entra en|entra in|entra em|tritt in) (.+?)(?: ein)?$/,
    );

  if (!match) {
    return null;
  }

  const planet =
    __astroEventsReplaceWords(
      match[1],
      __ASTRO_EVENTS_PLANETS,
    );

  const sign =
    __astroEventsReplaceWords(
      match[2],
      __ASTRO_EVENTS_ZODIAC,
    );

  ${
    locale === "en"
      ? 'return `${planet} enters ${sign}`;'
      : locale === "es"
        ? 'return `${planet} entra en ${sign}`;'
        : locale === "de"
          ? 'return `${planet} tritt in ${sign} ein`;'
          : locale === "it"
            ? 'return `${planet} entra in ${sign}`;'
            : 'return `${planet} entra em ${sign}`;'
  }
}

function __astroEventsLocalizeIngressDescription(
  value: string,
): string | null {
  const match =
    value.match(
      /^(.+?) quitte le signe précédent et (?:entre en|enters|entra en|entra in|entra em|tritt in) (.+?)(?: ein)?\\. Ce changement modifie progressivement la manière dont son énergie s’exprime et ouvre une nouvelle étape astrologique\\.$/,
    );

  if (!match) {
    return null;
  }

  const planet =
    __astroEventsReplaceWords(
      match[1],
      __ASTRO_EVENTS_PLANETS,
    );

  const sign =
    __astroEventsReplaceWords(
      match[2],
      __ASTRO_EVENTS_ZODIAC,
    );

  ${
    locale === "en"
      ? 'return `${planet} leaves the previous sign and enters ${sign}. This change gradually modifies the way its energy is expressed and opens a new astrological stage.`;'
      : locale === "es"
        ? 'return `${planet} deja el signo anterior y entra en ${sign}. Este cambio modifica progresivamente la forma en que se expresa su energía y abre una nueva etapa astrológica.`;'
        : locale === "de"
          ? 'return `${planet} verlässt das vorherige Zeichen und tritt in ${sign} ein. Dieser Wechsel verändert allmählich die Art, wie sich seine Energie ausdrückt, und eröffnet eine neue astrologische Phase.`;'
          : locale === "it"
            ? 'return `${planet} lascia il segno precedente ed entra in ${sign}. Questo cambiamento modifica progressivamente il modo in cui si esprime la sua energia e apre una nuova fase astrologica.`;'
            : 'return `${planet} deixa o signo anterior e entra em ${sign}. Essa mudança modifica gradualmente a forma como sua energia se expressa e abre uma nova etapa astrológica.`;'
  }
}

function __astroEventsLocalizeDynamicText(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  const exact =
    __ASTRO_EVENTS_TRANSLATIONS[
      value
    ];

  if (
    typeof exact ===
      "string"
  ) {
    return exact;
  }

  const ingressDescription =
    __astroEventsLocalizeIngressDescription(
      value,
    );

  if (
    ingressDescription
  ) {
    return ingressDescription;
  }

  const ingress =
    __astroEventsLocalizeIngress(
      value,
    );

  if (ingress) {
    return ingress;
  }

  let output =
    value;

  /*
   * Événement astrologique 1, 2, 3...
   */

  output =
    output.replace(
      /^Événement astrologique\\s+(\\d+)$/i,
      ${
        locale === "en"
          ? '"Astrological event $1"'
          : locale === "es"
            ? '"Acontecimiento astrológico $1"'
            : locale === "de"
              ? '"Astrologisches Ereignis $1"'
              : locale === "it"
                ? '"Evento astrologico $1"'
                : '"Evento astrológico $1"'
      },
    );

  /*
   * Mois français éventuellement présents
   * dans les valeurs calculées.
   */

  const frenchMonths = [
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
  ];

  frenchMonths.forEach(
    (frenchMonth, index) => {
      output =
        output.replace(
          new RegExp(
            \`\\\\b\${frenchMonth}\\\\b\`,
            "gi",
          ),
          __ASTRO_EVENTS_MONTHS[
            index
          ],
        );
    },
  );

  output =
    __astroEventsReplaceWords(
      output,
      __ASTRO_EVENTS_PLANETS,
    );

  output =
    __astroEventsReplaceWords(
      output,
      __ASTRO_EVENTS_ZODIAC,
    );

  return (
    __ASTRO_EVENTS_TRANSLATIONS[
      output
    ] ??
    output
  );
}

function __astroEventsFormatEventDate(
  value: string,
): string {
  if (!value) {
    return ${JSON.stringify(
      TRANSLATIONS[locale][
        "Date à confirmer"
      ],
    )};
  }

  const date =
    new Date(
      value.includes("T")
        ? value
        : \`\${value}T12:00:00\`,
    );

  if (
    Number.isNaN(
      date.getTime(),
    )
  ) {
    return __astroEventsLocalizeDynamicText(
      value,
    );
  }

  return new Intl.DateTimeFormat(
    "${dateLocale}",
    {
      day:
        "numeric",

      month:
        "long",
    },
  ).format(
    date,
  );
}

function __astroEventsClosingText(
  eventNames: string,
  periodLabel: string,
): string {
  if (eventNames) {
    ${
      locale === "en"
        ? 'return `The main events of ${periodLabel} are ${eventNames}. Some support momentum and decision-making, while others invite you to review, adjust, or slow down. Use these milestones to move forward at the right time.`;'
        : locale === "es"
          ? 'return `Los principales acontecimientos de ${periodLabel} son ${eventNames}. Algunos favorecen el impulso y la toma de decisiones, mientras que otros invitan a revisar, ajustar o reducir el ritmo. Utilice estos puntos de referencia para avanzar en el momento adecuado.`;'
          : locale === "de"
            ? 'return `Die wichtigsten Ereignisse im ${periodLabel} sind ${eventNames}. Einige unterstützen Dynamik und Entscheidungen, während andere dazu einladen, zu überprüfen, anzupassen oder das Tempo zu verlangsamen. Nutzen Sie diese Orientierungspunkte, um zum richtigen Zeitpunkt voranzugehen.`;'
            : locale === "it"
              ? 'return `I principali eventi di ${periodLabel} sono ${eventNames}. Alcuni favoriscono lo slancio e le decisioni, mentre altri invitano a rivedere, adattare o rallentare. Usa questi punti di riferimento per avanzare al momento più opportuno.`;'
              : 'return `Os principais eventos de ${periodLabel} são ${eventNames}. Alguns favorecem o impulso e a tomada de decisões, enquanto outros convidam a revisar, ajustar ou desacelerar. Use esses pontos de referência para avançar no momento mais adequado.`;'
    }
  }

  ${
    locale === "en"
      ? 'return `No major astrological event was selected for ${periodLabel}. Nevertheless, remain attentive to changes in pace so you can adapt your decisions with greater discernment.`;'
      : locale === "es"
        ? 'return `No se ha seleccionado ningún acontecimiento astrológico importante para ${periodLabel}. No obstante, manténgase atento a los cambios de ritmo para adaptar sus decisiones con mayor discernimiento.`;'
        : locale === "de"
          ? 'return `Für ${periodLabel} wurde kein bedeutendes astrologisches Ereignis ausgewählt. Achten Sie dennoch auf Veränderungen des Tempos, um Ihre Entscheidungen mit größerem Urteilsvermögen anzupassen.`;'
          : locale === "it"
            ? 'return `Non è stato selezionato alcun evento astrologico importante per ${periodLabel}. Rimani comunque attento ai cambiamenti di ritmo per adattare le tue decisioni con maggiore discernimento.`;'
            : 'return `Nenhum evento astrológico importante foi selecionado para ${periodLabel}. Ainda assim, permaneça atento às mudanças de ritmo para adaptar suas decisões com maior discernimento.`;'
  }
}

/* =========================================================
   END MONTH HOROSCOPE ASTRO EVENTS — GENERATED HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopeMonthAstroEvents";

  const index =
    source.indexOf(
      marker,
    );

  if (
    index < 0
  ) {
    return source;
  }

  return (
    source.slice(
      0,
      index,
    ) +
    helper +
    source.slice(
      index,
    )
  );
}

/* =========================================================
   MAIN LOCALIZER
========================================================= */

export function localizeHoroscopeMonthAstroEvents(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (
    locale === "fr"
  ) {
    return source;
  }

  const normalizedLocale =
    locale as
      NonFrenchLocale;

  const translations =
    TRANSLATIONS[
      normalizedLocale
    ];

  if (
    !translations
  ) {
    return source;
  }

  let localized =
    replaceDynamicAstroEventValues(
      source,
    );

  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  localized =
    injectAstroEventHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
