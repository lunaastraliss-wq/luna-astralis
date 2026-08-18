import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

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
    "Les planètes dominantes de votre mois":
      "The dominant planets of your month",
    "Votre climat planétaire":
      "Your planetary climate",
    "Votre trio dominant":
      "Your dominant trio",
    "Influence dans votre mois":
      "Influence in your month",
    "Conseil":
      "Guidance",
    "Votre combinaison dominante":
      "Your dominant combination",
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

    "Les forces dominantes":
      "Las fuerzas dominantes",
    "Les planètes dominantes de votre mois":
      "Los planetas dominantes de su mes",
    "Votre climat planétaire":
      "Su clima planetario",
    "Votre trio dominant":
      "Su trío dominante",
    "Influence dans votre mois":
      "Influencia en su mes",
    "Conseil":
      "Consejo",
    "Votre combinaison dominante":
      "Su combinación dominante",
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

    "Influence majeure":
      "Wichtiger Einfluss",
    "Influence principale":
      "Haupteinfluss",
    "Influence secondaire":
      "Sekundärer Einfluss",
    "Influence complémentaire":
      "Ergänzender Einfluss",

    "Les forces dominantes":
      "Die dominierenden Kräfte",
    "Les planètes dominantes de votre mois":
      "Die dominierenden Planeten Ihres Monats",
    "Votre climat planétaire":
      "Ihr planetarisches Klima",
    "Votre trio dominant":
      "Ihr dominierendes Trio",
    "Influence dans votre mois":
      "Einfluss in Ihrem Monat",
    "Conseil":
      "Rat",
    "Votre combinaison dominante":
      "Ihre dominante Kombination",
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

    "Influence majeure":
      "Influenza principale",
    "Influence principale":
      "Influenza principale",
    "Influence secondaire":
      "Influenza secondaria",
    "Influence complémentaire":
      "Influenza complementare",

    "Les forces dominantes":
      "Le forze dominanti",
    "Les planètes dominantes de votre mois":
      "I pianeti dominanti del tuo mese",
    "Votre climat planétaire":
      "Il tuo clima planetario",
    "Votre trio dominant":
      "Il tuo trio dominante",
    "Influence dans votre mois":
      "Influenza nel tuo mese",
    "Conseil":
      "Consiglio",
    "Votre combinaison dominante":
      "La tua combinazione dominante",
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

    "Influence majeure":
      "Influência principal",
    "Influence principale":
      "Influência principal",
    "Influence secondaire":
      "Influência secundária",
    "Influence complémentaire":
      "Influência complementar",

    "Les forces dominantes":
      "As forças dominantes",
    "Les planètes dominantes de votre mois":
      "Os planetas dominantes do seu mês",
    "Votre climat planétaire":
      "Seu clima planetário",
    "Votre trio dominant":
      "Seu trio dominante",
    "Influence dans votre mois":
      "Influência no seu mês",
    "Conseil":
      "Conselho",
    "Votre combinaison dominante":
      "Sua combinação dominante",
  },
};

/* =========================================================
   PLANET DISPLAY NAMES
========================================================= */

const PLANET_NAMES: Record<
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
    Chiron: "Chiron",
    "Nœud Nord": "North Node",
    "Nœud Sud": "South Node",
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
    Chiron: "Quirón",
    "Nœud Nord": "Nodo Norte",
    "Nœud Sud": "Nodo Sur",
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
    Chiron: "Chiron",
    "Nœud Nord": "Nordknoten",
    "Nœud Sud": "Südknoten",
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
    Chiron: "Chirone",
    "Nœud Nord": "Nodo Nord",
    "Nœud Sud": "Nodo Sud",
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
    Chiron: "Quíron",
    "Nœud Nord": "Nodo Norte",
    "Nœud Sud": "Nodo Sul",
  },
};

/* =========================================================
   BASIC HELPERS
========================================================= */

function replaceAllLiteral(
  source: string,
  from: string,
  to: string,
): string {
  return source
    .split(from)
    .join(to);
}

function localizeStaticStrings(
  source: string,
  translations: TranslationMap,
): string {
  let output =
    source;

  for (
    const [from, to]
    of Object.entries(
      translations,
    )
  ) {
    output =
      replaceAllLiteral(
        output,
        JSON.stringify(from),
        JSON.stringify(to),
      );
  }

  return output;
}

/* =========================================================
   JSX TEXT
========================================================= */

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

  function visit(
    node: ts.Node,
  ): void {
    if (
      ts.isJsxText(node)
    ) {
      const raw =
        node.getText(sourceFile);

      const normalized =
        raw
          .replace(/\s+/g, " ")
          .trim();

      const translated =
        translations[
          normalized
        ];

      if (translated) {
        const startIndex =
          raw.indexOf(
            raw.trim(),
          );

        replacements.push({
          start:
            node.getStart(
              sourceFile,
            ),

          end:
            node.getEnd(),

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

/* =========================================================
   PLANET HELPER
========================================================= */

function injectPlanetHelper(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "__monthDominantPlanetName",
    )
  ) {
    return source;
  }

  const helper = `
/* =========================================================
   MONTH DOMINANT PLANETS — LOCALE HELPERS
========================================================= */

const __MONTH_DOMINANT_PLANET_NAMES:
  Record<string, string> =
  ${JSON.stringify(
    PLANET_NAMES[locale],
    null,
    2,
  )};

function __monthDominantPlanetName(
  value: string,
): string {
  return (
    __MONTH_DOMINANT_PLANET_NAMES[
      value
    ] ??
    value
  );
}

/* =========================================================
   END MONTH DOMINANT PLANETS — LOCALE HELPERS
========================================================= */

`;

  const marker =
  "export default function HoroscopeMonthDominantPlanets";

  const index =
    source.indexOf(
      marker,
    );

  if (index < 0) {
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
   DISPLAYED PLANET
========================================================= */

function localizePlanetDisplay(
  source: string,
): string {
  return source.replace(
    /\{item\.planet\}/g,
    "{__monthDominantPlanetName(item.planet)}",
  );
}

  /*
   * Nom de la planète affiché
   * près de l'icône.
   */

  output =
    output.replace(
      /\{planet\.planet\}/g,
      "{__monthDominantPlanetName(planet.planet)}",
    );

  /*
   * Selon la structure exacte du map,
   * certaines versions utilisent item.planet.
   */

  output =
    output.replace(
      /\{item\.planet\}/g,
      "{__monthDominantPlanetName(item.planet)}",
    );

  return output;
}

/* =========================================================
   DOMINANT NAMES
========================================================= */

function localizeDominantNames(
  source: string,
): string {
  let output =
    source;

  /*
   * Cas :
   *
   * .map((planet) => planet.planet)
   *
   * devient :
   *
   * .map((planet) =>
   *   __monthDominantPlanetName(
   *     planet.planet,
   *   )
   * )
   */

  output =
    output.replace(
      /\.map\(\s*\(\s*planet\s*\)\s*=>\s*planet\.planet\s*\)/g,
      `.map(
        (planet) =>
          __monthDominantPlanetName(
            planet.planet,
          ),
      )`,
    );

  /*
   * Autre forme possible :
   *
   * .map((item) => item.planet)
   */

  output =
    output.replace(
      /\.map\(\s*\(\s*item\s*\)\s*=>\s*item\.planet\s*\)/g,
      `.map(
        (item) =>
          __monthDominantPlanetName(
            item.planet,
          ),
      )`,
    );

  return output;
}

/* =========================================================
   DYNAMIC TEXT
========================================================= */

function localizeDynamicText(
  source: string,
  locale: NonFrenchLocale,
): string {
  const scoreText: Record<
    NonFrenchLocale,
    string
  > = {
    en:
      "This planet has an influence score of ${planet.score}%.$",

    es:
      "Este planeta obtiene una puntuación de influencia del ${planet.score} %.",

    de:
      "Dieser Planet erreicht einen Einflusswert von ${planet.score} %.",

    it:
      "Questo pianeta ottiene un punteggio di influenza del ${planet.score}%.",

    pt:
      "Este planeta obtém uma pontuação de influência de ${planet.score}%.",
  };

  /*
   * Correction du petit $ accidentel
   * dans la valeur anglaise ci-dessus
   * avant utilisation.
   */
  const cleanScoreText = {
    ...scoreText,
    en:
      "This planet has an influence score of ${planet.score}%.",
  };

  const summaryWithNames: Record<
    NonFrenchLocale,
    string
  > = {
    en:
      "The energies of ${dominantNames} form your dominant combination for ${periodLabel}. Draw on their complementary strengths while respecting the rhythm and adjustments indicated in their guidance.",

    es:
      "Las energías de ${dominantNames} forman su combinación dominante de ${periodLabel}. Apóyese en sus fortalezas complementarias, respetando el ritmo y los ajustes indicados en sus consejos.",

    de:
      "Die Energien von ${dominantNames} bilden Ihre dominante Kombination für ${periodLabel}. Nutzen Sie ihre sich ergänzenden Stärken und beachten Sie dabei den Rhythmus und die in ihren Ratschlägen genannten Anpassungen.",

    it:
      "Le energie di ${dominantNames} formano la tua combinazione dominante di ${periodLabel}. Sfrutta i loro punti di forza complementari, rispettando il ritmo e gli aggiustamenti indicati nei loro consigli.",

    pt:
      "As energias de ${dominantNames} formam sua combinação dominante de ${periodLabel}. Apoie-se em suas forças complementares, respeitando o ritmo e os ajustes indicados em seus conselhos.",
  };

  const summaryWithoutNames: Record<
    NonFrenchLocale,
    string
  > = {
    en:
      "The planetary movements of ${periodLabel} invite you to move forward with discernment, observing the influences that arise before making your decisions.",

    es:
      "Los movimientos planetarios de ${periodLabel} le invitan a avanzar con discernimiento, observando las influencias que se presentan antes de tomar sus decisiones.",

    de:
      "Die planetarischen Bewegungen von ${periodLabel} laden Sie dazu ein, mit Bedacht voranzugehen und die auftretenden Einflüsse zu beobachten, bevor Sie Entscheidungen treffen.",

    it:
      "I movimenti planetari di ${periodLabel} ti invitano ad avanzare con discernimento, osservando le influenze che si presentano prima di prendere decisioni.",

    pt:
      "Os movimentos planetários de ${periodLabel} convidam você a avançar com discernimento, observando as influências que surgem antes de tomar suas decisões.",
  };

  let output =
    source;

  output =
    output.replace(
      /`Cette planète obtient un score d’influence de \$\{planet\.score\} %\.`/g,
      `\`${cleanScoreText[locale]}\``,
    );

  output =
    output.replace(
      /`Les énergies de \$\{dominantNames\} composent votre combinaison dominante de \$\{periodLabel\}\. Appuyez-vous sur leurs forces complémentaires, tout en respectant le rythme et les ajustements indiqués dans leurs conseils\.`/g,
      `\`${summaryWithNames[locale]}\``,
    );

  output =
    output.replace(
      /`Les mouvements planétaires de \$\{periodLabel\} vous invitent à avancer avec discernement, en observant les influences qui se présentent avant de prendre vos décisions\.`/g,
      `\`${summaryWithoutNames[locale]}\``,
    );

  return output;
}

/* =========================================================
   INTRODUCTION
========================================================= */

function localizeIntroduction(
  source: string,
  locale: NonFrenchLocale,
): string {
  const introductions: Record<
    NonFrenchLocale,
    string
  > = {
    en:
      `Among the different astrological influences of{" "}{periodLabel}, certain planets take on greater importance for the sign{" "}{identity.zodiacSignLabel}. They represent the energies you may feel most intensely during the month.`,

    es:
      `Entre las diferentes influencias astrológicas de{" "}{periodLabel}, algunos planetas adquieren mayor importancia para el signo{" "}{identity.zodiacSignLabel}. Representan las energías que podría sentir con mayor intensidad durante el mes.`,

    de:
      `Unter den verschiedenen astrologischen Einflüssen von{" "}{periodLabel} nehmen bestimmte Planeten für das Zeichen{" "}{identity.zodiacSignLabel} eine wichtigere Rolle ein. Sie stehen für die Energien, die Sie im Laufe des Monats besonders intensiv wahrnehmen könnten.`,

    it:
      `Tra le diverse influenze astrologiche di{" "}{periodLabel}, alcuni pianeti assumono maggiore importanza per il segno{" "}{identity.zodiacSignLabel}. Rappresentano le energie che potresti percepire con maggiore intensità durante il mese.`,

    pt:
      `Entre as diferentes influências astrológicas de{" "}{periodLabel}, alguns planetas assumem maior importância para o signo{" "}{identity.zodiacSignLabel}. Eles representam as energias que você poderá sentir com mais intensidade durante o mês.`,
  };

  const pattern =
    /Parmi les différentes influences\s+astrologiques de\{" "\}\s+\{periodLabel\}, certaines planètes\s+occupent une place plus importante\s+pour le signe\{" "\}\s+\{identity\.zodiacSignLabel\}\.\s+Elles représentent les énergies\s+que vous pourriez ressentir avec\s+le plus d’intensité durant le mois\./g;

  return source.replace(
    pattern,
    introductions[locale],
  );
}

/* =========================================================
   MAIN LOCALIZER
========================================================= */

export function localizeHoroscopeMonthDominantPlanets(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (
    locale === "fr"
  ) {
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

  /*
   * 1. Traductions statiques
   */
  let localized =
    localizeStaticStrings(
      source,
      translations,
    );

  /*
   * 2. JSX statique
   */
  localized =
    localizeJsxText(
      localized,
      translations,
    );

  /*
   * 3. Textes dynamiques
   */
  localized =
    localizeDynamicText(
      localized,
      normalizedLocale,
    );

  /*
   * 4. Introduction
   */
  localized =
    localizeIntroduction(
      localized,
      normalizedLocale,
    );

  /*
   * 5. Injecter le helper
   *    de traduction des planètes
   */
  localized =
    injectPlanetHelper(
      localized,
      normalizedLocale,
    );

  /*
   * 6. Nom de planète affiché
   */
  localized =
    localizePlanetDisplay(
      localized,
    );

  /*
   * 7. Traduire également
   *    dominantNames pour la synthèse
   */
  localized =
    localizeDominantNames(
      localized,
    );

  return localized;
}
