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
    "Non précisé": "Not specified",

    "Carte du ciel":
      "Birth chart",

    "La roue astrologique personnalisée apparaîtra ici lorsque les données de naissance auront été calculées.":
      "The personalized astrological wheel will appear here once the birth data has been calculated.",

    "Date": "Date",
    "Heure": "Time",
    "Lieu": "Place",

    "Vos thèmes natals":
      "Your Birth Charts",

    "Deux cartes du ciel, une rencontre unique":
      "Two Birth Charts, One Unique Connection",

    "Chaque roue représente la position des planètes au moment précis de la naissance. La synastrie observe la manière dont ces deux univers astrologiques entrent en relation.":
      "Each wheel represents the position of the planets at the precise moment of birth. Synastry explores how these two astrological worlds interact.",

    "Thème natal I":
      "Birth Chart I",

    "Thème natal II":
      "Birth Chart II",

    "Première personne":
      "First person",

    "Deuxième personne":
      "Second person",

    "La rencontre de deux univers":
      "The Meeting of Two Worlds",

    "Une compatibilité astrologique ne repose pas uniquement sur les signes solaires. Elle naît de l’ensemble des interactions entre les planètes, les angles et les maisons de vos deux thèmes. Certaines connexions créent une fluidité immédiate, tandis que d’autres invitent à évoluer, à mieux se comprendre et à construire un équilibre plus conscient.":
      "Astrological compatibility is not based solely on Sun signs. It emerges from all the interactions between the planets, angles, and houses of your two charts. Some connections create an immediate sense of flow, while others encourage growth, deeper understanding, and the development of a more conscious balance.",

    "Les quatre dimensions de la synastrie":
      "The Four Dimensions of Synastry",

    "Identité et expression personnelle":
      "Identity and Personal Expression",

    "Émotions et sécurité affective":
      "Emotions and Emotional Security",

    "Amour, harmonie et séduction":
      "Love, Harmony and Attraction",

    "Désir, action et attraction":
      "Desire, Action and Attraction",

    "Luna Astralis • Rapport de synastrie":
      "Luna Astralis • Synastry Report",
  },

  es: {
    "Non précisé": "No especificado",

    "Carte du ciel":
      "Carta natal",

    "La roue astrologique personnalisée apparaîtra ici lorsque les données de naissance auront été calculées.":
      "La rueda astrológica personalizada aparecerá aquí cuando se hayan calculado los datos de nacimiento.",

    "Date": "Fecha",
    "Heure": "Hora",
    "Lieu": "Lugar",

    "Vos thèmes natals":
      "Sus cartas natales",

    "Deux cartes du ciel, une rencontre unique":
      "Dos cartas natales, un encuentro único",

    "Chaque roue représente la position des planètes au moment précis de la naissance. La synastrie observe la manière dont ces deux univers astrologiques entrent en relation.":
      "Cada rueda representa la posición de los planetas en el momento preciso del nacimiento. La sinastría observa cómo estos dos universos astrológicos se relacionan.",

    "Thème natal I":
      "Carta natal I",

    "Thème natal II":
      "Carta natal II",

    "Première personne":
      "Primera persona",

    "Deuxième personne":
      "Segunda persona",

    "La rencontre de deux univers":
      "El encuentro de dos universos",

    "Une compatibilité astrologique ne repose pas uniquement sur les signes solaires. Elle naît de l’ensemble des interactions entre les planètes, les angles et les maisons de vos deux thèmes. Certaines connexions créent une fluidité immédiate, tandis que d’autres invitent à évoluer, à mieux se comprendre et à construire un équilibre plus conscient.":
      "La compatibilidad astrológica no se basa únicamente en los signos solares. Nace del conjunto de interacciones entre los planetas, los ángulos y las casas de sus dos cartas. Algunas conexiones crean una fluidez inmediata, mientras que otras invitan a evolucionar, comprenderse mejor y construir un equilibrio más consciente.",

    "Les quatre dimensions de la synastrie":
      "Las cuatro dimensiones de la sinastría",

    "Identité et expression personnelle":
      "Identidad y expresión personal",

    "Émotions et sécurité affective":
      "Emociones y seguridad afectiva",

    "Amour, harmonie et séduction":
      "Amor, armonía y seducción",

    "Désir, action et attraction":
      "Deseo, acción y atracción",

    "Luna Astralis • Rapport de synastrie":
      "Luna Astralis • Informe de sinastría",
  },

  de: {
    "Non précisé": "Nicht angegeben",

    "Carte du ciel":
      "Geburtshoroskop",

    "La roue astrologique personnalisée apparaîtra ici lorsque les données de naissance auront été calculées.":
      "Das persönliche Horoskoprad erscheint hier, sobald die Geburtsdaten berechnet wurden.",

    "Date": "Datum",
    "Heure": "Uhrzeit",
    "Lieu": "Ort",

    "Vos thèmes natals":
      "Ihre Geburtshoroskope",

    "Deux cartes du ciel, une rencontre unique":
      "Zwei Geburtshoroskope, eine einzigartige Begegnung",

    "Chaque roue représente la position des planètes au moment précis de la naissance. La synastrie observe la manière dont ces deux univers astrologiques entrent en relation.":
      "Jedes Rad zeigt die Position der Planeten zum genauen Zeitpunkt der Geburt. Die Synastrie untersucht, wie diese beiden astrologischen Welten miteinander in Beziehung treten.",

    "Thème natal I":
      "Geburtshoroskop I",

    "Thème natal II":
      "Geburtshoroskop II",

    "Première personne":
      "Erste Person",

    "Deuxième personne":
      "Zweite Person",

    "La rencontre de deux univers":
      "Die Begegnung zweier Welten",

    "Une compatibilité astrologique ne repose pas uniquement sur les signes solaires. Elle naît de l’ensemble des interactions entre les planètes, les angles et les maisons de vos deux thèmes. Certaines connexions créent une fluidité immédiate, tandis que d’autres invitent à évoluer, à mieux se comprendre et à construire un équilibre plus conscient.":
      "Astrologische Kompatibilität beruht nicht allein auf den Sonnenzeichen. Sie entsteht aus dem Zusammenspiel der Planeten, Winkel und Häuser Ihrer beiden Horoskope. Manche Verbindungen schaffen unmittelbar Harmonie, während andere dazu einladen, sich weiterzuentwickeln, einander besser zu verstehen und ein bewussteres Gleichgewicht aufzubauen.",

    "Les quatre dimensions de la synastrie":
      "Die vier Dimensionen der Synastrie",

    "Identité et expression personnelle":
      "Identität und persönlicher Ausdruck",

    "Émotions et sécurité affective":
      "Emotionen und emotionale Sicherheit",

    "Amour, harmonie et séduction":
      "Liebe, Harmonie und Anziehung",

    "Désir, action et attraction":
      "Begehren, Handlung und Anziehung",

    "Luna Astralis • Rapport de synastrie":
      "Luna Astralis • Synastrie-Bericht",
  },

  it: {
    "Non précisé": "Non specificato",

    "Carte du ciel":
      "Tema natale",

    "La roue astrologique personnalisée apparaîtra ici lorsque les données de naissance auront été calculées.":
      "La ruota astrologica personalizzata apparirà qui una volta calcolati i dati di nascita.",

    "Date": "Data",
    "Heure": "Ora",
    "Lieu": "Luogo",

    "Vos thèmes natals":
      "I vostri temi natali",

    "Deux cartes du ciel, une rencontre unique":
      "Due temi natali, un incontro unico",

    "Chaque roue représente la position des planètes au moment précis de la naissance. La synastrie observe la manière dont ces deux univers astrologiques entrent en relation.":
      "Ogni ruota rappresenta la posizione dei pianeti nel momento preciso della nascita. La sinastria osserva il modo in cui questi due universi astrologici entrano in relazione.",

    "Thème natal I":
      "Tema natale I",

    "Thème natal II":
      "Tema natale II",

    "Première personne":
      "Prima persona",

    "Deuxième personne":
      "Seconda persona",

    "La rencontre de deux univers":
      "L'incontro di due universi",

    "Une compatibilité astrologique ne repose pas uniquement sur les signes solaires. Elle naît de l’ensemble des interactions entre les planètes, les angles et les maisons de vos deux thèmes. Certaines connexions créent une fluidité immédiate, tandis que d’autres invitent à évoluer, à mieux se comprendre et à construire un équilibre plus conscient.":
      "La compatibilità astrologica non si basa unicamente sui segni solari. Nasce dall'insieme delle interazioni tra i pianeti, gli angoli e le case dei vostri due temi. Alcune connessioni creano una fluidità immediata, mentre altre invitano a evolvere, comprendersi meglio e costruire un equilibrio più consapevole.",

    "Les quatre dimensions de la synastrie":
      "Le quattro dimensioni della sinastria",

    "Identité et expression personnelle":
      "Identità ed espressione personale",

    "Émotions et sécurité affective":
      "Emozioni e sicurezza affettiva",

    "Amour, harmonie et séduction":
      "Amore, armonia e seduzione",

    "Désir, action et attraction":
      "Desiderio, azione e attrazione",

    "Luna Astralis • Rapport de synastrie":
      "Luna Astralis • Rapporto di sinastria",
  },

  pt: {
    "Non précisé": "Não especificado",

    "Carte du ciel":
      "Mapa astral",

    "La roue astrologique personnalisée apparaîtra ici lorsque les données de naissance auront été calculées.":
      "A roda astrológica personalizada aparecerá aqui quando os dados de nascimento tiverem sido calculados.",

    "Date": "Data",
    "Heure": "Hora",
    "Lieu": "Local",

    "Vos thèmes natals":
      "Seus mapas astrais",

    "Deux cartes du ciel, une rencontre unique":
      "Dois mapas astrais, um encontro único",

    "Chaque roue représente la position des planètes au moment précis de la naissance. La synastrie observe la manière dont ces deux univers astrologiques entrent en relation.":
      "Cada roda representa a posição dos planetas no momento exato do nascimento. A sinastria observa como esses dois universos astrológicos se relacionam.",

    "Thème natal I":
      "Mapa astral I",

    "Thème natal II":
      "Mapa astral II",

    "Première personne":
      "Primeira pessoa",

    "Deuxième personne":
      "Segunda pessoa",

    "La rencontre de deux univers":
      "O encontro de dois universos",

    "Une compatibilité astrologique ne repose pas uniquement sur les signes solaires. Elle naît de l’ensemble des interactions entre les planètes, les angles et les maisons de vos deux thèmes. Certaines connexions créent une fluidité immédiate, tandis que d’autres invitent à évoluer, à mieux se comprendre et à construire un équilibre plus conscient.":
      "A compatibilidade astrológica não se baseia apenas nos signos solares. Ela nasce do conjunto de interações entre os planetas, os ângulos e as casas dos seus dois mapas. Algumas conexões criam uma fluidez imediata, enquanto outras convidam à evolução, a uma melhor compreensão mútua e à construção de um equilíbrio mais consciente.",

    "Les quatre dimensions de la synastrie":
      "As quatro dimensões da sinastria",

    "Identité et expression personnelle":
      "Identidade e expressão pessoal",

    "Émotions et sécurité affective":
      "Emoções e segurança afetiva",

    "Amour, harmonie et séduction":
      "Amor, harmonia e sedução",

    "Désir, action et attraction":
      "Desejo, ação e atração",

    "Luna Astralis • Rapport de synastrie":
      "Luna Astralis • Relatório de sinastria",
  },
};

function replaceAllLiteral(
  source: string,
  from: string,
  to: string,
): string {
  return source.split(from).join(to);
}

export function localizeCompatibilityWheels(
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

  let localized = source;

  /*
   * Les longues chaînes sont traitées
   * avant les courtes.
   */
  const entries =
    Object.entries(translations).sort(
      ([a], [b]) =>
        b.length - a.length,
    );

  for (const [from, to] of entries) {
    localized = replaceAllLiteral(
      localized,
      from,
      to,
    );
  }

  return localized;
}
