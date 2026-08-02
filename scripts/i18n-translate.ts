import fs from "node:fs";
import path from "node:path";
import OpenAI from "openai";

/*
|--------------------------------------------------------------------------
| i18n-translate V4 — Luna Astralis
|--------------------------------------------------------------------------
|
| Traduit automatiquement les dictionnaires français vers :
| - anglais
| - espagnol
| - allemand
| - italien
| - portugais brésilien
|
| Fonctions :
| - mémoire de traduction persistante;
| - déduplication des textes identiques;
| - glossaire astrologique cohérent;
| - protection des variables, liens, courriels et balises HTML;
| - conservation des traductions existantes;
| - sauvegarde progressive;
| - sélection par langue et catégorie.
|
| Exemples :
|
| npm run i18n:translate
| npm run i18n:translate -- --locale=en
| npm run i18n:translate -- --locale=pt --category=lib
| npm run i18n:translate -- --category=component
| npm run i18n:translate -- --force
|
*/

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/

const PROJECT_ROOT = process.cwd();

const SOURCE_ROOT = path.join(
  PROJECT_ROOT,
  "i18n",
  "migrated",
  "fr",
);

const MIGRATED_ROOT = path.join(
  PROJECT_ROOT,
  "i18n",
  "migrated",
);

const MEMORY_ROOT = path.join(
  PROJECT_ROOT,
  "i18n",
  "translation-memory",
);

const TARGET_LOCALES = {
  en: "English",
  es: "Spanish",
  de: "German",
  it: "Italian",
  pt: "Brazilian Portuguese",
} as const;

type TargetLocale = keyof typeof TARGET_LOCALES;
type Dictionary = Record<string, string>;
type TranslationMemory = Record<string, string>;

const VALID_CATEGORIES = [
  "lib",
  "component",
  "pdf",
  "app",
] as const;

type ValidCategory =
  (typeof VALID_CATEGORIES)[number];

const LOCALE_ARGUMENT = process.argv.find(
  (argument) =>
    argument.startsWith("--locale="),
);

const CATEGORY_ARGUMENT = process.argv.find(
  (argument) =>
    argument.startsWith("--category="),
);

const FORCE_MODE =
  process.argv.includes("--force");

const SELECTED_LOCALE = LOCALE_ARGUMENT
  ? LOCALE_ARGUMENT.split("=")[1]
  : null;

const SELECTED_CATEGORY = CATEGORY_ARGUMENT
  ? CATEGORY_ARGUMENT.split("=")[1]
  : null;

const BATCH_SIZE = 40;
const MAX_RETRIES = 3;

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/*
|--------------------------------------------------------------------------
| Glossaire astrologique
|--------------------------------------------------------------------------
*/

const ASTROLOGY_GLOSSARY: Record<
  TargetLocale,
  Record<string, string>
> = {
  en: {
    Ascendant: "Ascendant",
    Descendant: "Descendant",
    "Milieu du Ciel": "Midheaven",
    "Fond du Ciel": "Imum Coeli",
    "Nœud Nord": "North Node",
    "Nœud Sud": "South Node",
    "carte du ciel": "birth chart",
    "thème natal": "natal chart",
    "signe solaire": "Sun sign",
    "signe lunaire": "Moon sign",
    "maison astrologique": "astrological house",

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
  },

  es: {
    Ascendant: "Ascendente",
    Descendant: "Descendente",
    "Milieu du Ciel": "Medio Cielo",
    "Fond du Ciel": "Fondo del Cielo",
    "Nœud Nord": "Nodo Norte",
    "Nœud Sud": "Nodo Sur",
    "carte du ciel": "carta natal",
    "thème natal": "carta natal",
    "signe solaire": "signo solar",
    "signe lunaire": "signo lunar",
    "maison astrologique": "casa astrológica",

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
  },

  de: {
    Ascendant: "Aszendent",
    Descendant: "Deszendent",
    "Milieu du Ciel": "Medium Coeli",
    "Fond du Ciel": "Imum Coeli",
    "Nœud Nord": "Nördlicher Mondknoten",
    "Nœud Sud": "Südlicher Mondknoten",
    "carte du ciel": "Geburtshoroskop",
    "thème natal": "Geburtshoroskop",
    "signe solaire": "Sonnenzeichen",
    "signe lunaire": "Mondzeichen",
    "maison astrologique": "astrologisches Haus",

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
  },

  it: {
    Ascendant: "Ascendente",
    Descendant: "Discendente",
    "Milieu du Ciel": "Medio Cielo",
    "Fond du Ciel": "Fondo Cielo",
    "Nœud Nord": "Nodo Nord",
    "Nœud Sud": "Nodo Sud",
    "carte du ciel": "tema natale",
    "thème natal": "tema natale",
    "signe solaire": "segno solare",
    "signe lunaire": "segno lunare",
    "maison astrologique": "casa astrologica",

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
  },

  pt: {
    Ascendant: "Ascendente",
    Descendant: "Descendente",
    "Milieu du Ciel": "Meio do Céu",
    "Fond du Ciel": "Fundo do Céu",
    "Nœud Nord": "Nodo Norte",
    "Nœud Sud": "Nodo Sul",
    "carte du ciel": "mapa astral",
    "thème natal": "mapa natal",
    "signe solaire": "signo solar",
    "signe lunaire": "signo lunar",
    "maison astrologique": "casa astrológica",

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
  },
};

/*
|--------------------------------------------------------------------------
| Utilitaires fichiers
|--------------------------------------------------------------------------
*/

function normalizePath(
  value: string,
): string {
  return value.replace(/\\/g, "/");
}

function ensureDirectory(
  filePath: string,
): void {
  fs.mkdirSync(
    path.dirname(filePath),
    {
      recursive: true,
    },
  );
}

function readJson<T>(
  filePath: string,
): T {
  const raw = fs.readFileSync(
    filePath,
    "utf8",
  );

  return JSON.parse(raw) as T;
}

function writeJson(
  filePath: string,
  value: unknown,
): void {
  ensureDirectory(filePath);

  fs.writeFileSync(
    filePath,
    `${JSON.stringify(
      value,
      null,
      2,
    )}\n`,
    "utf8",
  );
}

function collectJsonFiles(
  directory: string,
): string[] {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const files: string[] = [];

  const entries = fs.readdirSync(
    directory,
    {
      withFileTypes: true,
    },
  );

  for (const entry of entries) {
    const absolutePath = path.join(
      directory,
      entry.name,
    );

    if (entry.isDirectory()) {
      files.push(
        ...collectJsonFiles(
          absolutePath,
        ),
      );

      continue;
    }

    if (
      entry.isFile() &&
      entry.name.endsWith(".json")
    ) {
      files.push(absolutePath);
    }
  }

  return files.sort();
}

function splitIntoBatches<T>(
  values: T[],
  size: number,
): T[][] {
  const batches: T[][] = [];

  for (
    let index = 0;
    index < values.length;
    index += size
  ) {
    batches.push(
      values.slice(
        index,
        index + size,
      ),
    );
  }

  return batches;
}

/*
|--------------------------------------------------------------------------
| Validation de la réponse JSON
|--------------------------------------------------------------------------
*/

function extractJson(
  value: string,
): Dictionary {
  const cleaned = value
    .trim()
    .replace(
      /^```json\s*/i,
      "",
    )
    .replace(
      /^```\s*/i,
      "",
    )
    .replace(
      /\s*```$/i,
      "",
    );

  const parsed =
    JSON.parse(cleaned) as unknown;

  if (
    typeof parsed !== "object" ||
    parsed === null ||
    Array.isArray(parsed)
  ) {
    throw new Error(
      "La réponse de traduction n’est pas un objet JSON.",
    );
  }

  const dictionary: Dictionary = {};

  for (
    const [key, text] of
      Object.entries(parsed)
  ) {
    if (typeof text !== "string") {
      throw new Error(
        `La traduction de la clé "${key}" n’est pas une chaîne.`,
      );
    }

    dictionary[key] = text;
  }

  return dictionary;
}

/*
|--------------------------------------------------------------------------
| Validation des arguments
|--------------------------------------------------------------------------
*/

function getSelectedLocales():
  TargetLocale[] {
  if (!SELECTED_LOCALE) {
    return Object.keys(
      TARGET_LOCALES,
    ) as TargetLocale[];
  }

  if (
    !Object.prototype.hasOwnProperty.call(
      TARGET_LOCALES,
      SELECTED_LOCALE,
    )
  ) {
    throw new Error(
      [
        `Langue invalide : ${SELECTED_LOCALE}`,
        "Langues disponibles : en, es, de, it, pt",
      ].join("\n"),
    );
  }

  return [
    SELECTED_LOCALE as TargetLocale,
  ];
}

function validateSelectedCategory():
  void {
  if (!SELECTED_CATEGORY) {
    return;
  }

  if (
    !VALID_CATEGORIES.includes(
      SELECTED_CATEGORY as ValidCategory,
    )
  ) {
    throw new Error(
      [
        `Catégorie invalide : ${SELECTED_CATEGORY}`,
        `Catégories disponibles : ${VALID_CATEGORIES.join(
          ", ",
        )}`,
      ].join("\n"),
    );
  }
}

function fileMatchesCategory(
  relativeFile: string,
): boolean {
  if (!SELECTED_CATEGORY) {
    return true;
  }

  const normalized =
    normalizePath(relativeFile);

  return (
    normalized ===
      SELECTED_CATEGORY ||
    normalized.startsWith(
      `${SELECTED_CATEGORY}/`,
    )
  );
}

/*
|--------------------------------------------------------------------------
| Mémoire de traduction
|--------------------------------------------------------------------------
*/

function getMemoryFile(
  locale: TargetLocale,
): string {
  return path.join(
    MEMORY_ROOT,
    `${locale}.json`,
  );
}

function loadMemory(
  locale: TargetLocale,
): TranslationMemory {
  const memoryFile =
    getMemoryFile(locale);

  if (!fs.existsSync(memoryFile)) {
    return {};
  }

  return readJson<TranslationMemory>(
    memoryFile,
  );
}

function saveMemory(
  locale: TargetLocale,
  memory: TranslationMemory,
): void {
  writeJson(
    getMemoryFile(locale),
    memory,
  );
}

function normalizeMemoryKey(
  text: string,
): string {
  return text
    .normalize("NFC")
    .replace(
      /\r\n/g,
      "\n",
    )
    .replace(
      /[ \t]+/g,
      " ",
    )
    .trim();
}

/*
|--------------------------------------------------------------------------
| Protection des éléments techniques
|--------------------------------------------------------------------------
*/

const PROTECTED_PATTERN =
  /(\{\{[^{}]+\}\}|\$\{[^{}]+\}|\{[a-zA-Z0-9_.-]+\}|%[sdif]|https?:\/\/[^\s"'<>]+|mailto:[^\s"'<>]+|[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}|<\/?[A-Za-z][^>]*>)/g;

function extractProtectedTokens(
  text: string,
): string[] {
  return (
    text.match(
      PROTECTED_PATTERN,
    ) ?? []
  );
}

function assertProtectedTokensPreserved(
  source: string,
  translated: string,
): void {
  const sourceTokens =
    extractProtectedTokens(
      source,
    ).sort();

  const translatedTokens =
    extractProtectedTokens(
      translated,
    ).sort();

  const sourceSerialized =
    JSON.stringify(sourceTokens);

  const translatedSerialized =
    JSON.stringify(
      translatedTokens,
    );

  if (
    sourceSerialized !==
    translatedSerialized
  ) {
    throw new Error(
      [
        "Un élément technique a été modifié pendant la traduction.",
        `Source : ${source}`,
        `Traduction : ${translated}`,
        `Attendus : ${
          sourceTokens.join(" | ") ||
          "aucun"
        }`,
        `Reçus : ${
          translatedTokens.join(
            " | ",
          ) || "aucun"
        }`,
      ].join("\n"),
    );
  }
}

/*
|--------------------------------------------------------------------------
| Glossaire envoyé au modèle
|--------------------------------------------------------------------------
*/

function createGlossaryText(
  locale: TargetLocale,
): string {
  return Object.entries(
    ASTROLOGY_GLOSSARY[locale],
  )
    .map(
      ([source, target]) =>
        `${source} => ${target}`,
    )
    .join("\n");
}

/*
|--------------------------------------------------------------------------
| Appel OpenAI
|--------------------------------------------------------------------------
*/

async function requestTranslation(
  entries: Dictionary,
  locale: TargetLocale,
): Promise<Dictionary> {
  const targetLanguage =
    TARGET_LOCALES[locale];

  const completion =
    await client.chat.completions.create({
      model:
        process.env.OPENAI_TRANSLATION_MODEL ||
        "gpt-4o-mini",

      response_format: {
        type: "json_object",
      },

      temperature: 0.1,

      messages: [
        {
          role: "system",
          content: [
            `Translate a French astrology website dictionary into ${targetLanguage}.`,
            "Return only one valid JSON object.",
            "Keep every JSON key exactly unchanged.",
            "Return every key received, even when a value appears repetitive.",
            "Translate only the string values.",
            "Use natural, professional language suitable for a public astrology website.",
            "Preserve meaning, tone and SEO intent.",
            "Preserve HTML, Markdown, emojis, punctuation, URLs, email addresses and placeholders exactly.",
            "Never translate code, JSON keys, variable names, product names or the brand Luna Astralis.",
            "Use the following astrology glossary whenever the French term is used in its astrological sense:",
            createGlossaryText(locale),
            "Do not add comments or explanations.",
          ].join("\n"),
        },
        {
          role: "user",
          content: JSON.stringify(
            entries,
            null,
            2,
          ),
        },
      ],
    });

  const content =
    completion.choices[0]
      ?.message?.content;

  if (!content) {
    throw new Error(
      "OpenAI n’a retourné aucun texte.",
    );
  }

  return extractJson(content);
}

async function translateBatch(
  entries: Dictionary,
  locale: TargetLocale,
): Promise<Dictionary> {
  const expectedKeys =
    Object.keys(entries);

  if (expectedKeys.length === 0) {
    return {};
  }

  let collected: Dictionary = {};
  let pendingEntries: Dictionary = {
    ...entries,
  };
  let lastError: unknown = null;

  for (
    let attempt = 1;
    attempt <= MAX_RETRIES;
    attempt += 1
  ) {
    try {
      const translated =
        await requestTranslation(
          pendingEntries,
          locale,
        );

      const pendingKeys =
        Object.keys(pendingEntries);

      const unexpectedKeys =
        Object.keys(translated).filter(
          (key) =>
            !pendingKeys.includes(key),
        );

      if (unexpectedKeys.length > 0) {
        console.warn(
          `Clés inattendues ignorées : ${unexpectedKeys.join(", ")}`,
        );
      }

      for (const key of pendingKeys) {
        const translatedText =
          translated[key];

        if (
          typeof translatedText !== "string" ||
          translatedText.trim() === ""
        ) {
          continue;
        }

        assertProtectedTokensPreserved(
          pendingEntries[key],
          translatedText,
        );

        collected[key] =
          translatedText;
      }

      const missingKeys =
        expectedKeys.filter(
          (key) =>
            typeof collected[key] !== "string" ||
            collected[key].trim() === "",
        );

      if (missingKeys.length === 0) {
        return Object.fromEntries(
          expectedKeys.map((key) => [
            key,
            collected[key],
          ]),
        ) as Dictionary;
      }

      pendingEntries =
        Object.fromEntries(
          missingKeys.map((key) => [
            key,
            entries[key],
          ]),
        ) as Dictionary;

      console.warn(
        `Tentative ${attempt}/${MAX_RETRIES} incomplète — ${missingKeys.length} clé(s) à récupérer : ${missingKeys.join(", ")}`,
      );

      if (attempt < MAX_RETRIES) {
        await new Promise<void>(
          (resolve) => {
            setTimeout(
              resolve,
              attempt * 2000,
            );
          },
        );
      }
    } catch (error) {
      lastError = error;

      console.warn(
        `Tentative ${attempt}/${MAX_RETRIES} échouée.`,
      );

      if (error instanceof Error) {
        console.warn(error.message);
      }

      if (attempt < MAX_RETRIES) {
        await new Promise<void>(
          (resolve) => {
            setTimeout(
              resolve,
              attempt * 2000,
            );
          },
        );
      }
    }
  }

  const missingKeys =
    expectedKeys.filter(
      (key) =>
        typeof collected[key] !== "string" ||
        collected[key].trim() === "",
    );

  if (missingKeys.length === 0) {
    return Object.fromEntries(
      expectedKeys.map((key) => [
        key,
        collected[key],
      ]),
    ) as Dictionary;
  }

  if (expectedKeys.length > 1) {
    console.warn(
      `Le lot reste incomplet. Division automatique de ${expectedKeys.length} textes en sous-lots.`,
    );

    const midpoint =
      Math.ceil(expectedKeys.length / 2);

    const firstKeys =
      expectedKeys.slice(0, midpoint);

    const secondKeys =
      expectedKeys.slice(midpoint);

    const firstEntries =
      Object.fromEntries(
        firstKeys.map((key) => [
          key,
          entries[key],
        ]),
      ) as Dictionary;

    const secondEntries =
      Object.fromEntries(
        secondKeys.map((key) => [
          key,
          entries[key],
        ]),
      ) as Dictionary;

    const firstResult =
      await translateBatch(
        firstEntries,
        locale,
      );

    const secondResult =
      await translateBatch(
        secondEntries,
        locale,
      );

    return {
      ...firstResult,
      ...secondResult,
    };
  }

  const onlyKey =
    expectedKeys[0];

  throw new Error(
    [
      `Impossible de traduire la clé ${onlyKey} après plusieurs essais.`,
      `Texte : ${entries[onlyKey]}`,
      lastError instanceof Error
        ? `Dernière erreur : ${lastError.message}`
        : "",
    ]
      .filter(Boolean)
      .join("\n"),
  );
}

/*
|--------------------------------------------------------------------------
| Traduction d’un fichier
|--------------------------------------------------------------------------
*/

async function translateFile(
  sourceFile: string,
  locale: TargetLocale,
  memory: TranslationMemory,
): Promise<{
  translatedByApi: number;
  reusedFromMemory: number;
  alreadyPresent: number;
}> {
  const relativeFile =
    normalizePath(
      path.relative(
        SOURCE_ROOT,
        sourceFile,
      ),
    );

  const targetFile = path.join(
    MIGRATED_ROOT,
    locale,
    relativeFile,
  );

  const sourceDictionary =
    readJson<Dictionary>(
      sourceFile,
    );

  const existingDictionary =
    fs.existsSync(targetFile)
      ? readJson<Dictionary>(
          targetFile,
        )
      : {};

  const output: Dictionary = {
    ...existingDictionary,
  };

  let alreadyPresent = 0;
  let reusedFromMemory = 0;
  let translatedByApi = 0;

  /*
   * Un texte français identique peut être utilisé par plusieurs clés.
   * Il sera envoyé une seule fois à l’API.
   */
  const sourceTextToKeys =
    new Map<string, string[]>();

  for (
    const [key, sourceText] of
      Object.entries(
        sourceDictionary,
      )
  ) {
    const existing =
      existingDictionary[key];

    if (
      !FORCE_MODE &&
      typeof existing === "string" &&
      existing.trim() !== ""
    ) {
      alreadyPresent += 1;
      continue;
    }

    const memoryKey =
      normalizeMemoryKey(
        sourceText,
      );

    const memoryTranslation =
      memory[memoryKey];

    if (
      !FORCE_MODE &&
      typeof memoryTranslation ===
        "string" &&
      memoryTranslation.trim() !== ""
    ) {
      assertProtectedTokensPreserved(
        sourceText,
        memoryTranslation,
      );

      output[key] =
        memoryTranslation;

      reusedFromMemory += 1;
      continue;
    }

    const keys =
      sourceTextToKeys.get(
        sourceText,
      ) ?? [];

    keys.push(key);

    sourceTextToKeys.set(
      sourceText,
      keys,
    );
  }

  const uniqueTexts = [
    ...sourceTextToKeys.keys(),
  ];

  const batches =
    splitIntoBatches(
      uniqueTexts,
      BATCH_SIZE,
    );

  for (
    let batchIndex = 0;
    batchIndex < batches.length;
    batchIndex += 1
  ) {
    const batchTexts =
      batches[batchIndex];

    const temporaryDictionary:
      Dictionary = {};

    batchTexts.forEach(
      (text, index) => {
        temporaryDictionary[
          `text_${index + 1}`
        ] = text;
      },
    );

    console.log(
      [
        `  Lot ${batchIndex + 1}`,
        `/${batches.length}`,
        ` — ${batchTexts.length}`,
        " textes uniques",
      ].join(""),
    );

    const translatedBatch =
      await translateBatch(
        temporaryDictionary,
        locale,
      );

    batchTexts.forEach(
      (sourceText, index) => {
        const temporaryKey =
          `text_${index + 1}`;

        const translatedText =
          translatedBatch[
            temporaryKey
          ];

        if (
          typeof translatedText !==
            "string" ||
          translatedText.trim() === ""
        ) {
          throw new Error(
            `Traduction vide pour : ${sourceText}`,
          );
        }

        assertProtectedTokensPreserved(
          sourceText,
          translatedText,
        );

        const memoryKey =
          normalizeMemoryKey(
            sourceText,
          );

        memory[memoryKey] =
          translatedText;

        const destinationKeys =
          sourceTextToKeys.get(
            sourceText,
          ) ?? [];

        for (
          const destinationKey of
            destinationKeys
        ) {
          output[
            destinationKey
          ] = translatedText;
        }

        translatedByApi += 1;
      },
    );

    /*
     * Sauvegarde après chaque lot.
     * Si le processus est interrompu, le travail effectué reste présent.
     */
    writeJson(
      targetFile,
      output,
    );

    saveMemory(
      locale,
      memory,
    );
  }

  /*
   * Le fichier final reprend exactement l’ordre des clés françaises.
   */
  const orderedOutput =
    Object.fromEntries(
      Object.keys(
        sourceDictionary,
      ).map((key) => {
        const translated =
          output[key];

        return [
          key,
          typeof translated ===
            "string" &&
          translated.trim() !== ""
            ? translated
            : sourceDictionary[key],
        ];
      }),
    ) as Dictionary;

  writeJson(
    targetFile,
    orderedOutput,
  );

  return {
    translatedByApi,
    reusedFromMemory,
    alreadyPresent,
  };
}

/*
|--------------------------------------------------------------------------
| Exécution principale
|--------------------------------------------------------------------------
*/

async function main():
  Promise<void> {
  if (
    !process.env.OPENAI_API_KEY
  ) {
    throw new Error(
      [
        "La variable OPENAI_API_KEY est absente.",
        "Ajoute la clé dans les variables d’environnement.",
        "Ne mets jamais la clé directement dans le code.",
      ].join("\n"),
    );
  }

  validateSelectedCategory();

  if (
    !fs.existsSync(SOURCE_ROOT)
  ) {
    throw new Error(
      [
        "Les dictionnaires français sont introuvables.",
        "Dossier attendu : i18n/migrated/fr",
        "Exécute d’abord : npm run i18n:prepare",
      ].join("\n"),
    );
  }

  const locales =
    getSelectedLocales();

  const sourceFiles =
    collectJsonFiles(
      SOURCE_ROOT,
    ).filter((sourceFile) => {
      const relativeFile =
        normalizePath(
          path.relative(
            SOURCE_ROOT,
            sourceFile,
          ),
        );

      return fileMatchesCategory(
        relativeFile,
      );
    });

  if (
    sourceFiles.length === 0
  ) {
    throw new Error(
      [
        "Aucun dictionnaire français correspondant n’a été trouvé.",
        SELECTED_CATEGORY
          ? `Catégorie demandée : ${SELECTED_CATEGORY}`
          : "Aucune catégorie particulière n’a été demandée.",
      ].join("\n"),
    );
  }

  let totalApiTranslations = 0;
  let totalMemoryReuses = 0;
  let totalAlreadyPresent = 0;

  for (
    const locale of locales
  ) {
    console.log("");
    console.log(
      [
        "Traduction vers ",
        TARGET_LOCALES[locale],
        ` (${locale})`,
      ].join(""),
    );

    const memory =
      loadMemory(locale);

    for (
      let index = 0;
      index <
      sourceFiles.length;
      index += 1
    ) {
      const sourceFile =
        sourceFiles[index];

      const relativeFile =
        normalizePath(
          path.relative(
            SOURCE_ROOT,
            sourceFile,
          ),
        );

      console.log("");
      console.log(
        `[${index + 1}/${sourceFiles.length}] ${relativeFile}`,
      );

      const result =
        await translateFile(
          sourceFile,
          locale,
          memory,
        );

      totalApiTranslations +=
        result.translatedByApi;

      totalMemoryReuses +=
        result.reusedFromMemory;

      totalAlreadyPresent +=
        result.alreadyPresent;

      console.log(
        [
          `  API : ${result.translatedByApi}`,
          `Mémoire : ${result.reusedFromMemory}`,
          `Déjà présents : ${result.alreadyPresent}`,
        ].join(" — "),
      );
    }

    saveMemory(
      locale,
      memory,
    );
  }

  console.log("");
  console.log(
    "Traduction automatique V4 terminée.",
  );

  console.log(
    `Textes uniques traduits par l’API : ${totalApiTranslations}`,
  );

  console.log(
    `Traductions réutilisées depuis la mémoire : ${totalMemoryReuses}`,
  );

  console.log(
    `Traductions déjà présentes : ${totalAlreadyPresent}`,
  );

  console.log("");
}

main().catch(
  (error: unknown) => {
    console.error("");
    console.error(
      "Erreur de traduction i18n :",
    );

    console.error(
      error instanceof Error
        ? error.message
        : error,
    );

    process.exit(1);
  },
);
