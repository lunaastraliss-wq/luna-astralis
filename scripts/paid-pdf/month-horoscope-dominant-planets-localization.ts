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
   TRADUCTIONS STATIQUES
========================================================= */

const TRANSLATIONS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Identité • Vitalité":
      "Identity • Vitality",

    "Émotions • Intuition":
      "Emotions • Intuition",

    "Réflexion • Échanges":
      "Thinking • Communication",

    "Relations • Harmonie":
      "Relationships • Harmony",

    "Action • Courage":
      "Action • Courage",

    "Expansion • Occasions":
      "Expansion • Opportunities",

    "Structure • Maturité":
      "Structure • Maturity",

    "Liberté • Renouveau":
      "Freedom • Renewal",

    "Inspiration • Sensibilité":
      "Inspiration • Sensitivity",

    "Transformation • Vérité":
      "Transformation • Truth",

    "Influence majeure":
      "Major influence",

    "Influence principale":
      "Primary influence",

    "Influence secondaire":
      "Secondary influence",

    "Influence complémentaire":
      "Complementary influence",

    "Les forces dominantes":
      "Dominant forces",

    "Les planètes dominantes de votre mois":
      "The dominant planets of your month",

    "Votre climat planétaire":
      "Your planetary climate",

    "Votre trio dominant":
      "Your dominant trio",

    "Influence dans votre mois":
      "Influence during your month",

    "Conseil":
      "Guidance",

    "Votre combinaison dominante":
      "Your dominant combination",
  },

  es: {
    "Identité • Vitalité":
      "Identidad • Vitalidad",

    "Émotions • Intuition":
      "Emociones • Intuición",

    "Réflexion • Échanges":
      "Reflexión • Comunicación",

    "Relations • Harmonie":
      "Relaciones • Armonía",

    "Action • Courage":
      "Acción • Valentía",

    "Expansion • Occasions":
      "Expansión • Oportunidades",

    "Structure • Maturité":
      "Estructura • Madurez",

    "Liberté • Renouveau":
      "Libertad • Renovación",

    "Inspiration • Sensibilité":
      "Inspiración • Sensibilidad",

    "Transformation • Vérité":
      "Transformación • Verdad",

    "Influence majeure":
      "Influencia principal",

    "Influence principale":
      "Influencia principal",

    "Influence secondaire":
      "Influencia secundaria",

    "Influence complémentaire":
      "Influencia complementaria",

    "Les forces dominantes":
      "Las fuerzas dominantes",

    "Les planètes dominantes de votre mois":
      "Los planetas dominantes de su mes",

    "Votre climat planétaire":
      "Su clima planetario",

    "Votre trio dominant":
      "Su trío dominante",

    "Influence dans votre mois":
      "Influencia durante su mes",

    "Conseil":
      "Consejo",

    "Votre combinaison dominante":
      "Su combinación dominante",
  },

  de: {
    "Identité • Vitalité":
      "Identität • Vitalität",

    "Émotions • Intuition":
      "Emotionen • Intuition",

    "Réflexion • Échanges":
      "Denken • Kommunikation",

    "Relations • Harmonie":
      "Beziehungen • Harmonie",

    "Action • Courage":
      "Handeln • Mut",

    "Expansion • Occasions":
      "Expansion • Chancen",

    "Structure • Maturité":
      "Struktur • Reife",

    "Liberté • Renouveau":
      "Freiheit • Erneuerung",

    "Inspiration • Sensibilité":
      "Inspiration • Sensibilität",

    "Transformation • Vérité":
      "Transformation • Wahrheit",

    "Influence majeure":
      "Starker Einfluss",

    "Influence principale":
      "Haupteinfluss",

    "Influence secondaire":
      "Sekundärer Einfluss",

    "Influence complémentaire":
      "Ergänzender Einfluss",

    "Les forces dominantes":
      "Dominierende Kräfte",

    "Les planètes dominantes de votre mois":
      "Die dominierenden Planeten Ihres Monats",

    "Votre climat planétaire":
      "Ihr planetarisches Klima",

    "Votre trio dominant":
      "Ihr dominierendes Trio",

    "Influence dans votre mois":
      "Einfluss in Ihrem Monat",

    "Conseil":
      "Ratschlag",

    "Votre combinaison dominante":
      "Ihre dominierende Kombination",
  },

  it: {
    "Identité • Vitalité":
      "Identità • Vitalità",

    "Émotions • Intuition":
      "Emozioni • Intuizione",

    "Réflexion • Échanges":
      "Riflessione • Comunicazione",

    "Relations • Harmonie":
      "Relazioni • Armonia",

    "Action • Courage":
      "Azione • Coraggio",

    "Expansion • Occasions":
      "Espansione • Opportunità",

    "Structure • Maturité":
      "Struttura • Maturità",

    "Liberté • Renouveau":
      "Libertà • Rinnovamento",

    "Inspiration • Sensibilité":
      "Ispirazione • Sensibilità",

    "Transformation • Vérité":
      "Trasformazione • Verità",

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
      "Influenza durante il tuo mese",

    "Conseil":
      "Consiglio",

    "Votre combinaison dominante":
      "La tua combinazione dominante",
  },

  pt: {
    "Identité • Vitalité":
      "Identidade • Vitalidade",

    "Émotions • Intuition":
      "Emoções • Intuição",

    "Réflexion • Échanges":
      "Reflexão • Comunicação",

    "Relations • Harmonie":
      "Relacionamentos • Harmonia",

    "Action • Courage":
      "Ação • Coragem",

    "Expansion • Occasions":
      "Expansão • Oportunidades",

    "Structure • Maturité":
      "Estrutura • Maturidade",

    "Liberté • Renouveau":
      "Liberdade • Renovação",

    "Inspiration • Sensibilité":
      "Inspiração • Sensibilidade",

    "Transformation • Vérité":
      "Transformação • Verdade",

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
      "Influência durante o seu mês",

    "Conseil":
      "Conselho",

    "Votre combinaison dominante":
      "Sua combinação dominante",
  },
};

/* =========================================================
   NOMS DES PLANÈTES
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
   TEXTES DYNAMIQUES
========================================================= */

const DYNAMIC_TEXT = {
  en: {
    score:
      "This planet has an influence score of",

    introductionStart:
      "Among the different astrological influences of",

    introductionMiddle:
      "some planets play a more important role for the sign",

    introductionEnd:
      "They represent the energies you may feel most intensely during the month.",

    summaryStart:
      "The energies of",

    summaryMiddle:
      "form your dominant combination for",

    summaryEnd:
      "Draw on their complementary strengths while respecting the pace and adjustments indicated in their guidance.",

    fallbackStart:
      "The planetary movements of",

    fallbackEnd:
      "invite you to move forward with discernment, observing the influences that arise before making your decisions.",
  },

  es: {
    score:
      "Este planeta obtiene una puntuación de influencia de",

    introductionStart:
      "Entre las diferentes influencias astrológicas de",

    introductionMiddle:
      "algunos planetas ocupan un lugar más importante para el signo",

    introductionEnd:
      "Representan las energías que podría sentir con mayor intensidad durante el mes.",

    summaryStart:
      "Las energías de",

    summaryMiddle:
      "forman su combinación dominante para",

    summaryEnd:
      "Apóyese en sus fortalezas complementarias, respetando el ritmo y los ajustes indicados en sus consejos.",

    fallbackStart:
      "Los movimientos planetarios de",

    fallbackEnd:
      "le invitan a avanzar con discernimiento, observando las influencias que se presentan antes de tomar sus decisiones.",
  },

  de: {
    score:
      "Dieser Planet erreicht einen Einflusswert von",

    introductionStart:
      "Unter den verschiedenen astrologischen Einflüssen von",

    introductionMiddle:
      "nehmen einige Planeten für das Zeichen eine wichtigere Rolle ein",

    introductionEnd:
      "Sie repräsentieren die Energien, die Sie im Laufe des Monats möglicherweise am intensivsten spüren.",

    summaryStart:
      "Die Energien von",

    summaryMiddle:
      "bilden Ihre dominierende Kombination für",

    summaryEnd:
      "Nutzen Sie ihre sich ergänzenden Stärken und berücksichtigen Sie dabei das Tempo und die in den Ratschlägen genannten Anpassungen.",

    fallbackStart:
      "Die planetarischen Bewegungen von",

    fallbackEnd:
      "laden Sie dazu ein, mit Bedacht voranzugehen und die auftretenden Einflüsse zu beobachten, bevor Sie Entscheidungen treffen.",
  },

  it: {
    score:
      "Questo pianeta ottiene un punteggio di influenza di",

    introductionStart:
      "Tra le diverse influenze astrologiche di",

    introductionMiddle:
      "alcuni pianeti occupano un ruolo più importante per il segno",

    introductionEnd:
      "Rappresentano le energie che potresti percepire con maggiore intensità durante il mese.",

    summaryStart:
      "Le energie di",

    summaryMiddle:
      "formano la tua combinazione dominante per",

    summaryEnd:
      "Fai affidamento sui loro punti di forza complementari, rispettando il ritmo e gli adattamenti indicati nei loro consigli.",

    fallbackStart:
      "I movimenti planetari di",

    fallbackEnd:
      "ti invitano a procedere con discernimento, osservando le influenze che emergono prima di prendere decisioni.",
  },

  pt: {
    score:
      "Este planeta obtém uma pontuação de influência de",

    introductionStart:
      "Entre as diferentes influências astrológicas de",

    introductionMiddle:
      "alguns planetas ocupam um papel mais importante para o signo",

    introductionEnd:
      "Eles representam as energias que você poderá sentir com maior intensidade durante o mês.",

    summaryStart:
      "As energias de",

    summaryMiddle:
      "formam sua combinação dominante para",

    summaryEnd:
      "Apoie-se em suas forças complementares, respeitando o ritmo e os ajustes indicados em seus conselhos.",

    fallbackStart:
      "Os movimentos planetários de",

    fallbackEnd:
      "convidam você a avançar com discernimento, observando as influências que surgem antes de tomar suas decisões.",
  },
} satisfies Record<
  NonFrenchLocale,
  Record<string, string>
>;

/* =========================================================
   TRADUCTION DES TEXTES STATIQUES
========================================================= */

function localizeStaticText(
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
        const startIndex =
          raw.indexOf(trimmed);

        replacements.push({
          start:
            node.getStart(sourceFile),

          end:
            node.getEnd(),

          value:
            raw.slice(
              0,
              startIndex,
            ) +
            translated +
            raw.slice(
              startIndex +
                trimmed.length,
            ),
        });
      }
    }

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
            JSON.stringify(
              translated,
            ),
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
   HELPER DES NOMS DE PLANÈTES
========================================================= */

function injectPlanetHelper(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __monthDominantPlanetName(",
    )
  ) {
    return source;
  }

  const names =
    PLANET_NAMES[locale];

  const helper = `
const __MONTH_DOMINANT_PLANET_NAMES: Record<string, string> =
  ${JSON.stringify(names, null, 2)};

function __monthDominantPlanetName(
  value: string,
): string {
  return (
    __MONTH_DOMINANT_PLANET_NAMES[value] ??
    value
  );
}

`;

  const marker =
    "export default function HoroscopeMonthDominantPlanets";

  const index =
    source.indexOf(marker);

  if (index === -1) {
    return source;
  }

  return (
    source.slice(
      0,
      index,
    ) +
    helper +
    source.slice(index)
  );
}

/* =========================================================
   NOM AFFICHÉ DE LA PLANÈTE

   IMPORTANT :
   on traduit UNIQUEMENT item.planet dans le JSX.

   On ne touche PAS à planet.planet dans :
   - les IDs
   - les calculs
   - les icônes
   - PLANET_TONES
   - PLANET_THEME_LABELS
========================================================= */

function localizePlanetDisplay(
  source: string,
): string {
  return source.replace(
    /\{item\.planet\}/g,
    "{__monthDominantPlanetName(item.planet)}",
  );
}

/* =========================================================
   DOMINANT NAMES
========================================================= */

function localizeDominantNames(
  source: string,
): string {
  return source.replace(
    /\.map\(\s*\(\s*item\s*\)\s*=>\s*item\.planet,\s*\)/g,
    `.map(
        (item) =>
          __monthDominantPlanetName(
            item.planet,
          ),
      )`,
  );
}

/* =========================================================
   SCORE D'INFLUENCE
========================================================= */

function localizeInfluenceScore(
  source: string,
  locale: NonFrenchLocale,
): string {
  const text =
    DYNAMIC_TEXT[locale];

  return source.replace(
    /`Cette planète obtient un score d’influence de \$\{planet\.score\} %\.`/g,
    `\`${text.score} \${planet.score} %.\``,
  );
}

/* =========================================================
   INTRODUCTION
========================================================= */

function localizeIntroduction(
  source: string,
  locale: NonFrenchLocale,
): string {
  const text =
    DYNAMIC_TEXT[locale];

  const pattern =
    /Parmi les différentes influences\s+astrologiques de\{" "\}\s+\{periodLabel\}, certaines planètes\s+occupent une place plus importante\s+pour le signe\{" "\}\s+\{identity\.zodiacSignLabel\}\.\s+Elles représentent les énergies\s+que vous pourriez ressentir avec\s+le plus d’intensité durant le mois\./g;

  const replacement =
    `${text.introductionStart}{" "}
            {periodLabel}, ${text.introductionMiddle}{" "}
            {identity.zodiacSignLabel}.
            ${text.introductionEnd}`;

  return source.replace(
    pattern,
    replacement,
  );
}

/* =========================================================
   RÉSUMÉ FINAL
========================================================= */

function localizeSummary(
  source: string,
  locale: NonFrenchLocale,
): string {
  const text =
    DYNAMIC_TEXT[locale];

  const oldTrue =
    /`Les énergies de \$\{dominantNames\} composent votre combinaison dominante de \$\{periodLabel\}\. Appuyez-vous sur leurs forces complémentaires, tout en respectant le rythme et les ajustements indiqués dans leurs conseils\.`/g;

  const newTrue =
    `\`${text.summaryStart} \${dominantNames} ${text.summaryMiddle} \${periodLabel}. ${text.summaryEnd}\``;

  const oldFalse =
    /`Les mouvements planétaires de \$\{periodLabel\} vous invitent à avancer avec discernement, en observant les influences qui se présentent avant de prendre vos décisions\.`/g;

  const newFalse =
    `\`${text.fallbackStart} \${periodLabel} ${text.fallbackEnd}\``;

  return source
    .replace(
      oldTrue,
      newTrue,
    )
    .replace(
      oldFalse,
      newFalse,
    );
}

/* =========================================================
   MAIN
========================================================= */

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
    TRANSLATIONS[
      normalizedLocale
    ];

  if (!translations) {
    return source;
  }

  let localized =
    localizeStaticText(
      source,
      translations,
    );

  localized =
    injectPlanetHelper(
      localized,
      normalizedLocale,
    );

  localized =
    localizePlanetDisplay(
      localized,
    );

  localized =
    localizeDominantNames(
      localized,
    );

  localized =
    localizeInfluenceScore(
      localized,
      normalizedLocale,
    );

  localized =
    localizeIntroduction(
      localized,
      normalizedLocale,
    );

  localized =
    localizeSummary(
      localized,
      normalizedLocale,
    );

  return localized;
}
