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
    "Identité • Vitalité": "Identity • Vitality",
    "Émotions • Intuition": "Emotions • Intuition",
    "Réflexion • Échanges": "Thinking • Communication",
    "Relations • Harmonie": "Relationships • Harmony",
    "Action • Courage": "Action • Courage",
    "Expansion • Occasions": "Expansion • Opportunities",
    "Structure • Maturité": "Structure • Maturity",
    "Liberté • Renouveau": "Freedom • Renewal",
    "Inspiration • Sensibilité": "Inspiration • Sensitivity",
    "Transformation • Vérité": "Transformation • Truth",
    "Influence majeure": "Major influence",
    "Influence principale": "Primary influence",
    "Influence secondaire": "Secondary influence",
    "Influence complémentaire": "Complementary influence",
    "Les forces dominantes": "Dominant forces",
    "Les planètes dominantes de votre mois": "The dominant planets of your month",
    "Votre climat planétaire": "Your planetary climate",
    "Votre trio dominant": "Your dominant trio",
    "Influence dans votre mois": "Influence in your month",
    "Conseil": "Guidance",
    "Votre combinaison dominante": "Your dominant combination",
  },
  es: {
    "Identité • Vitalité": "Identidad • Vitalidad",
    "Émotions • Intuition": "Emociones • Intuición",
    "Réflexion • Échanges": "Reflexión • Comunicación",
    "Relations • Harmonie": "Relaciones • Armonía",
    "Action • Courage": "Acción • Valentía",
    "Expansion • Occasions": "Expansión • Oportunidades",
    "Structure • Maturité": "Estructura • Madurez",
    "Liberté • Renouveau": "Libertad • Renovación",
    "Inspiration • Sensibilité": "Inspiración • Sensibilidad",
    "Transformation • Vérité": "Transformación • Verdad",
    "Influence majeure": "Influencia principal",
    "Influence principale": "Influencia principal",
    "Influence secondaire": "Influencia secundaria",
    "Influence complémentaire": "Influencia complementaria",
    "Les forces dominantes": "Las fuerzas dominantes",
    "Les planètes dominantes de votre mois": "Los planetas dominantes de su mes",
    "Votre climat planétaire": "Su clima planetario",
    "Votre trio dominant": "Su trío dominante",
    "Influence dans votre mois": "Influencia en su mes",
    "Conseil": "Consejo",
    "Votre combinaison dominante": "Su combinación dominante",
  },
  de: {
    "Identité • Vitalité": "Identität • Vitalität",
    "Émotions • Intuition": "Emotionen • Intuition",
    "Réflexion • Échanges": "Denken • Austausch",
    "Relations • Harmonie": "Beziehungen • Harmonie",
    "Action • Courage": "Handeln • Mut",
    "Expansion • Occasions": "Expansion • Chancen",
    "Structure • Maturité": "Struktur • Reife",
    "Liberté • Renouveau": "Freiheit • Erneuerung",
    "Inspiration • Sensibilité": "Inspiration • Sensibilität",
    "Transformation • Vérité": "Transformation • Wahrheit",
    "Influence majeure": "Wichtiger Einfluss",
    "Influence principale": "Haupteinfluss",
    "Influence secondaire": "Sekundärer Einfluss",
    "Influence complémentaire": "Ergänzender Einfluss",
    "Les forces dominantes": "Die dominierenden Kräfte",
    "Les planètes dominantes de votre mois": "Die dominierenden Planeten Ihres Monats",
    "Votre climat planétaire": "Ihr planetarisches Klima",
    "Votre trio dominant": "Ihr dominierendes Trio",
    "Influence dans votre mois": "Einfluss in Ihrem Monat",
    "Conseil": "Rat",
    "Votre combinaison dominante": "Ihre dominante Kombination",
  },
  it: {
    "Identité • Vitalité": "Identità • Vitalità",
    "Émotions • Intuition": "Emozioni • Intuizione",
    "Réflexion • Échanges": "Riflessione • Comunicazione",
    "Relations • Harmonie": "Relazioni • Armonia",
    "Action • Courage": "Azione • Coraggio",
    "Expansion • Occasions": "Espansione • Opportunità",
    "Structure • Maturité": "Struttura • Maturità",
    "Liberté • Renouveau": "Libertà • Rinnovamento",
    "Inspiration • Sensibilité": "Ispirazione • Sensibilità",
    "Transformation • Vérité": "Trasformazione • Verità",
    "Influence majeure": "Influenza principale",
    "Influence principale": "Influenza principale",
    "Influence secondaire": "Influenza secondaria",
    "Influence complémentaire": "Influenza complementare",
    "Les forces dominantes": "Le forze dominanti",
    "Les planètes dominantes de votre mois": "I pianeti dominanti del tuo mese",
    "Votre climat planétaire": "Il tuo clima planetario",
    "Votre trio dominant": "Il tuo trio dominante",
    "Influence dans votre mois": "Influenza nel tuo mese",
    "Conseil": "Consiglio",
    "Votre combinaison dominante": "La tua combinazione dominante",
  },
  pt: {
    "Identité • Vitalité": "Identidade • Vitalidade",
    "Émotions • Intuition": "Emoções • Intuição",
    "Réflexion • Échanges": "Reflexão • Comunicação",
    "Relations • Harmonie": "Relacionamentos • Harmonia",
    "Action • Courage": "Ação • Coragem",
    "Expansion • Occasions": "Expansão • Oportunidades",
    "Structure • Maturité": "Estrutura • Maturidade",
    "Liberté • Renouveau": "Liberdade • Renovação",
    "Inspiration • Sensibilité": "Inspiração • Sensibilidade",
    "Transformation • Vérité": "Transformação • Verdade",
    "Influence majeure": "Influência principal",
    "Influence principale": "Influência principal",
    "Influence secondaire": "Influência secundária",
    "Influence complémentaire": "Influência complementar",
    "Les forces dominantes": "As forças dominantes",
    "Les planètes dominantes de votre mois": "Os planetas dominantes do seu mês",
    "Votre climat planétaire": "Seu clima planetário",
    "Votre trio dominant": "Seu trio dominante",
    "Influence dans votre mois": "Influência no seu mês",
    "Conseil": "Conselho",
    "Votre combinaison dominante": "Sua combinação dominante",
  },
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
  const sourceFile =
    ts.createSourceFile(
      "HoroscopeMonthDominantPlanets.tsx",
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
      const raw =
        node.getText(sourceFile);

      const normalized =
        raw.replace(/\s+/g, " ").trim();

      const translated =
        translations[normalized];

      if (translated) {
        const startIndex =
          raw.indexOf(raw.trim());

        replacements.push({
          start: node.getStart(sourceFile),
          end: node.getEnd(),
          value:
            startIndex >= 0
              ? raw.replace(
                  raw.trim(),
                  translated,
                )
              : translated,
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

function localizeDynamicText(
  source: string,
  locale: NonFrenchLocale,
): string {
  const scoreText: Record<
    NonFrenchLocale,
    string
  > = {
    en: "This planet has an influence score of ${planet.score}%.",
    es: "Este planeta obtiene una puntuación de influencia del ${planet.score} %.",
    de: "Dieser Planet erreicht einen Einflusswert von ${planet.score} %.",
    it: "Questo pianeta ottiene un punteggio di influenza del ${planet.score}%.",
    pt: "Este planeta obtém uma pontuação de influência de ${planet.score}%.",
  };

  const summaryWithNames: Record<
    NonFrenchLocale,
    string
  > = {
    en: "The energies of ${dominantNames} form your dominant combination for ${periodLabel}. Draw on their complementary strengths while respecting the rhythm and adjustments indicated in their guidance.",
    es: "Las energías de ${dominantNames} forman su combinación dominante de ${periodLabel}. Apóyese en sus fortalezas complementarias, respetando el ritmo y los ajustes indicados en sus consejos.",
    de: "Die Energien von ${dominantNames} bilden Ihre dominante Kombination für ${periodLabel}. Nutzen Sie ihre sich ergänzenden Stärken und beachten Sie dabei den Rhythmus und die in ihren Ratschlägen genannten Anpassungen.",
    it: "Le energie di ${dominantNames} formano la tua combinazione dominante di ${periodLabel}. Sfrutta i loro punti di forza complementari, rispettando il ritmo e gli aggiustamenti indicati nei loro consigli.",
    pt: "As energias de ${dominantNames} formam sua combinação dominante de ${periodLabel}. Apoie-se em suas forças complementares, respeitando o ritmo e os ajustes indicados em seus conselhos.",
  };

  const summaryWithoutNames: Record<
    NonFrenchLocale,
    string
  > = {
    en: "The planetary movements of ${periodLabel} invite you to move forward with discernment, observing the influences that arise before making your decisions.",
    es: "Los movimientos planetarios de ${periodLabel} le invitan a avanzar con discernimiento, observando las influencias que se presentan antes de tomar sus decisiones.",
    de: "Die planetarischen Bewegungen von ${periodLabel} laden Sie dazu ein, mit Bedacht voranzugehen und die auftretenden Einflüsse zu beobachten, bevor Sie Entscheidungen treffen.",
    it: "I movimenti planetari di ${periodLabel} ti invitano ad avanzare con discernimento, osservando le influenze che si presentano prima di prendere decisioni.",
    pt: "Os movimentos planetários de ${periodLabel} convidam você a avançar com discernimento, observando as influências que surgem antes de tomar suas decisões.",
  };

  let output = source;

  output = output.replace(
    /`Cette planète obtient un score d’influence de \$\{planet\.score\} %\.`/g,
    `\`${scoreText[locale]}\``,
  );

  output = output.replace(
    /`Les énergies de \$\{dominantNames\} composent votre combinaison dominante de \$\{periodLabel\}\. Appuyez-vous sur leurs forces complémentaires, tout en respectant le rythme et les ajustements indiqués dans leurs conseils\.`/g,
    `\`${summaryWithNames[locale]}\``,
  );

  output = output.replace(
    /`Les mouvements planétaires de \$\{periodLabel\} vous invitent à avancer avec discernement, en observant les influences qui se présentent avant de prendre vos décisions\.`/g,
    `\`${summaryWithoutNames[locale]}\``,
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
    en: `Among the different astrological influences of{" "}{periodLabel}, certain planets take on greater importance for the sign{" "}{identity.zodiacSignLabel}. They represent the energies you may feel most intensely during the month.`,
    es: `Entre las diferentes influencias astrológicas de{" "}{periodLabel}, algunos planetas adquieren mayor importancia para el signo{" "}{identity.zodiacSignLabel}. Representan las energías que podría sentir con mayor intensidad durante el mes.`,
    de: `Unter den verschiedenen astrologischen Einflüssen von{" "}{periodLabel} nehmen bestimmte Planeten für das Zeichen{" "}{identity.zodiacSignLabel} eine wichtigere Rolle ein. Sie stehen für die Energien, die Sie im Laufe des Monats besonders intensiv wahrnehmen könnten.`,
    it: `Tra le diverse influenze astrologiche di{" "}{periodLabel}, alcuni pianeti assumono maggiore importanza per il segno{" "}{identity.zodiacSignLabel}. Rappresentano le energie che potresti percepire con maggiore intensità durante il mese.`,
    pt: `Entre as diferentes influências astrológicas de{" "}{periodLabel}, alguns planetas assumem maior importância para o signo{" "}{identity.zodiacSignLabel}. Eles representam as energias que você poderá sentir com mais intensidade durante o mês.`,
  };

  const pattern =
    /Parmi les différentes influences\s+astrologiques de\{" "\}\s+\{periodLabel\}, certaines planètes\s+occupent une place plus importante\s+pour le signe\{" "\}\s+\{identity\.zodiacSignLabel\}\.\s+Elles représentent les énergies\s+que vous pourriez ressentir avec\s+le plus d’intensité durant le mois\./g;

  return source.replace(
    pattern,
    introductions[locale],
  );
}

export function localizeHoroscopeMonthDominantPlanets(
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
    localizeStaticStrings(
      source,
      translations,
    );

  localized =
    localizeJsxText(
      localized,
      translations,
    );

  localized =
    localizeDynamicText(
      localized,
      normalizedLocale,
    );

  localized =
    localizeIntroduction(
      localized,
      normalizedLocale,
    );

  return localized;
}
