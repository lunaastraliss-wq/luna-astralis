import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type LocaleTranslations = {
  text: Record<string, string>;
  planets: Record<
    "Sun" | "Moon" | "Mercury" | "Venus" | "Mars",
    string
  >;
  signs: Record<string, string>;
  profileSummary: {
    start: string;
    middleMercury: string;
    middleVenus: string;
    endMars: string;
  };
};

const TRANSLATIONS: Record<
  NonFrenchLocale,
  LocaleTranslations
> = {
  en: {
    text: {
      "Non précisé": "Not specified",
      "Identité, vitalité et expression personnelle.":
        "Identity, vitality, and personal expression.",
      "Émotions, besoins affectifs et sécurité intérieure.":
        "Emotions, emotional needs, and inner security.",
      "Communication, pensée et compréhension.":
        "Communication, thought, and understanding.",
      "Amour, séduction, valeurs et harmonie.":
        "Love, attraction, values, and harmony.",
      "Désir, action, énergie et affirmation.":
        "Desire, action, energy, and self-assertion.",
      "Les principales énergies qui façonnent son expression relationnelle.":
        "The main energies that shape one's relational expression.",
      "Placements personnels":
        "Personal placements",
      "Portrait relationnel":
        "Relational portrait",
      "Portraits astrologiques":
        "Astrological portraits",
      "Vos deux profils relationnels":
        "Your two relational profiles",
      "Avant d’étudier vos interactions, découvrons les énergies personnelles que chacun apporte naturellement dans la relation.":
        "Before studying your interactions, let's discover the personal energies that each brings naturally into the relationship.",
      "Premier profil":
        "First profile",
      "Première personne":
        "First person",
      "Deuxième profil":
        "Second profile",
      "Deuxième personne":
        "Second person",
      "La compatibilité commence par la différence":
        "Compatibility begins with difference",
      "Deux personnes n’ont pas besoin d’être identiques pour créer une relation harmonieuse. Les ressemblances facilitent souvent la compréhension, tandis que les différences peuvent apporter de la complémentarité, du mouvement et de nouvelles possibilités d’évolution.":
        "Two people do not need to be identical to create a harmonious relationship. Similarities often facilitate understanding, while differences can bring complementarity, movement, and new possibilities for growth.",
      "Trois clés pour comprendre la suite":
        "Three keys to understanding what comes next",
      "Se reconnaître":
        "Recognizing each other",
      "Les ressemblances créent un sentiment de familiarité.":
        "Similarities create a sense of familiarity.",
      "Se compléter":
        "Completing each other",
      "Les différences peuvent équilibrer les forces de chacun.":
        "Differences can balance each person's strengths.",
      "Évoluer ensemble":
        "Evolving together",
      "Les défis révèlent les zones de croissance de la relation.":
        "Challenges reveal the relationship's areas for growth.",
      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Synastry report",
    },
    planets: {
      Sun: "Sun",
      Moon: "Moon",
      Mercury: "Mercury",
      Venus: "Venus",
      Mars: "Mars",
    },
    signs: {
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
    profileSummary: {
      start: "With a Sun in {sun} and a Moon in {moon}, this personality combines a distinctive way of asserting itself and experiencing emotions. ",
      middleMercury: "Mercury in {mercury} influences the way this person communicates, while ",
      middleVenus: "Venus in {venus} describes their emotional language. ",
      endMars: "Mars in {mars} reveals how they act, desire, and defend their needs.",
    },
  },

  es: {
    text: {
      "Non précisé": "No especificado",
      "Identité, vitalité et expression personnelle.":
        "Identidad, vitalidad y expresión personal.",
      "Émotions, besoins affectifs et sécurité intérieure.":
        "Emociones, necesidades afectivas y seguridad interior.",
      "Communication, pensée et compréhension.":
        "Comunicación, pensamiento y comprensión.",
      "Amour, séduction, valeurs et harmonie.":
        "Amor, seducción, valores y armonía.",
      "Désir, action, énergie et affirmation.":
        "Deseo, acción, energía y afirmación personal.",
      "Les principales énergies qui façonnent son expression relationnelle.":
        "Las principales energías que moldean su expresión relacional.",
      "Placements personnels":
        "Posiciones personales",
      "Portrait relationnel":
        "Perfil relacional",
      "Portraits astrologiques":
        "Perfiles astrológicos",
      "Vos deux profils relationnels":
        "Sus dos perfiles relacionales",
      "Avant d’étudier vos interactions, découvrons les énergies personnelles que chacun apporte naturellement dans la relation.":
        "Antes de estudiar sus interacciones, descubramos las energías personales que cada uno aporta naturalmente a la relación.",
      "Premier profil":
        "Primer perfil",
      "Première personne":
        "Primera persona",
      "Deuxième profil":
        "Segundo perfil",
      "Deuxième personne":
        "Segunda persona",
      "La compatibilité commence par la différence":
        "La compatibilidad comienza con la diferencia",
      "Deux personnes n’ont pas besoin d’être identiques pour créer une relation harmonieuse. Les ressemblances facilitent souvent la compréhension, tandis que les différences peuvent apporter de la complémentarité, du mouvement et de nouvelles possibilités d’évolution.":
        "Dos personas no necesitan ser idénticas para crear una relación armoniosa. Las similitudes suelen facilitar la comprensión, mientras que las diferencias pueden aportar complementariedad, movimiento y nuevas posibilidades de evolución.",
      "Trois clés pour comprendre la suite":
        "Tres claves para comprender lo que sigue",
      "Se reconnaître":
        "Reconocerse",
      "Les ressemblances créent un sentiment de familiarité.":
        "Las similitudes crean una sensación de familiaridad.",
      "Se compléter":
        "Complementarse",
      "Les différences peuvent équilibrer les forces de chacun.":
        "Las diferencias pueden equilibrar las fortalezas de cada uno.",
      "Évoluer ensemble":
        "Evolucionar juntos",
      "Les défis révèlent les zones de croissance de la relation.":
        "Los desafíos revelan las áreas de crecimiento de la relación.",
      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Informe de sinastría",
    },
    planets: {
      Sun: "Sol",
      Moon: "Luna",
      Mercury: "Mercurio",
      Venus: "Venus",
      Mars: "Marte",
    },
    signs: {
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
    },
    profileSummary: {
      start: "Con un Sol en {sun} y una Luna en {moon}, esta personalidad combina una manera particular de afirmarse y vivir sus emociones. ",
      middleMercury: "Mercurio en {mercury} influye en su forma de comunicarse, mientras que ",
      middleVenus: "Venus en {venus} describe su lenguaje afectivo. ",
      endMars: "Marte en {mars} revela su manera de actuar, desear y defender sus necesidades.",
    },
  },

  de: {
    text: {
      "Non précisé": "Nicht angegeben",
      "Identité, vitalité et expression personnelle.":
        "Identität, Vitalität und persönlicher Ausdruck.",
      "Émotions, besoins affectifs et sécurité intérieure.":
        "Emotionen, emotionale Bedürfnisse und innere Sicherheit.",
      "Communication, pensée et compréhension.":
        "Kommunikation, Denken und Verständnis.",
      "Amour, séduction, valeurs et harmonie.":
        "Liebe, Anziehung, Werte und Harmonie.",
      "Désir, action, énergie et affirmation.":
        "Begehren, Handeln, Energie und Selbstbehauptung.",
      "Les principales énergies qui façonnent son expression relationnelle.":
        "Die wichtigsten Energien, die den Beziehungsausdruck prägen.",
      "Placements personnels":
        "Persönliche Positionen",
      "Portrait relationnel":
        "Beziehungsprofil",
      "Portraits astrologiques":
        "Astrologische Profile",
      "Vos deux profils relationnels":
        "Ihre beiden Beziehungsprofile",
      "Avant d’étudier vos interactions, découvrons les énergies personnelles que chacun apporte naturellement dans la relation.":
        "Bevor wir Ihre Wechselwirkungen untersuchen, betrachten wir die persönlichen Energien, die jeder von Ihnen auf natürliche Weise in die Beziehung einbringt.",
      "Premier profil":
        "Erstes Profil",
      "Première personne":
        "Erste Person",
      "Deuxième profil":
        "Zweites Profil",
      "Deuxième personne":
        "Zweite Person",
      "La compatibilité commence par la différence":
        "Kompatibilität beginnt mit Unterschieden",
      "Deux personnes n’ont pas besoin d’être identiques pour créer une relation harmonieuse. Les ressemblances facilitent souvent la compréhension, tandis que les différences peuvent apporter de la complémentarité, du mouvement et de nouvelles possibilités d’évolution.":
        "Zwei Menschen müssen nicht identisch sein, um eine harmonische Beziehung zu gestalten. Gemeinsamkeiten erleichtern oft das Verständnis, während Unterschiede Ergänzung, Bewegung und neue Entwicklungsmöglichkeiten bringen können.",
      "Trois clés pour comprendre la suite":
        "Drei Schlüssel zum Verständnis des Folgenden",
      "Se reconnaître":
        "Einander erkennen",
      "Les ressemblances créent un sentiment de familiarité.":
        "Gemeinsamkeiten schaffen ein Gefühl von Vertrautheit.",
      "Se compléter":
        "Einander ergänzen",
      "Les différences peuvent équilibrer les forces de chacun.":
        "Unterschiede können die Stärken beider ausgleichen.",
      "Évoluer ensemble":
        "Gemeinsam wachsen",
      "Les défis révèlent les zones de croissance de la relation.":
        "Herausforderungen zeigen die Wachstumsbereiche der Beziehung.",
      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Synastrie-Bericht",
    },
    planets: {
      Sun: "Sonne",
      Moon: "Mond",
      Mercury: "Merkur",
      Venus: "Venus",
      Mars: "Mars",
    },
    signs: {
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
    },
    profileSummary: {
      start: "Mit einer Sonne im Zeichen {sun} und einem Mond im Zeichen {moon} verbindet diese Persönlichkeit eine besondere Art der Selbstbehauptung mit ihrer emotionalen Erlebnisweise. ",
      middleMercury: "Merkur in {mercury} beeinflusst ihre Art zu kommunizieren, während ",
      middleVenus: "Venus in {venus} ihre Sprache der Zuneigung beschreibt. ",
      endMars: "Mars in {mars} zeigt, wie sie handelt, begehrt und ihre Bedürfnisse vertritt.",
    },
  },

  it: {
    text: {
      "Non précisé": "Non specificato",
      "Identité, vitalité et expression personnelle.":
        "Identità, vitalità ed espressione personale.",
      "Émotions, besoins affectifs et sécurité intérieure.":
        "Emozioni, bisogni affettivi e sicurezza interiore.",
      "Communication, pensée et compréhension.":
        "Comunicazione, pensiero e comprensione.",
      "Amour, séduction, valeurs et harmonie.":
        "Amore, seduzione, valori e armonia.",
      "Désir, action, énergie et affirmation.":
        "Desiderio, azione, energia e affermazione personale.",
      "Les principales énergies qui façonnent son expression relationnelle.":
        "Le principali energie che plasmano la sua espressione relazionale.",
      "Placements personnels":
        "Posizioni personali",
      "Portrait relationnel":
        "Profilo relazionale",
      "Portraits astrologiques":
        "Profili astrologici",
      "Vos deux profils relationnels":
        "I vostri due profili relazionali",
      "Avant d’étudier vos interactions, découvrons les énergies personnelles que chacun apporte naturellement dans la relation.":
        "Prima di studiare le vostre interazioni, scopriamo le energie personali che ciascuno porta naturalmente nella relazione.",
      "Premier profil":
        "Primo profilo",
      "Première personne":
        "Prima persona",
      "Deuxième profil":
        "Secondo profilo",
      "Deuxième personne":
        "Seconda persona",
      "La compatibilité commence par la différence":
        "La compatibilità comincia dalla differenza",
      "Deux personnes n’ont pas besoin d’être identiques pour créer une relation harmonieuse. Les ressemblances facilitent souvent la compréhension, tandis que les différences peuvent apporter de la complémentarité, du mouvement et de nouvelles possibilités d’évolution.":
        "Due persone non devono essere identiche per creare una relazione armoniosa. Le somiglianze spesso facilitano la comprensione, mentre le differenze possono offrire complementarità, movimento e nuove possibilità di crescita.",
      "Trois clés pour comprendre la suite":
        "Tre chiavi per comprendere ciò che segue",
      "Se reconnaître":
        "Riconoscersi",
      "Les ressemblances créent un sentiment de familiarité.":
        "Le somiglianze creano un senso di familiarità.",
      "Se compléter":
        "Completarsi",
      "Les différences peuvent équilibrer les forces de chacun.":
        "Le differenze possono equilibrare i punti di forza di ciascuno.",
      "Évoluer ensemble":
        "Crescere insieme",
      "Les défis révèlent les zones de croissance de la relation.":
        "Le sfide rivelano le aree di crescita della relazione.",
      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Rapporto di sinastria",
    },
    planets: {
      Sun: "Sole",
      Moon: "Luna",
      Mercury: "Mercurio",
      Venus: "Venere",
      Mars: "Marte",
    },
    signs: {
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
    },
    profileSummary: {
      start: "Con un Sole in {sun} e una Luna in {moon}, questa personalità combina un modo particolare di affermarsi e di vivere le proprie emozioni. ",
      middleMercury: "Mercurio in {mercury} influenza il suo modo di comunicare, mentre ",
      middleVenus: "Venere in {venus} descrive il suo linguaggio affettivo. ",
      endMars: "Marte in {mars} rivela il suo modo di agire, desiderare e difendere i propri bisogni.",
    },
  },

  pt: {
    text: {
      "Non précisé": "Não especificado",
      "Identité, vitalité et expression personnelle.":
        "Identidade, vitalidade e expressão pessoal.",
      "Émotions, besoins affectifs et sécurité intérieure.":
        "Emoções, necessidades afetivas e segurança interior.",
      "Communication, pensée et compréhension.":
        "Comunicação, pensamento e compreensão.",
      "Amour, séduction, valeurs et harmonie.":
        "Amor, sedução, valores e harmonia.",
      "Désir, action, énergie et affirmation.":
        "Desejo, ação, energia e afirmação pessoal.",
      "Les principales énergies qui façonnent son expression relationnelle.":
        "As principais energias que moldam a sua expressão relacional.",
      "Placements personnels":
        "Posições pessoais",
      "Portrait relationnel":
        "Perfil relacional",
      "Portraits astrologiques":
        "Perfis astrológicos",
      "Vos deux profils relationnels":
        "Os seus dois perfis relacionais",
      "Avant d’étudier vos interactions, découvrons les énergies personnelles que chacun apporte naturellement dans la relation.":
        "Antes de estudar as suas interações, vamos descobrir as energias pessoais que cada um traz naturalmente para a relação.",
      "Premier profil":
        "Primeiro perfil",
      "Première personne":
        "Primeira pessoa",
      "Deuxième profil":
        "Segundo perfil",
      "Deuxième personne":
        "Segunda pessoa",
      "La compatibilité commence par la différence":
        "A compatibilidade começa pela diferença",
      "Deux personnes n’ont pas besoin d’être identiques pour créer une relation harmonieuse. Les ressemblances facilitent souvent la compréhension, tandis que les différences peuvent apporter de la complémentarité, du mouvement et de nouvelles possibilités d’évolution.":
        "Duas pessoas não precisam ser idênticas para criar uma relação harmoniosa. As semelhanças muitas vezes facilitam a compreensão, enquanto as diferenças podem trazer complementaridade, movimento e novas possibilidades de evolução.",
      "Trois clés pour comprendre la suite":
        "Três chaves para compreender o que vem a seguir",
      "Se reconnaître":
        "Reconhecer-se mutuamente",
      "Les ressemblances créent un sentiment de familiarité.":
        "As semelhanças criam uma sensação de familiaridade.",
      "Se compléter":
        "Complementar-se",
      "Les différences peuvent équilibrer les forces de chacun.":
        "As diferenças podem equilibrar os pontos fortes de cada um.",
      "Évoluer ensemble":
        "Evoluir juntos",
      "Les défis révèlent les zones de croissance de la relation.":
        "Os desafios revelam as áreas de crescimento da relação.",
      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Relatório de sinastria",
    },
    planets: {
      Sun: "Sol",
      Moon: "Lua",
      Mercury: "Mercúrio",
      Venus: "Vênus",
      Mars: "Marte",
    },
    signs: {
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
    },
    profileSummary: {
      start: "Com um Sol em {sun} e uma Lua em {moon}, esta personalidade combina uma maneira particular de se afirmar e de viver as suas emoções. ",
      middleMercury: "Mercúrio em {mercury} influencia a sua forma de comunicar, enquanto ",
      middleVenus: "Vênus em {venus} descreve a sua linguagem afetiva. ",
      endMars: "Marte em {mars} revela a sua maneira de agir, desejar e defender as suas necessidades.",
    },
  },
};

type Replacement = {
  start: number;
  end: number;
  value: string;
};

function normalizeVisibleText(
  value: string,
): string {
  return value
    .replace(/\s+/g, " ")
    .trim();
}

function applyReplacements(
  source: string,
  replacements: Replacement[],
): string {
  const sorted =
    [...replacements].sort(
      (a, b) => b.start - a.start,
    );

  let output = source;

  for (const replacement of sorted) {
    output =
      output.slice(0, replacement.start) +
      replacement.value +
      output.slice(replacement.end);
  }

  return output;
}

function localizeCompleteLiterals(
  source: string,
  translations: Record<string, string>,
): string {
  const sourceFile =
    ts.createSourceFile(
      "CompatibilityProfiles.tsx",
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );

  const replacements:
    Replacement[] = [];

  const visit = (
    node: ts.Node,
  ): void => {
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(node)
    ) {
      const original =
        normalizeVisibleText(node.text);

      const translated =
        translations[original];

      if (
        typeof translated === "string" &&
        translated !== original
      ) {
        replacements.push({
          start: node.getStart(sourceFile),
          end: node.getEnd(),
          value: JSON.stringify(translated),
        });
      }
    }

    if (ts.isJsxText(node)) {
      const original =
        normalizeVisibleText(
          node.getText(sourceFile),
        );

      const translated =
        translations[original];

      if (
        typeof translated === "string" &&
        translated !== original
      ) {
        replacements.push({
          start: node.getStart(sourceFile),
          end: node.getEnd(),
          value: `{${JSON.stringify(
            translated,
          )}}`,
        });
      }
    }

    ts.forEachChild(
      node,
      visit,
    );
  };

  visit(sourceFile);

  return applyReplacements(
    source,
    replacements,
  );
}

function stringifyRecord(
  value: Record<string, string>,
): string {
  return JSON.stringify(
    value,
    null,
    2,
  );
}

function buildInjectedHelpers(
  localeData: LocaleTranslations,
): string {
  const planets =
    stringifyRecord(
      localeData.planets,
    );

  const signs =
    stringifyRecord(
      localeData.signs,
    );

  const summary =
    JSON.stringify(
      localeData.profileSummary,
      null,
      2,
    );

  return `
const __PROFILE_PLANET_NAMES = ${planets} as Record<PlanetName, string>;

const __PROFILE_SIGN_NAMES = ${signs} as Record<string, string>;

const __PROFILE_SUMMARY = ${summary};

function localizeProfilePlanetName(
  planetName: PlanetName,
): string {
  return (
    __PROFILE_PLANET_NAMES[planetName] ??
    planetName
  );
}

function localizeProfileSign(
  sign: string,
): string {
  const safeSign =
    typeof sign === "string"
      ? sign.trim()
      : "";

  if (!safeSign) {
    return safeSign;
  }

  return (
    __PROFILE_SIGN_NAMES[safeSign] ??
    safeSign
  );
}

function buildLocalizedProfileSummary(
  person: SafeCompatibilityPerson,
): string {
  const sunSign =
    localizeProfileSign(
      getPlanetSign(person, "Sun"),
    );

  const moonSign =
    localizeProfileSign(
      getPlanetSign(person, "Moon"),
    );

  const mercurySign =
    localizeProfileSign(
      getPlanetSign(person, "Mercury"),
    );

  const venusSign =
    localizeProfileSign(
      getPlanetSign(person, "Venus"),
    );

  const marsSign =
    localizeProfileSign(
      getPlanetSign(person, "Mars"),
    );

  return (
    __PROFILE_SUMMARY.start
      .replace("{sun}", sunSign)
      .replace("{moon}", moonSign) +
    __PROFILE_SUMMARY.middleMercury
      .replace("{mercury}", mercurySign) +
    __PROFILE_SUMMARY.middleVenus
      .replace("{venus}", venusSign) +
    __PROFILE_SUMMARY.endMars
      .replace("{mars}", marsSign)
  );
}
`;
}

function injectHelpers(
  source: string,
  localeData: LocaleTranslations,
): string {
  const marker =
    "function getProfileSummary(";

  if (!source.includes(marker)) {
    return source;
  }

  const helpers =
    buildInjectedHelpers(
      localeData,
    );

  return source.replace(
    marker,
    `${helpers}\n${marker}`,
  );
}

function replaceTargetedCode(
  source: string,
): string {
  let localized = source;

  /*
   * Nom de planète visible.
   *
   * La valeur technique planetName reste en anglais.
   * Seul le libellé affiché est localisé.
   */
  localized =
    localized.replace(
      /const translatedPlanet\s*=\s*translateCompatibilityPlanet\(\s*planetName\s*,?\s*\);/m,
      `const translatedPlanet =
    localizeProfilePlanetName(
      planetName,
    );`,
    );

  /*
   * Signe visible.
   */
  localized =
    localized.replace(
      /const sign\s*=\s*getPlanetSign\(\s*person,\s*planetName,\s*\);/m,
      `const sign =
    localizeProfileSign(
      getPlanetSign(
        person,
        planetName,
      ),
    );`,
    );

  /*
   * Résumé relationnel dynamique.
   */
  localized =
    localized.replace(
      /\{getProfileSummary\(person\)\}/g,
      "{buildLocalizedProfileSummary(person)}",
    );

  return localized;
}

export function localizeCompatibilityProfiles(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const localeData =
    TRANSLATIONS[
      locale as NonFrenchLocale
    ];

  if (!localeData) {
    return source;
  }

  let localized =
    localizeCompleteLiterals(
      source,
      localeData.text,
    );

  localized =
    injectHelpers(
      localized,
      localeData,
    );

  localized =
    replaceTargetedCode(
      localized,
    );

  return localized;
}
