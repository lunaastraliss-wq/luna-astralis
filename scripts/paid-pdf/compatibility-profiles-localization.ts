import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type LocaleData = {
  text: Record<string, string>;

  signs: Record<string, string>;

  planets: Record<string, string>;

  planetMeanings: Record<string, string>;

  inWord: string;

  profileSummary: string;
};

const TRANSLATIONS: Record<
  NonFrenchLocale,
  LocaleData
> = {
  en: {
    text: {
      "Première personne":
        "First person",

      "Deuxième personne":
        "Second person",

      "Portraits astrologiques":
        "Astrological portraits",

      "Vos deux profils relationnels":
        "Your two relationship profiles",

      "Avant d’étudier vos interactions, découvrons les énergies personnelles que chacun apporte naturellement dans la relation.":
        "Before exploring your interactions, let us discover the personal energies each of you naturally brings into the relationship.",

      "Premier profil":
        "First profile",

      "Deuxième profil":
        "Second profile",

      "Les principales énergies qui façonnent son expression relationnelle.":
        "The main energies shaping this person's way of relating.",

      "Placements personnels":
        "Personal placements",

      "Portrait relationnel":
        "Relationship profile",

      "La compatibilité commence par la différence":
        "Compatibility begins with difference",

      "Deux personnes n’ont pas besoin d’être identiques pour créer une relation harmonieuse. Les ressemblances facilitent souvent la compréhension, tandis que les différences peuvent apporter de la complémentarité, du mouvement et de nouvelles possibilités d’évolution.":
        "Two people do not need to be identical to create a harmonious relationship. Similarities often make understanding easier, while differences can bring complementarity, movement, and new opportunities for growth.",

      "Trois clés pour comprendre la suite":
        "Three keys to understanding what follows",

      "Se reconnaître":
        "Recognize each other",

      "Les ressemblances créent un sentiment de familiarité.":
        "Similarities create a feeling of familiarity.",

      "Se compléter":
        "Complement each other",

      "Les différences peuvent équilibrer les forces de chacun.":
        "Differences can balance each person's strengths.",

      "Évoluer ensemble":
        "Grow together",

      "Les défis révèlent les zones de croissance de la relation.":
        "Challenges reveal the areas where the relationship can grow.",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Synastry Report",

      "Non précisé":
        "Not specified",
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
      "Non précisé": "Not specified",
    },

    planets: {
      Soleil: "Sun",
      Lune: "Moon",
      Mercure: "Mercury",
      Vénus: "Venus",
      Mars: "Mars",
    },

    planetMeanings: {
      "Identité, vitalité et expression personnelle.":
        "Identity, vitality, and personal expression.",

      "Émotions, besoins affectifs et sécurité intérieure.":
        "Emotions, emotional needs, and inner security.",

      "Communication, pensée et compréhension.":
        "Communication, thought, and understanding.",

      "Amour, séduction, valeurs et harmonie.":
        "Love, attraction, values, and harmony.",

      "Désir, action, énergie et affirmation.":
        "Desire, action, energy, and assertiveness.",
    },

    inWord: "in",

    profileSummary:
      "With a Sun in {sun} and a Moon in {moon}, this personality combines a distinctive way of asserting itself with a particular emotional nature. Mercury in {mercury} influences communication, while Venus in {venus} describes the person's emotional language. Mars in {mars} reveals how this person acts, desires, and defends personal needs.",
  },

  es: {
    text: {
      "Première personne":
        "Primera persona",

      "Deuxième personne":
        "Segunda persona",

      "Portraits astrologiques":
        "Retratos astrológicos",

      "Vos deux profils relationnels":
        "Sus dos perfiles relacionales",

      "Avant d’étudier vos interactions, découvrons les énergies personnelles que chacun apporte naturellement dans la relation.":
        "Antes de estudiar sus interacciones, descubramos las energías personales que cada uno aporta naturalmente a la relación.",

      "Premier profil":
        "Primer perfil",

      "Deuxième profil":
        "Segundo perfil",

      "Les principales énergies qui façonnent son expression relationnelle.":
        "Las principales energías que moldean su forma de relacionarse.",

      "Placements personnels":
        "Posiciones personales",

      "Portrait relationnel":
        "Retrato relacional",

      "La compatibilité commence par la différence":
        "La compatibilidad comienza con la diferencia",

      "Deux personnes n’ont pas besoin d’être identiques pour créer une relation harmonieuse. Les ressemblances facilitent souvent la compréhension, tandis que les différences peuvent apporter de la complémentarité, du mouvement et de nouvelles possibilités d’évolution.":
        "Dos personas no necesitan ser idénticas para crear una relación armoniosa. Las semejanzas suelen facilitar la comprensión, mientras que las diferencias pueden aportar complementariedad, movimiento y nuevas posibilidades de evolución.",

      "Trois clés pour comprendre la suite":
        "Tres claves para comprender lo que sigue",

      "Se reconnaître":
        "Reconocerse",

      "Les ressemblances créent un sentiment de familiarité.":
        "Las semejanzas crean una sensación de familiaridad.",

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

      "Non précisé":
        "No especificado",
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
      "Non précisé": "No especificado",
    },

    planets: {
      Soleil: "Sol",
      Lune: "Luna",
      Mercure: "Mercurio",
      Vénus: "Venus",
      Mars: "Marte",
    },

    planetMeanings: {
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
    },

    inWord: "en",

    profileSummary:
      "Con un Sol en {sun} y una Luna en {moon}, esta personalidad combina una forma particular de afirmarse con una manera propia de vivir sus emociones. Mercurio en {mercury} influye en su forma de comunicarse, mientras que Venus en {venus} describe su lenguaje afectivo. Marte en {mars} revela su manera de actuar, desear y defender sus necesidades.",
  },

  de: {
    text: {
      "Première personne":
        "Erste Person",

      "Deuxième personne":
        "Zweite Person",

      "Portraits astrologiques":
        "Astrologische Porträts",

      "Vos deux profils relationnels":
        "Ihre beiden Beziehungsprofile",

      "Avant d’étudier vos interactions, découvrons les énergies personnelles que chacun apporte naturellement dans la relation.":
        "Bevor wir Ihre Wechselwirkungen betrachten, entdecken wir die persönlichen Energien, die jeder von Ihnen auf natürliche Weise in die Beziehung einbringt.",

      "Premier profil":
        "Erstes Profil",

      "Deuxième profil":
        "Zweites Profil",

      "Les principales énergies qui façonnent son expression relationnelle.":
        "Die wichtigsten Energien, die den persönlichen Beziehungsstil prägen.",

      "Placements personnels":
        "Persönliche Positionen",

      "Portrait relationnel":
        "Beziehungsprofil",

      "La compatibilité commence par la différence":
        "Kompatibilität beginnt mit Unterschiedlichkeit",

      "Deux personnes n’ont pas besoin d’être identiques pour créer une relation harmonieuse. Les ressemblances facilitent souvent la compréhension, tandis que les différences peuvent apporter de la complémentarité, du mouvement et de nouvelles possibilités d’évolution.":
        "Zwei Menschen müssen nicht identisch sein, um eine harmonische Beziehung zu gestalten. Ähnlichkeiten erleichtern häufig das Verständnis, während Unterschiede Ergänzung, Bewegung und neue Entwicklungsmöglichkeiten bringen können.",

      "Trois clés pour comprendre la suite":
        "Drei Schlüssel zum Verständnis der weiteren Analyse",

      "Se reconnaître":
        "Sich wiedererkennen",

      "Les ressemblances créent un sentiment de familiarité.":
        "Ähnlichkeiten schaffen ein Gefühl von Vertrautheit.",

      "Se compléter":
        "Sich ergänzen",

      "Les différences peuvent équilibrer les forces de chacun.":
        "Unterschiede können die Stärken beider Personen ausgleichen.",

      "Évoluer ensemble":
        "Gemeinsam wachsen",

      "Les défis révèlent les zones de croissance de la relation.":
        "Herausforderungen zeigen die Wachstumsbereiche der Beziehung.",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Synastrie-Bericht",

      "Non précisé":
        "Nicht angegeben",
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
      "Non précisé": "Nicht angegeben",
    },

    planets: {
      Soleil: "Sonne",
      Lune: "Mond",
      Mercure: "Merkur",
      Vénus: "Venus",
      Mars: "Mars",
    },

    planetMeanings: {
      "Identité, vitalité et expression personnelle.":
        "Identität, Vitalität und persönlicher Ausdruck.",

      "Émotions, besoins affectifs et sécurité intérieure.":
        "Emotionen, emotionale Bedürfnisse und innere Sicherheit.",

      "Communication, pensée et compréhension.":
        "Kommunikation, Denken und Verständnis.",

      "Amour, séduction, valeurs et harmonie.":
        "Liebe, Anziehung, Werte und Harmonie.",

      "Désir, action, énergie et affirmation.":
        "Verlangen, Handlung, Energie und Durchsetzungskraft.",
    },

    inWord: "in",

    profileSummary:
      "Mit einer Sonne in {sun} und einem Mond in {moon} verbindet diese Persönlichkeit eine besondere Art der Selbstbehauptung mit einer individuellen emotionalen Ausdrucksweise. Merkur in {mercury} beeinflusst die Kommunikation, während Venus in {venus} die emotionale Sprache beschreibt. Mars in {mars} zeigt, wie diese Person handelt, begehrt und ihre Bedürfnisse verteidigt.",
  },

  it: {
    text: {
      "Première personne":
        "Prima persona",

      "Deuxième personne":
        "Seconda persona",

      "Portraits astrologiques":
        "Ritratti astrologici",

      "Vos deux profils relationnels":
        "I vostri due profili relazionali",

      "Avant d’étudier vos interactions, découvrons les énergies personnelles que chacun apporte naturellement dans la relation.":
        "Prima di studiare le vostre interazioni, scopriamo le energie personali che ciascuno porta naturalmente nella relazione.",

      "Premier profil":
        "Primo profilo",

      "Deuxième profil":
        "Secondo profilo",

      "Les principales énergies qui façonnent son expression relationnelle.":
        "Le principali energie che modellano il suo modo di vivere le relazioni.",

      "Placements personnels":
        "Posizioni personali",

      "Portrait relationnel":
        "Profilo relazionale",

      "La compatibilité commence par la différence":
        "La compatibilità comincia dalla differenza",

      "Deux personnes n’ont pas besoin d’être identiques pour créer une relation harmonieuse. Les ressemblances facilitent souvent la compréhension, tandis que les différences peuvent apporter de la complémentarité, du mouvement et de nouvelles possibilités d’évolution.":
        "Due persone non devono essere identiche per creare una relazione armoniosa. Le somiglianze facilitano spesso la comprensione, mentre le differenze possono portare complementarità, movimento e nuove possibilità di evoluzione.",

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
        "Evolvere insieme",

      "Les défis révèlent les zones de croissance de la relation.":
        "Le sfide rivelano le aree di crescita della relazione.",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Rapporto di sinastria",

      "Non précisé":
        "Non specificato",
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
      "Non précisé": "Non specificato",
    },

    planets: {
      Soleil: "Sole",
      Lune: "Luna",
      Mercure: "Mercurio",
      Vénus: "Venere",
      Mars: "Marte",
    },

    planetMeanings: {
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
    },

    inWord: "in",

    profileSummary:
      "Con un Sole in {sun} e una Luna in {moon}, questa personalità combina un modo particolare di affermarsi con una propria maniera di vivere le emozioni. Mercurio in {mercury} influenza il modo di comunicare, mentre Venere in {venus} descrive il linguaggio affettivo. Marte in {mars} rivela il modo di agire, desiderare e difendere i propri bisogni.",
  },

  pt: {
    text: {
      "Première personne":
        "Primeira pessoa",

      "Deuxième personne":
        "Segunda pessoa",

      "Portraits astrologiques":
        "Retratos astrológicos",

      "Vos deux profils relationnels":
        "Os seus dois perfis relacionais",

      "Avant d’étudier vos interactions, découvrons les énergies personnelles que chacun apporte naturellement dans la relation.":
        "Antes de estudarmos as suas interações, vamos descobrir as energias pessoais que cada pessoa traz naturalmente para a relação.",

      "Premier profil":
        "Primeiro perfil",

      "Deuxième profil":
        "Segundo perfil",

      "Les principales énergies qui façonnent son expression relationnelle.":
        "As principais energias que moldam a sua forma de se relacionar.",

      "Placements personnels":
        "Posições pessoais",

      "Portrait relationnel":
        "Perfil relacional",

      "La compatibilité commence par la différence":
        "A compatibilidade começa pela diferença",

      "Deux personnes n’ont pas besoin d’être identiques pour créer une relation harmonieuse. Les ressemblances facilitent souvent la compréhension, tandis que les différences peuvent apporter de la complémentarité, du mouvement et de nouvelles possibilités d’évolution.":
        "Duas pessoas não precisam de ser idênticas para criar uma relação harmoniosa. As semelhanças facilitam muitas vezes a compreensão, enquanto as diferenças podem trazer complementaridade, movimento e novas possibilidades de evolução.",

      "Trois clés pour comprendre la suite":
        "Três chaves para compreender o que vem a seguir",

      "Se reconnaître":
        "Reconhecer-se",

      "Les ressemblances créent un sentiment de familiarité.":
        "As semelhanças criam uma sensação de familiaridade.",

      "Se compléter":
        "Complementar-se",

      "Les différences peuvent équilibrer les forces de chacun.":
        "As diferenças podem equilibrar os pontos fortes de cada pessoa.",

      "Évoluer ensemble":
        "Evoluir juntos",

      "Les défis révèlent les zones de croissance de la relation.":
        "Os desafios revelam as áreas de crescimento da relação.",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Relatório de sinastria",

      "Non précisé":
        "Não especificado",
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
      "Non précisé": "Não especificado",
    },

    planets: {
      Soleil: "Sol",
      Lune: "Lua",
      Mercure: "Mercúrio",
      Vénus: "Vênus",
      Mars: "Marte",
    },

    planetMeanings: {
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
    },

    inWord: "em",

    profileSummary:
      "Com um Sol em {sun} e uma Lua em {moon}, esta personalidade combina uma forma particular de se afirmar com uma maneira própria de viver as emoções. Mercúrio em {mercury} influencia a sua forma de comunicar, enquanto Vênus em {venus} descreve a sua linguagem afetiva. Marte em {mars} revela a sua forma de agir, desejar e defender as suas necessidades.",
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
      (a, b) =>
        b.start - a.start,
    );

  let output = source;

  for (
    const replacement
    of sorted
  ) {
    output =
      output.slice(
        0,
        replacement.start,
      ) +
      replacement.value +
      output.slice(
        replacement.end,
      );
  }

  return output;
}

function localizeSafeLiterals(
  source: string,
  translations: Record<
    string,
    string
  >,
  planetMeanings: Record<
    string,
    string
  >,
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

  /*
   * Ces valeurs servent à la logique interne.
   * Elles doivent rester exactement telles quelles.
   */
  const technicalValues =
    new Set([
      "Sun",
      "Moon",
      "Mercury",
      "Venus",
      "Mars",

      "sun",
      "moon",
      "mercury",
      "venus",
      "mars",

      "A4",
    ]);

  const visit = (
    node: ts.Node,
  ): void => {
    /*
     * Texte JSX visible.
     */
    if (
      ts.isJsxText(node)
    ) {
      const original =
        normalizeVisibleText(
          node.getText(
            sourceFile,
          ),
        );

      const translated =
        translations[original];

      if (
        translated &&
        translated !== original
      ) {
        replacements.push({
          start:
            node.getStart(
              sourceFile,
            ),

          end:
            node.getEnd(),

          value:
            `{${JSON.stringify(
              translated,
            )}}`,
        });
      }
    }

    /*
     * String literals.
     */
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(
        node,
      )
    ) {
      if (
        technicalValues.has(
          node.text,
        )
      ) {
        ts.forEachChild(
          node,
          visit,
        );

        return;
      }

      const exact =
        node.text;

      const normalized =
        normalizeVisibleText(
          exact,
        );

      const translated =
        planetMeanings[exact] ??
        translations[exact] ??
        translations[normalized];

      if (
        translated &&
        translated !== exact
      ) {
        replacements.push({
          start:
            node.getStart(
              sourceFile,
            ),

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
  };

  visit(sourceFile);

  return applyReplacements(
    source,
    replacements,
  );
}

function buildHelpers(
  data: LocaleData,
): string {
  return `
const __PROFILES_SIGNS =
  ${JSON.stringify(
    data.signs,
    null,
    2,
  )} as Record<string, string>;

const __PROFILES_PLANETS =
  ${JSON.stringify(
    data.planets,
    null,
    2,
  )} as Record<string, string>;

const __PROFILES_IN_WORD =
  ${JSON.stringify(
    data.inWord,
  )};

const __PROFILES_SUMMARY =
  ${JSON.stringify(
    data.profileSummary,
  )};

function localizeProfileSign(
  value: string,
): string {
  return (
    __PROFILES_SIGNS[value] ??
    value
  );
}

function localizeProfilePlanet(
  value: string,
): string {
  return (
    __PROFILES_PLANETS[value] ??
    value
  );
}

function buildLocalizedProfileSummary(
  person: SafeCompatibilityPerson,
): string {
  const sunSign =
    getPlanetSign(
      person,
      "Sun",
    );

  const moonSign =
    getPlanetSign(
      person,
      "Moon",
    );

  const mercurySign =
    getPlanetSign(
      person,
      "Mercury",
    );

  const venusSign =
    getPlanetSign(
      person,
      "Venus",
    );

  const marsSign =
    getPlanetSign(
      person,
      "Mars",
    );

  return __PROFILES_SUMMARY
    .replace(
      "{sun}",
      localizeProfileSign(
        sunSign,
      ),
    )
    .replace(
      "{moon}",
      localizeProfileSign(
        moonSign,
      ),
    )
    .replace(
      "{mercury}",
      localizeProfileSign(
        mercurySign,
      ),
    )
    .replace(
      "{venus}",
      localizeProfileSign(
        venusSign,
      ),
    )
    .replace(
      "{mars}",
      localizeProfileSign(
        marsSign,
      ),
    );
}
`;
}

function injectHelpers(
  source: string,
  data: LocaleData,
): string {
  const marker =
    "function getPersonName(";

  if (
    !source.includes(
      marker,
    )
  ) {
    return source;
  }

  return source.replace(
    marker,
    `${buildHelpers(
      data,
    )}\n${marker}`,
  );
}

function replaceDynamicDisplay(
  source: string,
): string {
  let output = source;

  /*
   * Le nom traduit de la planète est déjà
   * calculé dans translatedPlanet.
   * On le relocalise au moment de l'affichage.
   */
  output =
    output.replace(
      /\{translatedPlanet\}/g,
      "{localizeProfilePlanet(translatedPlanet)}",
    );

  /*
   * Ligne :
   * Mercure en Gémeaux
   * Venus in Libra
   * etc.
   */
  output =
    output.replace(
      /\{translatedPlanet\} en \{sign\}/g,
      `{localizeProfilePlanet(
            translatedPlanet,
          )}{" "}
          {__PROFILES_IN_WORD}{" "}
          {localizeProfileSign(
            sign,
          )}`,
    );

  /*
   * Dans le cas où le premier remplacement
   * ci-dessus est déjà passé avant celui-ci.
   */
  output =
    output.replace(
      /\{localizeProfilePlanet\(translatedPlanet\)\} en \{sign\}/g,
      `{localizeProfilePlanet(
            translatedPlanet,
          )}{" "}
          {__PROFILES_IN_WORD}{" "}
          {localizeProfileSign(
            sign,
          )}`,
    );

  /*
   * Résumé dynamique complet.
   */
  output =
    output.replace(
      /\{getProfileSummary\(person\)\}/g,
      "{buildLocalizedProfileSummary(person)}",
    );

  return output;
}

export function localizeCompatibilityProfiles(
  source: string,
  locale: PaidPdfLocale,
): string {
  /*
   * Le français reste le fichier original.
   */
  if (
    locale === "fr"
  ) {
    return source;
  }

  const data =
    TRANSLATIONS[
      locale as NonFrenchLocale
    ];

  if (!data) {
    return source;
  }

  /*
   * 1.
   * Textes fixes et significations
   * des planètes.
   */
  let localized =
    localizeSafeLiterals(
      source,
      data.text,
      data.planetMeanings,
    );

  /*
   * 2.
   * Helpers pour signes,
   * planètes et résumé dynamique.
   */
  localized =
    injectHelpers(
      localized,
      data,
    );

  /*
   * 3.
   * Valeurs dynamiques visibles.
   */
  localized =
    replaceDynamicDisplay(
      localized,
    );

  return localized;
}
