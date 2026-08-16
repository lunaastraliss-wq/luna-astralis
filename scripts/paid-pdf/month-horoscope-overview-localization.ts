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

const EN: TranslationMap = {
  "Un secteur très porteur à utiliser pleinement.":
    "A highly supportive area to use to its full potential.",
  "Une dynamique favorable soutient vos initiatives.":
    "A favorable dynamic supports your initiatives.",
  "Un équilibre constructif demande de la constance.":
    "A constructive balance requires consistency.",
  "Ce domaine demande davantage d’attention.":
    "This area requires more attention.",
  "Avancez doucement et protégez vos ressources.":
    "Move forward gently and protect your resources.",

  "Un mois d’expansion":
    "A month of expansion",
  "Votre énergie dominante favorise l’élan, la confiance et les décisions constructives. C’est le moment de faire avancer ce qui compte vraiment.":
    "Your dominant energy supports momentum, confidence, and constructive decisions. This is the time to move forward with what truly matters.",
  "Un mois porteur":
    "A supportive month",
  "Le climat général soutient une progression régulière. Vos meilleurs résultats viendront d’actions simples, cohérentes et bien préparées.":
    "The overall climate supports steady progress. Your best results will come from simple, consistent, and well-prepared actions.",
  "Un mois d’ajustement":
    "A month of adjustment",
  "Les possibilités sont présentes, mais elles demandent de la mesure. Observez ce qui évolue avant de choisir votre prochaine direction.":
    "Opportunities are present, but they require moderation. Observe what is evolving before choosing your next direction.",
  "Un mois de recentrage":
    "A month of refocusing",
  "Le rythme peut sembler plus lent, mais il vous permet de retrouver de la clarté. Protégez votre énergie et concentrez-vous sur l’essentiel.":
    "The pace may feel slower, but it helps you regain clarity. Protect your energy and focus on what matters most.",

  "Force du mois":
    "Strength of the month",
  "Point de vigilance":
    "Point of attention",
  "Énergie dominante":
    "Dominant energy",
  "Opportunité principale":
    "Main opportunity",
  "Une décision claire, prise au bon moment, peut créer un effet positif durable. Choisissez une priorité et donnez-lui une place réelle.":
    "A clear decision made at the right time can create a lasting positive effect. Choose one priority and give it a real place in your life.",

  "Énergie":
    "Energy",
  "Amour":
    "Love",
  "Travail":
    "Career",
  "Finances":
    "Finances",
  "Bien-être":
    "Well-being",
  "Vie sociale":
    "Social life",

  "Ce mois ouvre une nouvelle séquence et met en lumière les domaines dans lesquels votre énergie peut évoluer avec le plus de force.":
    "This month opens a new phase and highlights the areas where your energy can develop most strongly.",
  "Les premières semaines favorisent l’observation et les ajustements, tandis que la suite du mois encourage des actions plus affirmées. Votre progression dépendra moins de la vitesse que de la qualité de vos choix et de votre capacité à préserver vos priorités.":
    "The first weeks favor observation and adjustments, while the rest of the month encourages more assertive action. Your progress will depend less on speed than on the quality of your choices and your ability to protect your priorities.",
  "Choisissez une priorité essentielle pour ce mois et protégez-lui du temps, de l’énergie et une place concrète dans votre quotidien.":
    "Choose one essential priority for this month and protect time, energy, and a concrete place for it in your daily life.",

  "Horoscope mensuel":
    "Monthly horoscope",
  "Les grandes tendances du mois":
    "The major trends of the month",
  "Le mois en un regard":
    "The month at a glance",
  "sur 100":
    "out of 100",
  "Intensité énergétique du mois":
    "Monthly energy intensity",
  "Les clés de votre mois":
    "The keys to your month",
  "Les domaines à surveiller":
    "Areas to watch",
  "Votre priorité pour ce mois":
    "Your priority for this month",
};

const ES: TranslationMap = {
  "Un secteur très porteur à utiliser pleinement.":
    "Un área muy favorable que conviene aprovechar al máximo.",
  "Une dynamique favorable soutient vos initiatives.":
    "Una dinámica favorable apoya sus iniciativas.",
  "Un équilibre constructif demande de la constance.":
    "Un equilibrio constructivo requiere constancia.",
  "Ce domaine demande davantage d’attention.":
    "Este ámbito requiere más atención.",
  "Avancez doucement et protégez vos ressources.":
    "Avance con calma y proteja sus recursos.",

  "Un mois d’expansion":
    "Un mes de expansión",
  "Votre énergie dominante favorise l’élan, la confiance et les décisions constructives. C’est le moment de faire avancer ce qui compte vraiment.":
    "Su energía dominante favorece el impulso, la confianza y las decisiones constructivas. Es el momento de hacer avanzar lo que realmente importa.",
  "Un mois porteur":
    "Un mes favorable",
  "Le climat général soutient une progression régulière. Vos meilleurs résultats viendront d’actions simples, cohérentes et bien préparées.":
    "El clima general favorece un progreso constante. Sus mejores resultados vendrán de acciones sencillas, coherentes y bien preparadas.",
  "Un mois d’ajustement":
    "Un mes de ajustes",
  "Les possibilités sont présentes, mais elles demandent de la mesure. Observez ce qui évolue avant de choisir votre prochaine direction.":
    "Las posibilidades están presentes, pero requieren moderación. Observe lo que evoluciona antes de elegir su próxima dirección.",
  "Un mois de recentrage":
    "Un mes de recentramiento",
  "Le rythme peut sembler plus lent, mais il vous permet de retrouver de la clarté. Protégez votre énergie et concentrez-vous sur l’essentiel.":
    "El ritmo puede parecer más lento, pero le permite recuperar claridad. Proteja su energía y concéntrese en lo esencial.",

  "Force du mois":
    "Fortaleza del mes",
  "Point de vigilance":
    "Punto de atención",
  "Énergie dominante":
    "Energía dominante",
  "Opportunité principale":
    "Oportunidad principal",
  "Une décision claire, prise au bon moment, peut créer un effet positif durable. Choisissez une priorité et donnez-lui une place réelle.":
    "Una decisión clara, tomada en el momento adecuado, puede crear un efecto positivo duradero. Elija una prioridad y dele un lugar real.",

  "Énergie":
    "Energía",
  "Amour":
    "Amor",
  "Travail":
    "Trabajo",
  "Finances":
    "Finanzas",
  "Bien-être":
    "Bienestar",
  "Vie sociale":
    "Vida social",

  "Ce mois ouvre une nouvelle séquence et met en lumière les domaines dans lesquels votre énergie peut évoluer avec le plus de force.":
    "Este mes abre una nueva etapa y pone de relieve los ámbitos en los que su energía puede desarrollarse con más fuerza.",
  "Les premières semaines favorisent l’observation et les ajustements, tandis que la suite du mois encourage des actions plus affirmées. Votre progression dépendra moins de la vitesse que de la qualité de vos choix et de votre capacité à préserver vos priorités.":
    "Las primeras semanas favorecen la observación y los ajustes, mientras que el resto del mes anima a actuar con mayor firmeza. Su progreso dependerá menos de la velocidad que de la calidad de sus decisiones y de su capacidad para proteger sus prioridades.",
  "Choisissez une priorité essentielle pour ce mois et protégez-lui du temps, de l’énergie et une place concrète dans votre quotidien.":
    "Elija una prioridad esencial para este mes y resérvele tiempo, energía y un lugar concreto en su vida cotidiana.",

  "Horoscope mensuel":
    "Horóscopo mensual",
  "Les grandes tendances du mois":
    "Las grandes tendencias del mes",
  "Le mois en un regard":
    "El mes de un vistazo",
  "sur 100":
    "sobre 100",
  "Intensité énergétique du mois":
    "Intensidad energética del mes",
  "Les clés de votre mois":
    "Las claves de su mes",
  "Les domaines à surveiller":
    "Ámbitos a vigilar",
  "Votre priorité pour ce mois":
    "Su prioridad para este mes",
};

const DE: TranslationMap = {
  "Un secteur très porteur à utiliser pleinement.":
    "Ein besonders günstiger Bereich, den Sie voll nutzen können.",
  "Une dynamique favorable soutient vos initiatives.":
    "Eine günstige Dynamik unterstützt Ihre Initiativen.",
  "Un équilibre constructif demande de la constance.":
    "Ein konstruktives Gleichgewicht erfordert Beständigkeit.",
  "Ce domaine demande davantage d’attention.":
    "Dieser Bereich braucht mehr Aufmerksamkeit.",
  "Avancez doucement et protégez vos ressources.":
    "Gehen Sie behutsam vor und schützen Sie Ihre Ressourcen.",

  "Un mois d’expansion":
    "Ein Monat der Entfaltung",
  "Votre énergie dominante favorise l’élan, la confiance et les décisions constructives. C’est le moment de faire avancer ce qui compte vraiment.":
    "Ihre dominante Energie fördert Schwung, Vertrauen und konstruktive Entscheidungen. Jetzt ist der richtige Zeitpunkt, das voranzubringen, was wirklich zählt.",
  "Un mois porteur":
    "Ein günstiger Monat",
  "Le climat général soutient une progression régulière. Vos meilleurs résultats viendront d’actions simples, cohérentes et bien préparées.":
    "Das allgemeine Klima unterstützt stetigen Fortschritt. Ihre besten Ergebnisse entstehen durch einfache, konsequente und gut vorbereitete Schritte.",
  "Un mois d’ajustement":
    "Ein Monat der Anpassung",
  "Les possibilités sont présentes, mais elles demandent de la mesure. Observez ce qui évolue avant de choisir votre prochaine direction.":
    "Möglichkeiten sind vorhanden, doch sie verlangen Augenmaß. Beobachten Sie, was sich entwickelt, bevor Sie Ihre nächste Richtung wählen.",
  "Un mois de recentrage":
    "Ein Monat der Neuausrichtung",
  "Le rythme peut sembler plus lent, mais il vous permet de retrouver de la clarté. Protégez votre énergie et concentrez-vous sur l’essentiel.":
    "Das Tempo mag langsamer wirken, hilft Ihnen aber, wieder Klarheit zu gewinnen. Schützen Sie Ihre Energie und konzentrieren Sie sich auf das Wesentliche.",

  "Force du mois":
    "Stärke des Monats",
  "Point de vigilance":
    "Aufmerksamkeitspunkt",
  "Énergie dominante":
    "Dominante Energie",
  "Opportunité principale":
    "Wichtigste Chance",
  "Une décision claire, prise au bon moment, peut créer un effet positif durable. Choisissez une priorité et donnez-lui une place réelle.":
    "Eine klare Entscheidung zum richtigen Zeitpunkt kann eine dauerhaft positive Wirkung entfalten. Wählen Sie eine Priorität und geben Sie ihr einen festen Platz.",

  "Énergie":
    "Energie",
  "Amour":
    "Liebe",
  "Travail":
    "Beruf",
  "Finances":
    "Finanzen",
  "Bien-être":
    "Wohlbefinden",
  "Vie sociale":
    "Soziales Leben",

  "Ce mois ouvre une nouvelle séquence et met en lumière les domaines dans lesquels votre énergie peut évoluer avec le plus de force.":
    "Dieser Monat eröffnet eine neue Phase und zeigt die Bereiche, in denen sich Ihre Energie besonders kraftvoll entfalten kann.",
  "Les premières semaines favorisent l’observation et les ajustements, tandis que la suite du mois encourage des actions plus affirmées. Votre progression dépendra moins de la vitesse que de la qualité de vos choix et de votre capacité à préserver vos priorités.":
    "Die ersten Wochen begünstigen Beobachtung und Anpassungen, während der weitere Monatsverlauf zu entschlossenerem Handeln ermutigt. Ihr Fortschritt hängt weniger vom Tempo als von der Qualität Ihrer Entscheidungen und Ihrer Fähigkeit ab, Ihre Prioritäten zu schützen.",
  "Choisissez une priorité essentielle pour ce mois et protégez-lui du temps, de l’énergie et une place concrète dans votre quotidien.":
    "Wählen Sie eine wesentliche Priorität für diesen Monat und reservieren Sie dafür Zeit, Energie und einen festen Platz in Ihrem Alltag.",

  "Horoscope mensuel":
    "Monatshoroskop",
  "Les grandes tendances du mois":
    "Die wichtigsten Tendenzen des Monats",
  "Le mois en un regard":
    "Der Monat auf einen Blick",
  "sur 100":
    "von 100",
  "Intensité énergétique du mois":
    "Energieintensität des Monats",
  "Les clés de votre mois":
    "Die Schlüssel Ihres Monats",
  "Les domaines à surveiller":
    "Bereiche im Blick",
  "Votre priorité pour ce mois":
    "Ihre Priorität für diesen Monat",
};

const IT: TranslationMap = {
  "Un secteur très porteur à utiliser pleinement.":
    "Un settore molto favorevole da sfruttare pienamente.",
  "Une dynamique favorable soutient vos initiatives.":
    "Una dinamica favorevole sostiene le tue iniziative.",
  "Un équilibre constructif demande de la constance.":
    "Un equilibrio costruttivo richiede costanza.",
  "Ce domaine demande davantage d’attention.":
    "Questo ambito richiede maggiore attenzione.",
  "Avancez doucement et protégez vos ressources.":
    "Procedi con calma e proteggi le tue risorse.",

  "Un mois d’expansion":
    "Un mese di espansione",
  "Votre énergie dominante favorise l’élan, la confiance et les décisions constructives. C’est le moment de faire avancer ce qui compte vraiment.":
    "La tua energia dominante favorisce slancio, fiducia e decisioni costruttive. È il momento di far avanzare ciò che conta davvero.",
  "Un mois porteur":
    "Un mese favorevole",
  "Le climat général soutient une progression régulière. Vos meilleurs résultats viendront d’actions simples, cohérentes et bien préparées.":
    "Il clima generale sostiene un progresso costante. I risultati migliori arriveranno da azioni semplici, coerenti e ben preparate.",
  "Un mois d’ajustement":
    "Un mese di assestamento",
  "Les possibilités sont présentes, mais elles demandent de la mesure. Observez ce qui évolue avant de choisir votre prochaine direction.":
    "Le possibilità sono presenti, ma richiedono misura. Osserva ciò che evolve prima di scegliere la tua prossima direzione.",
  "Un mois de recentrage":
    "Un mese di ricentratura",
  "Le rythme peut sembler plus lent, mais il vous permet de retrouver de la clarté. Protégez votre énergie et concentrez-vous sur l’essentiel.":
    "Il ritmo può sembrare più lento, ma ti permette di ritrovare chiarezza. Proteggi la tua energia e concentrati sull’essenziale.",

  "Force du mois":
    "Forza del mese",
  "Point de vigilance":
    "Punto di attenzione",
  "Énergie dominante":
    "Energia dominante",
  "Opportunité principale":
    "Opportunità principale",
  "Une décision claire, prise au bon moment, peut créer un effet positif durable. Choisissez une priorité et donnez-lui une place réelle.":
    "Una decisione chiara, presa al momento giusto, può creare un effetto positivo duraturo. Scegli una priorità e dalle uno spazio concreto.",

  "Énergie":
    "Energia",
  "Amour":
    "Amore",
  "Travail":
    "Lavoro",
  "Finances":
    "Finanze",
  "Bien-être":
    "Benessere",
  "Vie sociale":
    "Vita sociale",

  "Ce mois ouvre une nouvelle séquence et met en lumière les domaines dans lesquels votre énergie peut évoluer avec le plus de force.":
    "Questo mese apre una nuova fase e mette in luce gli ambiti in cui la tua energia può evolvere con maggiore forza.",
  "Les premières semaines favorisent l’observation et les ajustements, tandis que la suite du mois encourage des actions plus affirmées. Votre progression dépendra moins de la vitesse que de la qualité de vos choix et de votre capacité à préserver vos priorités.":
    "Le prime settimane favoriscono l’osservazione e gli aggiustamenti, mentre il resto del mese incoraggia azioni più decise. I tuoi progressi dipenderanno meno dalla velocità che dalla qualità delle tue scelte e dalla capacità di proteggere le tue priorità.",
  "Choisissez une priorité essentielle pour ce mois et protégez-lui du temps, de l’énergie et une place concrète dans votre quotidien.":
    "Scegli una priorità essenziale per questo mese e riservale tempo, energia e uno spazio concreto nella tua quotidianità.",

  "Horoscope mensuel":
    "Oroscopo mensile",
  "Les grandes tendances du mois":
    "Le grandi tendenze del mese",
  "Le mois en un regard":
    "Il mese a colpo d’occhio",
  "sur 100":
    "su 100",
  "Intensité énergétique du mois":
    "Intensità energetica del mese",
  "Les clés de votre mois":
    "Le chiavi del tuo mese",
  "Les domaines à surveiller":
    "Gli ambiti da osservare",
  "Votre priorité pour ce mois":
    "La tua priorità per questo mese",
};

const PT: TranslationMap = {
  "Un secteur très porteur à utiliser pleinement.":
    "Uma área muito favorável para aproveitar ao máximo.",
  "Une dynamique favorable soutient vos initiatives.":
    "Uma dinâmica favorável apoia suas iniciativas.",
  "Un équilibre constructif demande de la constance.":
    "Um equilíbrio construtivo exige constância.",
  "Ce domaine demande davantage d’attention.":
    "Esta área exige mais atenção.",
  "Avancez doucement et protégez vos ressources.":
    "Avance com calma e proteja seus recursos.",

  "Un mois d’expansion":
    "Um mês de expansão",
  "Votre énergie dominante favorise l’élan, la confiance et les décisions constructives. C’est le moment de faire avancer ce qui compte vraiment.":
    "Sua energia dominante favorece impulso, confiança e decisões construtivas. Este é o momento de fazer avançar o que realmente importa.",
  "Un mois porteur":
    "Um mês favorável",
  "Le climat général soutient une progression régulière. Vos meilleurs résultats viendront d’actions simples, cohérentes et bien préparées.":
    "O clima geral favorece um progresso constante. Seus melhores resultados virão de ações simples, coerentes e bem preparadas.",
  "Un mois d’ajustement":
    "Um mês de ajustes",
  "Les possibilités sont présentes, mais elles demandent de la mesure. Observez ce qui évolue avant de choisir votre prochaine direction.":
    "As possibilidades estão presentes, mas exigem equilíbrio. Observe o que está evoluindo antes de escolher sua próxima direção.",
  "Un mois de recentrage":
    "Um mês de recentramento",
  "Le rythme peut sembler plus lent, mais il vous permet de retrouver de la clarté. Protégez votre énergie et concentrez-vous sur l’essentiel.":
    "O ritmo pode parecer mais lento, mas permite recuperar clareza. Proteja sua energia e concentre-se no essencial.",

  "Force du mois":
    "Força do mês",
  "Point de vigilance":
    "Ponto de atenção",
  "Énergie dominante":
    "Energia dominante",
  "Opportunité principale":
    "Principal oportunidade",
  "Une décision claire, prise au bon moment, peut créer un effet positif durable. Choisissez une priorité et donnez-lui une place réelle.":
    "Uma decisão clara, tomada no momento certo, pode criar um efeito positivo duradouro. Escolha uma prioridade e dê a ela um espaço real.",

  "Énergie":
    "Energia",
  "Amour":
    "Amor",
  "Travail":
    "Trabalho",
  "Finances":
    "Finanças",
  "Bien-être":
    "Bem-estar",
  "Vie sociale":
    "Vida social",

  "Ce mois ouvre une nouvelle séquence et met en lumière les domaines dans lesquels votre énergie peut évoluer avec le plus de force.":
    "Este mês abre uma nova fase e destaca as áreas em que sua energia pode evoluir com mais força.",
  "Les premières semaines favorisent l’observation et les ajustements, tandis que la suite du mois encourage des actions plus affirmées. Votre progression dépendra moins de la vitesse que de la qualité de vos choix et de votre capacité à préserver vos priorités.":
    "As primeiras semanas favorecem a observação e os ajustes, enquanto o restante do mês incentiva ações mais firmes. Seu progresso dependerá menos da velocidade do que da qualidade das suas escolhas e da sua capacidade de proteger suas prioridades.",
  "Choisissez une priorité essentielle pour ce mois et protégez-lui du temps, de l’énergie et une place concrète dans votre quotidien.":
    "Escolha uma prioridade essencial para este mês e reserve tempo, energia e um espaço concreto para ela no seu dia a dia.",

  "Horoscope mensuel":
    "Horóscopo mensal",
  "Les grandes tendances du mois":
    "As grandes tendências do mês",
  "Le mois en un regard":
    "O mês em um olhar",
  "sur 100":
    "de 100",
  "Intensité énergétique du mois":
    "Intensidade energética do mês",
  "Les clés de votre mois":
    "As chaves do seu mês",
  "Les domaines à surveiller":
    "Áreas para observar",
  "Votre priorité pour ce mois":
    "Sua prioridade para este mês",
};

const TRANSLATIONS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: EN,
  es: ES,
  de: DE,
  it: IT,
  pt: PT,
};

function applyStaticTranslations(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile =
    ts.createSourceFile(
      "HoroscopeMonthOverview.tsx",
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

      const trimmed =
        raw.trim();

      const translated =
        translations[trimmed];

      if (
        translated &&
        translated !== trimmed
      ) {
        const leading =
          raw.slice(
            0,
            raw.indexOf(trimmed),
          );

        const trailing =
          raw.slice(
            raw.indexOf(trimmed) +
              trimmed.length,
          );

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

function applyDynamicTranslations(
  source: string,
  locale: NonFrenchLocale,
): string {
  const dominant: Record<
    NonFrenchLocale,
    string
  > = {
    en:
      "${dominant.label} stands out as your most favorable area. Rely on this energy to move forward with greater confidence.",
    es:
      "${dominant.label} se presenta como su ámbito más favorable. Apóyese en esta energía para avanzar con mayor confianza.",
    de:
      "${dominant.label} zeigt sich als Ihr günstigster Bereich. Nutzen Sie diese Energie, um mit mehr Vertrauen voranzugehen.",
    it:
      "${dominant.label} si presenta come il tuo ambito più favorevole. Affidati a questa energia per avanzare con maggiore fiducia.",
    pt:
      "${dominant.label} se apresenta como sua área mais favorável. Apoie-se nessa energia para avançar com mais confiança.",
  };

  const vigilance: Record<
    NonFrenchLocale,
    string
  > = {
    en:
      "${vigilance.label} requires more patience and discernment. Avoid forcing things and favor gradual adjustments.",
    es:
      "${vigilance.label} requiere más paciencia y discernimiento. Evite forzar las cosas y favorezca los ajustes progresivos.",
    de:
      "${vigilance.label} verlangt mehr Geduld und Urteilsvermögen. Vermeiden Sie es, etwas zu erzwingen, und setzen Sie auf schrittweise Anpassungen.",
    it:
      "${vigilance.label} richiede più pazienza e discernimento. Evita di forzare le cose e privilegia gli aggiustamenti graduali.",
    pt:
      "${vigilance.label} exige mais paciência e discernimento. Evite forçar as coisas e prefira ajustes graduais.",
  };

  let output = source;

  output = output.replace(
    /`\$\{dominant\.label\} se présente comme votre secteur le plus favorable\. Appuyez-vous sur cette énergie pour avancer avec davantage de confiance\.`/g,
    `\`${dominant[locale]}\``,
  );

  output = output.replace(
    /`\$\{vigilance\.label\} demande plus de patience et de discernement\. Évitez de forcer les choses et privilégiez les ajustements progressifs\.`/g,
    `\`${vigilance[locale]}\``,
  );

  return output;
}

export function localizeHoroscopeMonthOverview(
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
    applyDynamicTranslations(
      source,
      normalizedLocale,
    );

  localized =
    applyStaticTranslations(
      localized,
      translations,
    );

  return localized;
}
