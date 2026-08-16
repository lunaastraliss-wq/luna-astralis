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
    "Identité": "Identity",
    "Ressources": "Resources",
    "Communication": "Communication",
    "Foyer": "Home",
    "Créativité": "Creativity",
    "Quotidien": "Daily life",
    "Relations": "Relationships",
    "Transformation": "Transformation",
    "Expansion": "Expansion",
    "Carrière": "Career",
    "Projets": "Projects",
    "Intériorité": "Inner world",
    "Évolution": "Growth",
    "Les secteurs de votre vie": "The areas of your life",
    "Les maisons astrologiques activées": "The activated astrological houses",
    "Votre carte du mois": "Your map for the month",
    "Vos secteurs prioritaires": "Your priority areas",
    "maison": "house",
    "Ce que vous pourriez remarquer": "What you may notice",
    "Conseil Luna Astralis": "Luna Astralis guidance",
    "Votre ligne directrice": "Your guiding direction",
  },
  es: {
    "Identité": "Identidad",
    "Ressources": "Recursos",
    "Communication": "Comunicación",
    "Foyer": "Hogar",
    "Créativité": "Creatividad",
    "Quotidien": "Vida cotidiana",
    "Relations": "Relaciones",
    "Transformation": "Transformación",
    "Expansion": "Expansión",
    "Carrière": "Carrera",
    "Projets": "Proyectos",
    "Intériorité": "Mundo interior",
    "Évolution": "Evolución",
    "Les secteurs de votre vie": "Los ámbitos de su vida",
    "Les maisons astrologiques activées": "Las casas astrológicas activadas",
    "Votre carte du mois": "Su mapa del mes",
    "Vos secteurs prioritaires": "Sus ámbitos prioritarios",
    "maison": "casa",
    "Ce que vous pourriez remarquer": "Lo que podría notar",
    "Conseil Luna Astralis": "Consejo Luna Astralis",
    "Votre ligne directrice": "Su línea directriz",
  },
  de: {
    "Identité": "Identität",
    "Ressources": "Ressourcen",
    "Communication": "Kommunikation",
    "Foyer": "Zuhause",
    "Créativité": "Kreativität",
    "Quotidien": "Alltag",
    "Relations": "Beziehungen",
    "Transformation": "Transformation",
    "Expansion": "Expansion",
    "Carrière": "Karriere",
    "Projets": "Projekte",
    "Intériorité": "Innere Welt",
    "Évolution": "Entwicklung",
    "Les secteurs de votre vie": "Die Bereiche Ihres Lebens",
    "Les maisons astrologiques activées": "Die aktivierten astrologischen Häuser",
    "Votre carte du mois": "Ihre Monatskarte",
    "Vos secteurs prioritaires": "Ihre Schwerpunktbereiche",
    "maison": "Haus",
    "Ce que vous pourriez remarquer": "Was Sie bemerken könnten",
    "Conseil Luna Astralis": "Luna-Astralis-Rat",
    "Votre ligne directrice": "Ihre Leitlinie",
  },
  it: {
    "Identité": "Identità",
    "Ressources": "Risorse",
    "Communication": "Comunicazione",
    "Foyer": "Casa",
    "Créativité": "Creatività",
    "Quotidien": "Vita quotidiana",
    "Relations": "Relazioni",
    "Transformation": "Trasformazione",
    "Expansion": "Espansione",
    "Carrière": "Carriera",
    "Projets": "Progetti",
    "Intériorité": "Mondo interiore",
    "Évolution": "Evoluzione",
    "Les secteurs de votre vie": "I settori della tua vita",
    "Les maisons astrologiques activées": "Le case astrologiche attivate",
    "Votre carte du mois": "La tua mappa del mese",
    "Vos secteurs prioritaires": "I tuoi settori prioritari",
    "maison": "casa",
    "Ce que vous pourriez remarquer": "Ciò che potresti notare",
    "Conseil Luna Astralis": "Consiglio Luna Astralis",
    "Votre ligne directrice": "La tua linea guida",
  },
  pt: {
    "Identité": "Identidade",
    "Ressources": "Recursos",
    "Communication": "Comunicação",
    "Foyer": "Lar",
    "Créativité": "Criatividade",
    "Quotidien": "Cotidiano",
    "Relations": "Relacionamentos",
    "Transformation": "Transformação",
    "Expansion": "Expansão",
    "Carrière": "Carreira",
    "Projets": "Projetos",
    "Intériorité": "Mundo interior",
    "Évolution": "Evolução",
    "Les secteurs de votre vie": "As áreas da sua vida",
    "Les maisons astrologiques activées": "As casas astrológicas ativadas",
    "Votre carte du mois": "Seu mapa do mês",
    "Vos secteurs prioritaires": "Suas áreas prioritárias",
    "maison": "casa",
    "Ce que vous pourriez remarquer": "O que você poderá perceber",
    "Conseil Luna Astralis": "Conselho Luna Astralis",
    "Votre ligne directrice": "Sua linha orientadora",
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
      "HoroscopeMonthActivatedHouses.tsx",
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
  const activatingPlanets: Record<
    NonFrenchLocale,
    string
  > = {
    en:
      "The influences of ${activatingPlanets.join(\", \")} make this area more prominent during the month.",
    es:
      "Las influencias de ${activatingPlanets.join(\", \")} hacen que este ámbito esté más presente durante el mes.",
    de:
      "Die Einflüsse von ${activatingPlanets.join(\", \")} rücken diesen Bereich im Laufe des Monats stärker in den Vordergrund.",
    it:
      "Le influenze di ${activatingPlanets.join(\", \")} rendono questo settore più presente nel corso del mese.",
    pt:
      "As influências de ${activatingPlanets.join(\", \")} tornam esta área mais presente ao longo do mês.",
  };

  const noPlanets: Record<
    NonFrenchLocale,
    string
  > = {
    en:
      "The month's movements gradually draw your attention toward this area of your life.",
    es:
      "Los movimientos del mes atraen gradualmente su atención hacia este ámbito de su vida.",
    de:
      "Die Bewegungen des Monats lenken Ihre Aufmerksamkeit allmählich auf diesen Lebensbereich.",
    it:
      "I movimenti del mese attirano gradualmente la tua attenzione verso questo settore della tua vita.",
    pt:
      "Os movimentos do mês atraem gradualmente sua atenção para esta área da sua vida.",
  };

  const dates: Record<
    NonFrenchLocale,
    string
  > = {
    en:
      "The periods around ${formattedDates.join(\", \")} may be particularly revealing.",
    es:
      "Los períodos alrededor de ${formattedDates.join(\", \")} pueden ser especialmente reveladores.",
    de:
      "Die Zeiträume um ${formattedDates.join(\", \")} können besonders aufschlussreich sein.",
    it:
      "I periodi intorno a ${formattedDates.join(\", \")} possono essere particolarmente rivelatori.",
    pt:
      "Os períodos em torno de ${formattedDates.join(\", \")} podem ser especialmente reveladores.",
  };

  const houseName: Record<
    NonFrenchLocale,
    string
  > = {
    en: "House ${romanNumber}",
    es: "Casa ${romanNumber}",
    de: "Haus ${romanNumber}",
    it: "Casa ${romanNumber}",
    pt: "Casa ${romanNumber}",
  };

  const summaryWithHouses: Record<
    NonFrenchLocale,
    string
  > = {
    en:
      "During ${periodLabel}, ${houseNames} are your main areas of focus. What evolves in one of these areas may affect the others; observe these connections to move forward with greater coherence and discernment.",
    es:
      "Durante ${periodLabel}, ${houseNames} constituyen sus principales ámbitos de atención. Lo que evoluciona en uno de ellos puede repercutir en los demás; observe estos vínculos para avanzar con mayor coherencia y discernimiento.",
    de:
      "Während ${periodLabel} bilden ${houseNames} Ihre wichtigsten Schwerpunktbereiche. Was sich in einem dieser Bereiche entwickelt, kann sich auf die anderen auswirken; beobachten Sie diese Verbindungen, um stimmiger und bewusster voranzugehen.",
    it:
      "Durante ${periodLabel}, ${houseNames} costituiscono i principali settori di attenzione. Ciò che evolve in uno di questi ambiti può ripercuotersi sugli altri; osserva questi legami per avanzare con maggiore coerenza e discernimento.",
    pt:
      "Durante ${periodLabel}, ${houseNames} constituem suas principais áreas de atenção. O que evolui em uma dessas áreas pode repercutir nas outras; observe essas conexões para avançar com mais coerência e discernimento.",
  };

  const summaryWithoutHouses: Record<
    NonFrenchLocale,
    string
  > = {
    en:
      "During ${periodLabel}, no area clearly stands out from the others. Simply observe the parts of your life that naturally require more attention, without trying to force a direction.",
    es:
      "Durante ${periodLabel}, ningún ámbito destaca claramente sobre los demás. Observe simplemente las áreas de su vida que reclaman de forma natural más atención, sin intentar forzar una dirección.",
    de:
      "Während ${periodLabel} hebt sich kein Bereich deutlich von den anderen ab. Beobachten Sie einfach die Lebensbereiche, die von selbst mehr Aufmerksamkeit verlangen, ohne eine Richtung erzwingen zu wollen.",
    it:
      "Durante ${periodLabel}, nessun settore emerge chiaramente rispetto agli altri. Osserva semplicemente gli ambiti della tua vita che richiedono naturalmente più attenzione, senza cercare di forzare una direzione.",
    pt:
      "Durante ${periodLabel}, nenhuma área se destaca claramente das outras. Observe apenas os aspectos da sua vida que naturalmente exigem mais atenção, sem tentar forçar uma direção.",
  };

  let output = source;

  output = output.replace(
    /`Les influences de \$\{activatingPlanets\.join\(", "\)\} rendent ce secteur plus présent au cours du mois\.`/g,
    `\`${activatingPlanets[locale]}\``,
  );

  output = output.replace(
    /"Les mouvements du mois attirent progressivement votre attention vers ce secteur de votre vie\."/g,
    JSON.stringify(noPlanets[locale]),
  );

  output = output.replace(
    /`Les périodes autour du \$\{formattedDates\.join\(", du "\)\} peuvent être particulièrement révélatrices\.`/g,
    `\`${dates[locale]}\``,
  );

  output = output.replace(
    /`Maison \$\{romanNumber\}`/g,
    `\`${houseName[locale]}\``,
  );

  output = output.replace(
    /`Durant \$\{periodLabel\}, \$\{houseNames\} constituent les principaux secteurs d’attention\. Ce qui évolue dans l’un de ces domaines peut se répercuter sur les autres; observez ces liens afin d’avancer avec davantage de cohérence et de discernement\.`/g,
    `\`${summaryWithHouses[locale]}\``,
  );

  output = output.replace(
    /`Durant \$\{periodLabel\}, aucun secteur ne se distingue nettement des autres\. Observez simplement les domaines de votre vie qui réclament naturellement plus d’attention, sans chercher à forcer une direction\.`/g,
    `\`${summaryWithoutHouses[locale]}\``,
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
      `During{" "}{periodLabel}, some areas of your life may take on more importance than others. Astrological houses highlight the areas where your attention, decisions, or experiences may become more concentrated for the sign{" "}{identity.zodiacSignLabel}.`,
    es:
      `Durante{" "}{periodLabel}, algunos ámbitos de su vida pueden adquirir más importancia que otros. Las casas astrológicas ponen de relieve los sectores donde su atención, decisiones o experiencias podrían concentrarse con mayor intensidad para el signo{" "}{identity.zodiacSignLabel}.`,
    de:
      `Während{" "}{periodLabel} können bestimmte Lebensbereiche stärker in den Vordergrund treten als andere. Die astrologischen Häuser zeigen die Bereiche, in denen sich Ihre Aufmerksamkeit, Entscheidungen oder Erfahrungen für das Zeichen{" "}{identity.zodiacSignLabel} stärker konzentrieren könnten.`,
    it:
      `Durante{" "}{periodLabel}, alcuni settori della tua vita possono assumere maggiore importanza rispetto ad altri. Le case astrologiche mettono in luce gli ambiti in cui la tua attenzione, le tue decisioni o le tue esperienze potrebbero concentrarsi maggiormente per il segno{" "}{identity.zodiacSignLabel}.`,
    pt:
      `Durante{" "}{periodLabel}, algumas áreas da sua vida podem ganhar mais importância do que outras. As casas astrológicas destacam os setores em que sua atenção, suas decisões ou experiências podem se concentrar com mais intensidade para o signo{" "}{identity.zodiacSignLabel}.`,
  };

  const pattern =
    /Au cours de\{" "\}\s*\{periodLabel\}, certains domaines de votre vie\s*peuvent prendre\s*davantage de place que d’autres\. Les\s*maisons astrologiques mettent en lumière\s*les secteurs où votre attention, vos\s*décisions ou vos expériences pourraient\s*se concentrer plus fortement pour le signe\{" "\}\s*\{identity\.zodiacSignLabel\}\./g;

  return source.replace(
    pattern,
    introductions[locale],
  );
}

export function localizeHoroscopeMonthActivatedHouses(
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
