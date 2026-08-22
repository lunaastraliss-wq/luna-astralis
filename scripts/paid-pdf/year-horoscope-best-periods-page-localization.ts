import type {
  PaidPdfLocale,
} from "./premium-localization";

type TranslationMap = Record<string, string>;

const BEST_PERIODS_PAGE_TRANSLATIONS: Record<
  Exclude<PaidPdfLocale, "fr">,
  TranslationMap
> = {
  en: {
    "Période favorable": "Favorable period",
    "Conseil": "Advice",
    "Les temps forts de votre année": "Highlights of your year",
    "vos meilleures périodes": "your best periods",
    "Vos meilleures périodes": "Your best periods",
    "Votre rythme annuel": "Your yearly rhythm",
    "Amour et relations": "Love and relationships",
    "Carrière et évolution": "Career and growth",
    "Finances et stabilité": "Finances and stability",
    "Projets et initiatives": "Projects and initiatives",
    "Périodes de vigilance": "Periods requiring caution",
    "Ces périodes demandent davantage de patience, de recul et de prudence. Évitez de forcer les décisions importantes et prenez le temps de vérifier les détails avant de vous engager.":
      "These periods require more patience, perspective, and caution. Avoid forcing important decisions and take time to check the details before committing.",
    "Votre stratégie gagnante": "Your winning strategy",
  },

  es: {
    "Période favorable": "Período favorable",
    "Conseil": "Consejo",
    "Les temps forts de votre année": "Los momentos clave de tu año",
    "vos meilleures périodes": "tus mejores períodos",
    "Vos meilleures périodes": "Tus mejores períodos",
    "Votre rythme annuel": "Tu ritmo anual",
    "Amour et relations": "Amor y relaciones",
    "Carrière et évolution": "Carrera y evolución",
    "Finances et stabilité": "Finanzas y estabilidad",
    "Projets et initiatives": "Proyectos e iniciativas",
    "Périodes de vigilance": "Períodos de atención",
    "Ces périodes demandent davantage de patience, de recul et de prudence. Évitez de forcer les décisions importantes et prenez le temps de vérifier les détails avant de vous engager.":
      "Estos períodos requieren más paciencia, perspectiva y prudencia. Evita forzar decisiones importantes y tómate el tiempo de comprobar los detalles antes de comprometerte.",
    "Votre stratégie gagnante": "Tu estrategia ganadora",
  },

  de: {
    "Période favorable": "Günstige Phase",
    "Conseil": "Rat",
    "Les temps forts de votre année": "Die Höhepunkte Ihres Jahres",
    "vos meilleures périodes": "Ihre besten Zeiträume",
    "Vos meilleures périodes": "Ihre besten Zeiträume",
    "Votre rythme annuel": "Ihr Jahresrhythmus",
    "Amour et relations": "Liebe und Beziehungen",
    "Carrière et évolution": "Karriere und Entwicklung",
    "Finances et stabilité": "Finanzen und Stabilität",
    "Projets et initiatives": "Projekte und Initiativen",
    "Périodes de vigilance": "Phasen erhöhter Aufmerksamkeit",
    "Ces périodes demandent davantage de patience, de recul et de prudence. Évitez de forcer les décisions importantes et prenez le temps de vérifier les détails avant de vous engager.":
      "Diese Phasen erfordern mehr Geduld, Abstand und Vorsicht. Erzwingen Sie keine wichtigen Entscheidungen und nehmen Sie sich Zeit, die Details zu prüfen, bevor Sie sich festlegen.",
    "Votre stratégie gagnante": "Ihre Erfolgsstrategie",
  },

  it: {
    "Période favorable": "Periodo favorevole",
    "Conseil": "Consiglio",
    "Les temps forts de votre année": "I momenti chiave del vostro anno",
    "vos meilleures périodes": "i vostri periodi migliori",
    "Vos meilleures périodes": "I vostri periodi migliori",
    "Votre rythme annuel": "Il vostro ritmo annuale",
    "Amour et relations": "Amore e relazioni",
    "Carrière et évolution": "Carriera ed evoluzione",
    "Finances et stabilité": "Finanze e stabilità",
    "Projets et initiatives": "Progetti e iniziative",
    "Périodes de vigilance": "Periodi di attenzione",
    "Ces périodes demandent davantage de patience, de recul et de prudence. Évitez de forcer les décisions importantes et prenez le temps de vérifier les détails avant de vous engager.":
      "Questi periodi richiedono più pazienza, distacco e prudenza. Evitate di forzare decisioni importanti e prendetevi il tempo di verificare i dettagli prima di impegnarvi.",
    "Votre stratégie gagnante": "La vostra strategia vincente",
  },

  pt: {
    "Période favorable": "Período favorável",
    "Conseil": "Conselho",
    "Les temps forts de votre année": "Os destaques do seu ano",
    "vos meilleures périodes": "seus melhores períodos",
    "Vos meilleures périodes": "Seus melhores períodos",
    "Votre rythme annuel": "Seu ritmo anual",
    "Amour et relations": "Amor e relacionamentos",
    "Carrière et évolution": "Carreira e evolução",
    "Finances et stabilité": "Finanças e estabilidade",
    "Projets et initiatives": "Projetos e iniciativas",
    "Périodes de vigilance": "Períodos de atenção",
    "Ces périodes demandent davantage de patience, de recul et de prudence. Évitez de forcer les décisions importantes et prenez le temps de vérifier les détails avant de vous engager.":
      "Esses períodos exigem mais paciência, perspectiva e prudência. Evite forçar decisões importantes e reserve um tempo para verificar os detalhes antes de se comprometer.",
    "Votre stratégie gagnante": "Sua estratégia vencedora",
  },
};

function applyTranslations(
  source: string,
  translations: TranslationMap,
): string {
  let output = source;

  const ordered = Object.entries(translations).sort(
    ([a], [b]) => b.length - a.length,
  );

  for (const [from, to] of ordered) {
    output = output.split(from).join(to);
  }

  return output;
}

export function localizeYearHoroscopeBestPeriodsPage(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  return applyTranslations(
    source,
    BEST_PERIODS_PAGE_TRANSLATIONS[locale],
  );
}
