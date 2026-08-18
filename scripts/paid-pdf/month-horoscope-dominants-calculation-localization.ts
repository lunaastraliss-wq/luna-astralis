import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

/* =========================================================
   HELPERS
========================================================= */

function replaceFunction(
  source: string,
  functionName: string,
  nextFunctionName: string,
  replacement: string,
): string {
  const pattern =
    new RegExp(
      `function ${functionName}\\([\\s\\S]*?(?=\\nfunction ${nextFunctionName}\\()`,
    );

  return source.replace(
    pattern,
    `${replacement}\n\n`,
  );
}

/* =========================================================
   PLANET LABEL FUNCTION
========================================================= */

function buildPlanetLabelFunction(
  locale: NonFrenchLocale,
): string {
  const labels = {
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
      Soleil: "el Sol",
      Lune: "la Luna",
      Mercure: "Mercurio",
      Vénus: "Venus",
      Mars: "Marte",
      Jupiter: "Júpiter",
      Saturne: "Saturno",
      Uranus: "Urano",
      Neptune: "Neptuno",
      Pluton: "Plutón",
      Chiron: "Quirón",
      "Nœud Nord": "el Nodo Norte",
      "Nœud Sud": "el Nodo Sur",
    },

    de: {
      Soleil: "die Sonne",
      Lune: "der Mond",
      Mercure: "Merkur",
      Vénus: "Venus",
      Mars: "Mars",
      Jupiter: "Jupiter",
      Saturne: "Saturn",
      Uranus: "Uranus",
      Neptune: "Neptun",
      Pluton: "Pluto",
      Chiron: "Chiron",
      "Nœud Nord": "der Nordknoten",
      "Nœud Sud": "der Südknoten",
    },

    it: {
      Soleil: "il Sole",
      Lune: "la Luna",
      Mercure: "Mercurio",
      Vénus: "Venere",
      Mars: "Marte",
      Jupiter: "Giove",
      Saturne: "Saturno",
      Uranus: "Urano",
      Neptune: "Nettuno",
      Pluton: "Plutone",
      Chiron: "Chirone",
      "Nœud Nord": "il Nodo Nord",
      "Nœud Sud": "il Nodo Sud",
    },

    pt: {
      Soleil: "o Sol",
      Lune: "a Lua",
      Mercure: "Mercúrio",
      Vénus: "Vênus",
      Mars: "Marte",
      Jupiter: "Júpiter",
      Saturne: "Saturno",
      Uranus: "Urano",
      Neptune: "Netuno",
      Pluton: "Plutão",
      Chiron: "Quíron",
      "Nœud Nord": "o Nodo Norte",
      "Nœud Sud": "o Nodo Sul",
    },
  } satisfies Record<
    NonFrenchLocale,
    Record<string, string>
  >;

  return `
function getPlanetLabel(
  planet:
    MonthlyPlanetName,
): string {
  const labels:
    Partial<
      Record<
        MonthlyPlanetName,
        string
      >
    > =
    ${JSON.stringify(
      labels[locale],
      null,
      2,
    )};

  return (
    labels[planet] ??
    planet
  );
}`;
}

/* =========================================================
   DISPLAY PLANET NAME
========================================================= */

function injectPlanetNameHelper(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __monthlyDominantPlanetName",
    )
  ) {
    return source;
  }

  const names = {
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
  } satisfies Record<
    NonFrenchLocale,
    Record<string, string>
  >;

  const helper = `
/* =========================================================
   MONTHLY DOMINANTS — GENERATED LOCALE HELPERS
========================================================= */

const __MONTHLY_DOMINANT_PLANET_NAMES:
  Partial<
    Record<
      MonthlyPlanetName,
      string
    >
  > =
  ${JSON.stringify(
    names[locale],
    null,
    2,
  )};

function __monthlyDominantPlanetName(
  planet:
    MonthlyPlanetName,
): string {
  return (
    __MONTHLY_DOMINANT_PLANET_NAMES[
      planet
    ] ??
    planet
  );
}

/* =========================================================
   END GENERATED LOCALE HELPERS
========================================================= */

`;

  const marker =
    "function getPlanetLabel(";

  const index =
    source.indexOf(marker);

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
   THEMES
========================================================= */

function localizeThemes(
  source: string,
  locale: NonFrenchLocale,
): string {
  const themes:
    Record<
      NonFrenchLocale,
      Record<string, string>
    > = {
      en: {
        "l’identité": "identity",
        "l’affirmation": "self-expression",
        "la vitalité": "vitality",
        "la direction personnelle":
          "personal direction",

        "les émotions": "emotions",
        "l’intuition": "intuition",
        "la sécurité intérieure":
          "inner security",
        "les besoins personnels":
          "personal needs",

        "la communication":
          "communication",
        "la réflexion": "reflection",
        "les échanges": "communication",
        "les décisions": "decisions",

        "les relations":
          "relationships",
        "l’attirance": "attraction",
        "l’harmonie": "harmony",
        "les valeurs": "values",

        "l’action": "action",
        "le désir": "desire",
        "le courage": "courage",
        "l’initiative": "initiative",

        "l’expansion": "expansion",
        "les occasions":
          "opportunities",
        "la confiance": "confidence",
        "l’évolution": "growth",

        "les responsabilités":
          "responsibilities",
        "la structure": "structure",
        "les limites": "boundaries",
        "la maturité": "maturity",

        "les changements": "change",
        "la liberté": "freedom",
        "les surprises": "surprises",
        "le renouveau": "renewal",

        "l’inspiration": "inspiration",
        "la sensibilité": "sensitivity",
        "les idéaux": "ideals",

        "la transformation":
          "transformation",
        "la vérité": "truth",
        "le pouvoir intérieur":
          "inner power",
        "la renaissance": "renewal",

        "la guérison": "healing",
        "la vulnérabilité":
          "vulnerability",
        "la compréhension":
          "understanding",
        "la réparation": "healing",

        "la direction": "direction",
        "l’apprentissage": "learning",
        "le chemin personnel":
          "personal path",

        "le passé": "the past",
        "les habitudes": "habits",
        "le détachement":
          "detachment",
        "l’expérience acquise":
          "past experience",

        "la prise de conscience":
          "awareness",
      },

      es: {
        "l’identité": "la identidad",
        "l’affirmation":
          "la afirmación personal",
        "la vitalité": "la vitalidad",
        "la direction personnelle":
          "la dirección personal",

        "les émotions":
          "las emociones",
        "l’intuition": "la intuición",
        "la sécurité intérieure":
          "la seguridad interior",
        "les besoins personnels":
          "las necesidades personales",

        "la communication":
          "la comunicación",
        "la réflexion": "la reflexión",
        "les échanges":
          "los intercambios",
        "les décisions":
          "las decisiones",

        "les relations":
          "las relaciones",
        "l’attirance": "la atracción",
        "l’harmonie": "la armonía",
        "les valeurs": "los valores",

        "l’action": "la acción",
        "le désir": "el deseo",
        "le courage": "el valor",
        "l’initiative": "la iniciativa",

        "l’expansion": "la expansión",
        "les occasions":
          "las oportunidades",
        "la confiance": "la confianza",
        "l’évolution": "la evolución",

        "les responsabilités":
          "las responsabilidades",
        "la structure": "la estructura",
        "les limites": "los límites",
        "la maturité": "la madurez",

        "les changements":
          "los cambios",
        "la liberté": "la libertad",
        "les surprises":
          "las sorpresas",
        "le renouveau":
          "la renovación",

        "l’inspiration":
          "la inspiración",
        "la sensibilité":
          "la sensibilidad",
        "les idéaux": "los ideales",

        "la transformation":
          "la transformación",
        "la vérité": "la verdad",
        "le pouvoir intérieur":
          "el poder interior",
        "la renaissance":
          "el renacimiento",

        "la guérison": "la sanación",
        "la vulnérabilité":
          "la vulnerabilidad",
        "la compréhension":
          "la comprensión",
        "la réparation":
          "la reparación",

        "la direction":
          "la dirección",
        "l’apprentissage":
          "el aprendizaje",
        "le chemin personnel":
          "el camino personal",

        "le passé": "el pasado",
        "les habitudes":
          "los hábitos",
        "le détachement":
          "el desapego",
        "l’expérience acquise":
          "la experiencia adquirida",

        "la prise de conscience":
          "la toma de conciencia",
      },

      de: {
        "l’identité": "Identität",
        "l’affirmation":
          "Selbstbehauptung",
        "la vitalité": "Vitalität",
        "la direction personnelle":
          "persönliche Ausrichtung",

        "les émotions": "Emotionen",
        "l’intuition": "Intuition",
        "la sécurité intérieure":
          "innere Sicherheit",
        "les besoins personnels":
          "persönliche Bedürfnisse",

        "la communication":
          "Kommunikation",
        "la réflexion": "Reflexion",
        "les échanges": "Austausch",
        "les décisions":
          "Entscheidungen",

        "les relations":
          "Beziehungen",
        "l’attirance": "Anziehung",
        "l’harmonie": "Harmonie",
        "les valeurs": "Werte",

        "l’action": "Handeln",
        "le désir": "Wunsch",
        "le courage": "Mut",
        "l’initiative": "Initiative",

        "l’expansion": "Expansion",
        "les occasions": "Chancen",
        "la confiance": "Vertrauen",
        "l’évolution": "Entwicklung",

        "les responsabilités":
          "Verantwortung",
        "la structure": "Struktur",
        "les limites": "Grenzen",
        "la maturité": "Reife",

        "les changements":
          "Veränderungen",
        "la liberté": "Freiheit",
        "les surprises":
          "Überraschungen",
        "le renouveau": "Erneuerung",

        "l’inspiration":
          "Inspiration",
        "la sensibilité":
          "Sensibilität",
        "les idéaux": "Ideale",

        "la transformation":
          "Transformation",
        "la vérité": "Wahrheit",
        "le pouvoir intérieur":
          "innere Stärke",
        "la renaissance":
          "Neubeginn",

        "la guérison": "Heilung",
        "la vulnérabilité":
          "Verletzlichkeit",
        "la compréhension":
          "Verständnis",
        "la réparation":
          "Wiederherstellung",

        "la direction": "Richtung",
        "l’apprentissage": "Lernen",
        "le chemin personnel":
          "persönlicher Weg",

        "le passé":
          "Vergangenheit",
        "les habitudes":
          "Gewohnheiten",
        "le détachement":
          "Loslassen",
        "l’expérience acquise":
          "gesammelte Erfahrung",

        "la prise de conscience":
          "Bewusstwerdung",
      },

      it: {
        "l’identité": "l’identità",
        "l’affirmation":
          "l’affermazione personale",
        "la vitalité": "la vitalità",
        "la direction personnelle":
          "la direzione personale",

        "les émotions":
          "le emozioni",
        "l’intuition": "l’intuizione",
        "la sécurité intérieure":
          "la sicurezza interiore",
        "les besoins personnels":
          "i bisogni personali",

        "la communication":
          "la comunicazione",
        "la réflexion":
          "la riflessione",
        "les échanges": "gli scambi",
        "les décisions":
          "le decisioni",

        "les relations":
          "le relazioni",
        "l’attirance": "l’attrazione",
        "l’harmonie": "l’armonia",
        "les valeurs": "i valori",

        "l’action": "l’azione",
        "le désir": "il desiderio",
        "le courage": "il coraggio",
        "l’initiative":
          "l’iniziativa",

        "l’expansion":
          "l’espansione",
        "les occasions":
          "le opportunità",
        "la confiance":
          "la fiducia",
        "l’évolution":
          "l’evoluzione",

        "les responsabilités":
          "le responsabilità",
        "la structure":
          "la struttura",
        "les limites": "i limiti",
        "la maturité": "la maturità",

        "les changements":
          "i cambiamenti",
        "la liberté": "la libertà",
        "les surprises":
          "le sorprese",
        "le renouveau":
          "il rinnovamento",

        "l’inspiration":
          "l’ispirazione",
        "la sensibilité":
          "la sensibilità",
        "les idéaux": "gli ideali",

        "la transformation":
          "la trasformazione",
        "la vérité": "la verità",
        "le pouvoir intérieur":
          "il potere interiore",
        "la renaissance":
          "la rinascita",

        "la guérison":
          "la guarigione",
        "la vulnérabilité":
          "la vulnerabilità",
        "la compréhension":
          "la comprensione",
        "la réparation":
          "la riparazione",

        "la direction":
          "la direzione",
        "l’apprentissage":
          "l’apprendimento",
        "le chemin personnel":
          "il percorso personale",

        "le passé": "il passato",
        "les habitudes":
          "le abitudini",
        "le détachement":
          "il distacco",
        "l’expérience acquise":
          "l’esperienza acquisita",

        "la prise de conscience":
          "la consapevolezza",
      },

      pt: {
        "l’identité": "a identidade",
        "l’affirmation":
          "a afirmação pessoal",
        "la vitalité": "a vitalidade",
        "la direction personnelle":
          "a direção pessoal",

        "les émotions": "as emoções",
        "l’intuition": "a intuição",
        "la sécurité intérieure":
          "a segurança interior",
        "les besoins personnels":
          "as necessidades pessoais",

        "la communication":
          "a comunicação",
        "la réflexion": "a reflexão",
        "les échanges": "as trocas",
        "les décisions": "as decisões",

        "les relations":
          "os relacionamentos",
        "l’attirance": "a atração",
        "l’harmonie": "a harmonia",
        "les valeurs": "os valores",

        "l’action": "a ação",
        "le désir": "o desejo",
        "le courage": "a coragem",
        "l’initiative": "a iniciativa",

        "l’expansion": "a expansão",
        "les occasions":
          "as oportunidades",
        "la confiance": "a confiança",
        "l’évolution": "a evolução",

        "les responsabilités":
          "as responsabilidades",
        "la structure": "a estrutura",
        "les limites": "os limites",
        "la maturité": "a maturidade",

        "les changements":
          "as mudanças",
        "la liberté": "a liberdade",
        "les surprises":
          "as surpresas",
        "le renouveau": "a renovação",

        "l’inspiration":
          "a inspiração",
        "la sensibilité":
          "a sensibilidade",
        "les idéaux": "os ideais",

        "la transformation":
          "a transformação",
        "la vérité": "a verdade",
        "le pouvoir intérieur":
          "o poder interior",
        "la renaissance":
          "o renascimento",

        "la guérison": "a cura",
        "la vulnérabilité":
          "a vulnerabilidade",
        "la compréhension":
          "a compreensão",
        "la réparation":
          "a recuperação",

        "la direction": "a direção",
        "l’apprentissage":
          "o aprendizado",
        "le chemin personnel":
          "o caminho pessoal",

        "le passé": "o passado",
        "les habitudes":
          "os hábitos",
        "le détachement":
          "o desapego",
        "l’expérience acquise":
          "a experiência adquirida",

        "la prise de conscience":
          "a tomada de consciência",
      },
    };

  let output =
    source;

  for (
    const [
      from,
      to,
    ] of Object.entries(
      themes[locale],
    )
  ) {
    output =
      output
        .split(
          JSON.stringify(from),
        )
        .join(
          JSON.stringify(to),
        );
  }

  return output;
}

/* =========================================================
   BUILD REASONS
========================================================= */

function buildReasonsFunction(
  locale: NonFrenchLocale,
): string {
  switch (locale) {
    case "en":
      return `
function buildReasons(
  score:
    PlanetScore,
): string[] {
  const reasons:
    string[] = [];

  if (
    score.transitCount > 0
  ) {
    reasons.push(
      \`\${score.transitCount} personalized transit\${score.transitCount > 1 ? "s" : ""} involve\${score.transitCount === 1 ? "s" : ""} this planet.\`,
    );
  }

  if (
    score.aspectCount > 0
  ) {
    reasons.push(
      \`\${score.aspectCount} significant aspect\${score.aspectCount > 1 ? "s" : ""} influence\${score.aspectCount === 1 ? "s" : ""} its energy.\`,
    );
  }

  if (
    score.supportiveCount > 0
  ) {
    reasons.push(
      \`\${score.supportiveCount} favorable configuration\${score.supportiveCount > 1 ? "s" : ""} support\${score.supportiveCount === 1 ? "s" : ""} its expression.\`,
    );
  }

  if (
    score.challengingCount > 0
  ) {
    reasons.push(
      \`\${score.challengingCount} challenging configuration\${score.challengingCount > 1 ? "s" : ""} require\${score.challengingCount === 1 ? "s" : ""} adjustments.\`,
    );
  }

  if (
    score.conjunctionCount > 0
  ) {
    reasons.push(
      \`\${score.conjunctionCount} conjunction\${score.conjunctionCount > 1 ? "s" : ""} strongly concentrate\${score.conjunctionCount === 1 ? "s" : ""} its influence.\`,
    );
  }

  if (
    score.exactnessScore >= 10
  ) {
    reasons.push(
      "Several precise aspects reinforce its importance during the month.",
    );
  }

  if (
    score.strongestDate
  ) {
    reasons.push(
      \`Its influence reaches a particularly significant point around \${score.strongestDate}.\`,
    );
  }

  if (
    reasons.length === 0
  ) {
    reasons.push(
      "Its natural astrological weight gives it a notable place in the overall balance of the month.",
    );
  }

  return reasons.slice(
    0,
    4,
  );
}`;

    case "es":
      return `
function buildReasons(
  score:
    PlanetScore,
): string[] {
  const reasons:
    string[] = [];

  if (score.transitCount > 0) {
    reasons.push(
      \`\${score.transitCount} tránsito\${score.transitCount > 1 ? "s" : ""} personalizado\${score.transitCount > 1 ? "s" : ""} implica\${score.transitCount === 1 ? "" : "n"} a este planeta.\`,
    );
  }

  if (score.aspectCount > 0) {
    reasons.push(
      \`\${score.aspectCount} aspecto\${score.aspectCount > 1 ? "s" : ""} importante\${score.aspectCount > 1 ? "s" : ""} influye\${score.aspectCount === 1 ? "" : "n"} en su energía.\`,
    );
  }

  if (score.supportiveCount > 0) {
    reasons.push(
      \`\${score.supportiveCount} configuración\${score.supportiveCount > 1 ? "es" : ""} favorable\${score.supportiveCount > 1 ? "s" : ""} apoya\${score.supportiveCount === 1 ? "" : "n"} su expresión.\`,
    );
  }

  if (score.challengingCount > 0) {
    reasons.push(
      \`\${score.challengingCount} configuración\${score.challengingCount > 1 ? "es" : ""} exigente\${score.challengingCount > 1 ? "s" : ""} requiere\${score.challengingCount === 1 ? "" : "n"} ajustes.\`,
    );
  }

  if (score.conjunctionCount > 0) {
    reasons.push(
      \`\${score.conjunctionCount} conjunción\${score.conjunctionCount > 1 ? "es" : ""} concentra\${score.conjunctionCount === 1 ? "" : "n"} fuertemente su influencia.\`,
    );
  }

  if (score.exactnessScore >= 10) {
    reasons.push(
      "Varios aspectos precisos refuerzan su importancia durante el mes.",
    );
  }

  if (score.strongestDate) {
    reasons.push(
      \`Su influencia alcanza un punto especialmente significativo alrededor de \${score.strongestDate}.\`,
    );
  }

  if (reasons.length === 0) {
    reasons.push(
      "Su peso astrológico natural le otorga un lugar importante en el equilibrio general del mes.",
    );
  }

  return reasons.slice(0, 4);
}`;

    case "de":
      return `
function buildReasons(
  score:
    PlanetScore,
): string[] {
  const reasons:
    string[] = [];

  if (score.transitCount > 0) {
    reasons.push(
      \`\${score.transitCount} persönliche Transit\${score.transitCount > 1 ? "e" : ""} beziehen diesen Planeten ein.\`,
    );
  }

  if (score.aspectCount > 0) {
    reasons.push(
      \`\${score.aspectCount} wichtige\${score.aspectCount === 1 ? "r" : ""} Aspekt\${score.aspectCount > 1 ? "e" : ""} beeinflussen seine Energie.\`,
    );
  }

  if (score.supportiveCount > 0) {
    reasons.push(
      \`\${score.supportiveCount} günstige Konfiguration\${score.supportiveCount > 1 ? "en" : ""} unterstützen seinen Ausdruck.\`,
    );
  }

  if (score.challengingCount > 0) {
    reasons.push(
      \`\${score.challengingCount} herausfordernde Konfiguration\${score.challengingCount > 1 ? "en" : ""} erfordern Anpassungen.\`,
    );
  }

  if (score.conjunctionCount > 0) {
    reasons.push(
      \`\${score.conjunctionCount} Konjunktion\${score.conjunctionCount > 1 ? "en" : ""} bündeln seinen Einfluss stark.\`,
    );
  }

  if (score.exactnessScore >= 10) {
    reasons.push(
      "Mehrere präzise Aspekte verstärken seine Bedeutung im Laufe des Monats.",
    );
  }

  if (score.strongestDate) {
    reasons.push(
      \`Sein Einfluss erreicht um \${score.strongestDate} einen besonders markanten Punkt.\`,
    );
  }

  if (reasons.length === 0) {
    reasons.push(
      "Sein natürliches astrologisches Gewicht verleiht ihm einen wichtigen Platz im Gesamtgleichgewicht des Monats.",
    );
  }

  return reasons.slice(0, 4);
}`;

    case "it":
      return `
function buildReasons(
  score:
    PlanetScore,
): string[] {
  const reasons:
    string[] = [];

  if (score.transitCount > 0) {
    reasons.push(
      \`\${score.transitCount} transit\${score.transitCount > 1 ? "i" : "o"} personalizzato\${score.transitCount > 1 ? "i" : ""} coinvolge\${score.transitCount === 1 ? "" : "ono"} questo pianeta.\`,
    );
  }

  if (score.aspectCount > 0) {
    reasons.push(
      \`\${score.aspectCount} aspett\${score.aspectCount > 1 ? "i" : "o"} importante\${score.aspectCount > 1 ? "i" : ""} influenza\${score.aspectCount === 1 ? "" : "no"} la sua energia.\`,
    );
  }

  if (score.supportiveCount > 0) {
    reasons.push(
      \`\${score.supportiveCount} configurazione\${score.supportiveCount > 1 ? "i" : ""} favorevole\${score.supportiveCount > 1 ? "i" : ""} sostiene\${score.supportiveCount === 1 ? "" : "gono"} la sua espressione.\`,
    );
  }

  if (score.challengingCount > 0) {
    reasons.push(
      \`\${score.challengingCount} configurazione\${score.challengingCount > 1 ? "i" : ""} impegnativa\${score.challengingCount > 1 ? "e" : ""} richiede\${score.challengingCount === 1 ? "" : "ono"} adattamenti.\`,
    );
  }

  if (score.conjunctionCount > 0) {
    reasons.push(
      \`\${score.conjunctionCount} congiunzione\${score.conjunctionCount > 1 ? "i" : ""} concentra\${score.conjunctionCount === 1 ? "" : "no"} fortemente la sua influenza.\`,
    );
  }

  if (score.exactnessScore >= 10) {
    reasons.push(
      "Diversi aspetti precisi rafforzano la sua importanza durante il mese.",
    );
  }

  if (score.strongestDate) {
    reasons.push(
      \`La sua influenza raggiunge un punto particolarmente significativo intorno al \${score.strongestDate}.\`,
    );
  }

  if (reasons.length === 0) {
    reasons.push(
      "Il suo peso astrologico naturale gli conferisce un ruolo importante nell’equilibrio generale del mese.",
    );
  }

  return reasons.slice(0, 4);
}`;

    case "pt":
      return `
function buildReasons(
  score:
    PlanetScore,
): string[] {
  const reasons:
    string[] = [];

  if (score.transitCount > 0) {
    reasons.push(
      \`\${score.transitCount} trânsito\${score.transitCount > 1 ? "s" : ""} personalizado\${score.transitCount > 1 ? "s" : ""} envolve\${score.transitCount === 1 ? "" : "m"} este planeta.\`,
    );
  }

  if (score.aspectCount > 0) {
    reasons.push(
      \`\${score.aspectCount} aspecto\${score.aspectCount > 1 ? "s" : ""} importante\${score.aspectCount > 1 ? "s" : ""} influencia\${score.aspectCount === 1 ? "" : "m"} sua energia.\`,
    );
  }

  if (score.supportiveCount > 0) {
    reasons.push(
      \`\${score.supportiveCount} configuração\${score.supportiveCount > 1 ? "ões" : ""} favorável\${score.supportiveCount > 1 ? "eis" : ""} apoia\${score.supportiveCount === 1 ? "" : "m"} sua expressão.\`,
    );
  }

  if (score.challengingCount > 0) {
    reasons.push(
      \`\${score.challengingCount} configuração\${score.challengingCount > 1 ? "ões" : ""} exigente\${score.challengingCount > 1 ? "s" : ""} exige\${score.challengingCount === 1 ? "" : "m"} ajustes.\`,
    );
  }

  if (score.conjunctionCount > 0) {
    reasons.push(
      \`\${score.conjunctionCount} conjunção\${score.conjunctionCount > 1 ? "ões" : ""} concentra\${score.conjunctionCount === 1 ? "" : "m"} fortemente sua influência.\`,
    );
  }

  if (score.exactnessScore >= 10) {
    reasons.push(
      "Vários aspectos precisos reforçam sua importância durante o mês.",
    );
  }

  if (score.strongestDate) {
    reasons.push(
      \`Sua influência atinge um ponto especialmente marcante por volta de \${score.strongestDate}.\`,
    );
  }

  if (reasons.length === 0) {
    reasons.push(
      "Seu peso astrológico natural lhe dá um lugar importante no equilíbrio geral do mês.",
    );
  }

  return reasons.slice(0, 4);
}`;
  }
}

/* =========================================================
   BUILD TITLE
========================================================= */

function buildTitleFunction(
  locale: NonFrenchLocale,
): string {
  const primary:
    Record<
      NonFrenchLocale,
      string
    > = {
      en:
        "dominant planet of the month",

      es:
        "planeta dominante del mes",

      de:
        "dominierender Planet des Monats",

      it:
        "pianeta dominante del mese",

      pt:
        "planeta dominante do mês",
    };

  const secondary:
    Record<
      NonFrenchLocale,
      string
    > = {
      en:
        "major influence no.",

      es:
        "influencia principal n.º",

      de:
        "wichtiger Einfluss Nr.",

      it:
        "influenza principale n.",

      pt:
        "influência principal nº",
    };

  return `
function buildTitle({
  planet,
  rank,
}: {
  planet:
    MonthlyPlanetName;

  rank: number;
}): string {
  const planetName =
    __monthlyDominantPlanetName(
      planet,
    );

  if (rank === 1) {
    return \`\${planetName}, ${
      primary[locale]
    }\`;
  }

  return \`\${planetName}, ${
    secondary[locale]
  } \${rank}\`;
}`;
}

/* =========================================================
   BUILD DESCRIPTION
========================================================= */

function buildDescriptionFunction(
  locale: NonFrenchLocale,
): string {
  if (locale === "en") {
    return `
function buildDescription(
  score:
    PlanetScore,
): string {
  const definition =
    PLANET_MAP.get(
      score.planet,
    );

  const themes =
    definition?.themes ?? [
      "growth",
      "awareness",
    ];

  const primaryTheme =
    themes[0];

  const secondaryTheme =
    themes[1] ??
    themes[0];

  const planetLabel =
    getPlanetLabel(
      score.planet,
    );

  const tone =
    getDominantTone(
      score,
    );

  if (tone === "favorable") {
    return (
      \`\${planetLabel} has a constructive influence during the month. \` +
      \`It particularly supports \${primaryTheme} and \${secondaryTheme}. \` +
      "Opportunities related to this planet may arise more naturally when you support its energy with concrete decisions."
    );
  }

  if (tone === "challenging") {
    return (
      \`\${planetLabel} plays a transformative role during the month. \` +
      \`It particularly activates \${primaryTheme} and \${secondaryTheme}. \` +
      "Certain tensions may require adaptation, but they also reveal what needs to evolve."
    );
  }

  if (tone === "intense") {
    return (
      \`\${planetLabel} concentrates particularly strong energy during the month. \` +
      \`The following themes become more prominent: \${primaryTheme} and \${secondaryTheme}. \` +
      "This influence benefits from being directed toward one clear priority."
    );
  }

  return (
    \`\${planetLabel} accompanies several important movements during the month. \` +
    \`Its influence mainly affects \${primaryTheme} and \${secondaryTheme}. \` +
    "It encourages you to maintain a balance between opportunities for progress and the necessary adjustments."
  );
}`;
  }

  if (locale === "es") {
    return `
function buildDescription(
  score:
    PlanetScore,
): string {
  const definition =
    PLANET_MAP.get(score.planet);

  const themes =
    definition?.themes ?? [
      "la evolución",
      "la toma de conciencia",
    ];

  const primaryTheme =
    themes[0];

  const secondaryTheme =
    themes[1] ?? themes[0];

  const planetLabel =
    getPlanetLabel(score.planet);

  const tone =
    getDominantTone(score);

  if (tone === "favorable") {
    return (
      \`\${planetLabel} ejerce una influencia constructiva durante el mes. \` +
      \`Favorece especialmente \${primaryTheme} y \${secondaryTheme}. \` +
      "Las oportunidades relacionadas con este planeta pueden presentarse con mayor naturalidad cuando acompaña su energía con decisiones concretas."
    );
  }

  if (tone === "challenging") {
    return (
      \`\${planetLabel} ocupa un lugar transformador durante el mes. \` +
      \`Activa especialmente \${primaryTheme} y \${secondaryTheme}. \` +
      "Algunas tensiones pueden requerir adaptación, pero también revelan lo que debe evolucionar."
    );
  }

  if (tone === "intense") {
    return (
      \`\${planetLabel} concentra una energía particularmente intensa durante el mes. \` +
      \`Los siguientes temas adquieren mayor importancia: \${primaryTheme} y \${secondaryTheme}. \` +
      "Conviene dirigir esta influencia hacia una prioridad clara."
    );
  }

  return (
    \`\${planetLabel} acompaña varios movimientos importantes del mes. \` +
    \`Su influencia afecta principalmente \${primaryTheme} y \${secondaryTheme}. \` +
    "Invita a mantener un equilibrio entre las oportunidades de progreso y los ajustes necesarios."
  );
}`;
  }

  if (locale === "de") {
    return `
function buildDescription(
  score:
    PlanetScore,
): string {
  const definition =
    PLANET_MAP.get(score.planet);

  const themes =
    definition?.themes ?? [
      "Entwicklung",
      "Bewusstwerdung",
    ];

  const primaryTheme =
    themes[0];

  const secondaryTheme =
    themes[1] ?? themes[0];

  const planetLabel =
    getPlanetLabel(score.planet);

  const tone =
    getDominantTone(score);

  if (tone === "favorable") {
    return (
      \`\${planetLabel} übt im Laufe des Monats einen konstruktiven Einfluss aus. \` +
      \`Besonders unterstützt werden \${primaryTheme} und \${secondaryTheme}. \` +
      "Chancen, die mit diesem Planeten verbunden sind, können sich leichter zeigen, wenn Sie seine Energie durch konkrete Entscheidungen unterstützen."
    );
  }

  if (tone === "challenging") {
    return (
      \`\${planetLabel} nimmt im Laufe des Monats eine transformative Rolle ein. \` +
      \`Besonders \${primaryTheme} und \${secondaryTheme} werden in Bewegung gebracht. \` +
      "Bestimmte Spannungen können Anpassungen erfordern, zeigen aber zugleich, was sich weiterentwickeln muss."
    );
  }

  if (tone === "intense") {
    return (
      \`\${planetLabel} bündelt im Laufe des Monats besonders starke Energie. \` +
      \`Folgende Themen treten stärker hervor: \${primaryTheme} und \${secondaryTheme}. \` +
      "Dieser Einfluss entfaltet sich am besten, wenn er auf eine klare Priorität ausgerichtet wird."
    );
  }

  return (
    \`\${planetLabel} begleitet mehrere wichtige Bewegungen des Monats. \` +
    \`Sein Einfluss betrifft vor allem \${primaryTheme} und \${secondaryTheme}. \` +
    "Er lädt dazu ein, ein Gleichgewicht zwischen Entwicklungsmöglichkeiten und notwendigen Anpassungen zu wahren."
  );
}`;
  }

  if (locale === "it") {
    return `
function buildDescription(
  score:
    PlanetScore,
): string {
  const definition =
    PLANET_MAP.get(score.planet);

  const themes =
    definition?.themes ?? [
      "l’evoluzione",
      "la consapevolezza",
    ];

  const primaryTheme =
    themes[0];

  const secondaryTheme =
    themes[1] ?? themes[0];

  const planetLabel =
    getPlanetLabel(score.planet);

  const tone =
    getDominantTone(score);

  if (tone === "favorable") {
    return (
      \`\${planetLabel} esercita un’influenza costruttiva durante il mese. \` +
      \`Sostiene in particolare \${primaryTheme} e \${secondaryTheme}. \` +
      "Le opportunità legate a questo pianeta possono presentarsi più naturalmente quando accompagni la sua energia con decisioni concrete."
    );
  }

  if (tone === "challenging") {
    return (
      \`\${planetLabel} assume un ruolo trasformativo durante il mese. \` +
      \`Mette particolarmente in movimento \${primaryTheme} e \${secondaryTheme}. \` +
      "Alcune tensioni possono richiedere un adattamento, ma rivelano anche ciò che deve evolvere."
    );
  }

  if (tone === "intense") {
    return (
      \`\${planetLabel} concentra un’energia particolarmente intensa durante il mese. \` +
      \`I temi seguenti assumono maggiore importanza: \${primaryTheme} e \${secondaryTheme}. \` +
      "Questa influenza dà il meglio quando viene indirizzata verso una priorità chiara."
    );
  }

  return (
    \`\${planetLabel} accompagna diversi movimenti importanti del mese. \` +
    \`La sua influenza riguarda soprattutto \${primaryTheme} e \${secondaryTheme}. \` +
    "Invita a mantenere un equilibrio tra le opportunità di crescita e gli adattamenti necessari."
  );
}`;
  }

  return `
function buildDescription(
  score:
    PlanetScore,
): string {
  const definition =
    PLANET_MAP.get(score.planet);

  const themes =
    definition?.themes ?? [
      "a evolução",
      "a tomada de consciência",
    ];

  const primaryTheme =
    themes[0];

  const secondaryTheme =
    themes[1] ?? themes[0];

  const planetLabel =
    getPlanetLabel(score.planet);

  const tone =
    getDominantTone(score);

  if (tone === "favorable") {
    return (
      \`\${planetLabel} exerce uma influência construtiva durante o mês. \` +
      \`Favorece especialmente \${primaryTheme} e \${secondaryTheme}. \` +
      "As oportunidades relacionadas a este planeta podem surgir de forma mais natural quando você acompanha sua energia com decisões concretas."
    );
  }

  if (tone === "challenging") {
    return (
      \`\${planetLabel} ocupa um papel transformador durante o mês. \` +
      \`Coloca especialmente em movimento \${primaryTheme} e \${secondaryTheme}. \` +
      "Algumas tensões podem exigir adaptação, mas também revelam o que precisa evoluir."
    );
  }

  if (tone === "intense") {
    return (
      \`\${planetLabel} concentra uma energia particularmente intensa durante o mês. \` +
      \`Os seguintes temas ganham mais importância: \${primaryTheme} e \${secondaryTheme}. \` +
      "Essa influência funciona melhor quando direcionada para uma prioridade clara."
    );
  }

  return (
    \`\${planetLabel} acompanha vários movimentos importantes do mês. \` +
    \`Sua influência afeta principalmente \${primaryTheme} e \${secondaryTheme}. \` +
    "Ela convida você a manter um equilíbrio entre as oportunidades de progresso e os ajustes necessários."
  );
}`;
}

/* =========================================================
   BUILD ADVICE
========================================================= */

function buildAdviceFunction(
  locale: NonFrenchLocale,
): string {
  const advice = {
    en: {
      favorable:
        "Take advantage of the available openings and turn them into concrete decisions and actions.",

      challenging:
        "Do not automatically resist change: observe what this influence is trying to reorganize.",

      intense:
        "Channel your energy toward one clear priority and avoid trying to resolve everything at once.",

      balanced:
        "Move forward consistently and adjust your pace according to events rather than forcing results.",
    },

    es: {
      favorable:
        "Aproveche las oportunidades presentes y conviértalas en decisiones y acciones concretas.",

      challenging:
        "No se resista automáticamente al cambio: observe lo que esta influencia intenta reorganizar.",

      intense:
        "Canalice su energía hacia una prioridad clara y evite intentar resolverlo todo al mismo tiempo.",

      balanced:
        "Avance con constancia y adapte su ritmo a los acontecimientos en lugar de forzar los resultados.",
    },

    de: {
      favorable:
        "Nutzen Sie die vorhandenen Möglichkeiten und verwandeln Sie sie in konkrete Entscheidungen und Handlungen.",

      challenging:
        "Widersetzen Sie sich Veränderungen nicht automatisch: Beobachten Sie, was dieser Einfluss neu ordnen möchte.",

      intense:
        "Richten Sie Ihre Energie auf eine klare Priorität und vermeiden Sie den Versuch, alles gleichzeitig zu lösen.",

      balanced:
        "Gehen Sie beständig voran und passen Sie Ihr Tempo den Ereignissen an, anstatt Ergebnisse zu erzwingen.",
    },

    it: {
      favorable:
        "Approfitta delle opportunità presenti e trasformale in decisioni e azioni concrete.",

      challenging:
        "Non opporti automaticamente al cambiamento: osserva ciò che questa influenza cerca di riorganizzare.",

      intense:
        "Canalizza la tua energia verso una priorità chiara ed evita di voler risolvere tutto contemporaneamente.",

      balanced:
        "Avanza con costanza e adatta il tuo ritmo agli eventi invece di forzare i risultati.",
    },

    pt: {
      favorable:
        "Aproveite as oportunidades presentes e transforme-as em decisões e ações concretas.",

      challenging:
        "Não resista automaticamente à mudança: observe o que essa influência está tentando reorganizar.",

      intense:
        "Canalize sua energia para uma prioridade clara e evite tentar resolver tudo ao mesmo tempo.",

      balanced:
        "Avance com constância e ajuste seu ritmo de acordo com os acontecimentos, em vez de forçar resultados.",
    },
  };

  return `
function buildAdvice(
  score:
    PlanetScore,
): string {
  const tone =
    getDominantTone(
      score,
    );

  switch (tone) {
    case "favorable":
      return ${JSON.stringify(
        advice[locale].favorable,
      )};

    case "challenging":
      return ${JSON.stringify(
        advice[locale].challenging,
      )};

    case "intense":
      return ${JSON.stringify(
        advice[locale].intense,
      )};

    case "balanced":
      return ${JSON.stringify(
        advice[locale].balanced,
      )};
  }
}`;
}

/* =========================================================
   MAIN LOCALIZER
========================================================= */

export function localizeMonthlyDominantsCalculation(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (
    locale === "fr"
  ) {
    return source;
  }

  if (
    !source.includes(
      "calculateMonthlyDominants",
    )
  ) {
    return source;
  }

  const normalizedLocale =
    locale as NonFrenchLocale;

  /*
   * 1. Traduire les thèmes utilisés
   *    dans les descriptions.
   */
  let localized =
    localizeThemes(
      source,
      normalizedLocale,
    );

  /*
   * 2. Ajouter le mapping des noms
   *    de planètes sans modifier
   *    les clés astrologiques internes.
   *
   * Très important :
   * Soleil / Lune / Pluton etc.
   * restent les valeurs internes.
   */
  localized =
    injectPlanetNameHelper(
      localized,
      normalizedLocale,
    );

  /*
   * 3. getPlanetLabel()
   */
  localized =
    replaceFunction(
      localized,
      "getPlanetLabel",
      "roundValue",
      buildPlanetLabelFunction(
        normalizedLocale,
      ),
    );

  /*
   * 4. Raisons de dominance.
   */
  localized =
    replaceFunction(
      localized,
      "buildReasons",
      "buildTitle",
      buildReasonsFunction(
        normalizedLocale,
      ),
    );

  /*
   * 5. Titres.
   */
  localized =
    replaceFunction(
      localized,
      "buildTitle",
      "buildDescription",
      buildTitleFunction(
        normalizedLocale,
      ),
    );

  /*
   * 6. Descriptions.
   */
  localized =
    replaceFunction(
      localized,
      "buildDescription",
      "buildAdvice",
      buildDescriptionFunction(
        normalizedLocale,
      ),
    );

  /*
   * 7. Conseils.
   */
  localized =
    replaceFunction(
      localized,
      "buildAdvice",
      "convertToDominantPlanet",
      buildAdviceFunction(
        normalizedLocale,
      ),
    );

  return localized;
}
