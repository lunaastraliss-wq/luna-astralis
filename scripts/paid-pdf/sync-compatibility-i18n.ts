import fs from "node:fs";
import path from "node:path";

/*
 * =========================================================
 * LUNA ASTRALIS
 * COMPATIBILITY I18N — SYNC + AUDIT
 * =========================================================
 *
 * Ce script fait 2 choses :
 *
 * 1. Synchronise les clés JSON
 *    entre fr / en / es / de / it / pt
 *
 * 2. Analyse les composants CompatibilityPdf
 *    pour détecter les textes français
 *    encore écrits directement dans les TSX.
 *
 * Il n'écrase jamais les traductions existantes.
 */

const LOCALES = [
  "fr",
  "en",
  "es",
  "de",
  "it",
  "pt",
] as const;

type Locale =
  (typeof LOCALES)[number];

const SOURCE_LOCALE: Locale = "fr";

const PROJECT_ROOT =
  process.cwd();

const I18N_ROOT =
  path.join(
    PROJECT_ROOT,
    "i18n",
    "migrated",
  );

const COMPATIBILITY_I18N_FOLDER =
  path.join(
    "components",
    "compatibilitypdf",
  );

const COMPONENTS_FOLDER =
  path.join(
    PROJECT_ROOT,
    "components",
    "CompatibilityPdf",
  );

const MISSING_PREFIX =
  "[TRANSLATE] ";

type TranslationFile =
  Record<string, string>;

type SyncResult = {
  added: Record<
    Locale,
    string[]
  >;
};

type HardcodedTextResult = {
  fileName: string;
  line: number;
  text: string;
};

/*
 * =========================================================
 * JSON
 * =========================================================
 */

function getLocaleFolder(
  locale: Locale,
): string {
  return path.join(
    I18N_ROOT,
    locale,
    COMPATIBILITY_I18N_FOLDER,
  );
}

function readJsonFile(
  filePath: string,
): TranslationFile {
  const raw =
    fs.readFileSync(
      filePath,
      "utf8",
    );

  const parsed =
    JSON.parse(raw);

  if (
    parsed === null ||
    typeof parsed !== "object" ||
    Array.isArray(parsed)
  ) {
    throw new Error(
      `JSON invalide : ${filePath}`,
    );
  }

  return parsed as TranslationFile;
}

function writeJsonFile(
  filePath: string,
  data: TranslationFile,
): void {
  fs.writeFileSync(
    filePath,
    JSON.stringify(
      data,
      null,
      2,
    ) + "\n",
    "utf8",
  );
}

/*
 * =========================================================
 * FICHIERS I18N COMPATIBILITY
 * =========================================================
 */

function getFrenchCompatibilityFiles():
  string[] {
  const frenchFolder =
    getLocaleFolder(
      SOURCE_LOCALE,
    );

  if (
    !fs.existsSync(
      frenchFolder,
    )
  ) {
    throw new Error(
      `Dossier français introuvable : ${frenchFolder}`,
    );
  }

  return fs
    .readdirSync(
      frenchFolder,
    )
    .filter(
      (fileName) =>
        fileName.startsWith(
          "compatibility",
        ) &&
        fileName.endsWith(
          ".json",
        ),
    )
    .sort();
}

/*
 * =========================================================
 * SYNCHRONISATION JSON
 * =========================================================
 */

function syncFile(
  fileName: string,
): SyncResult {
  const frenchPath =
    path.join(
      getLocaleFolder(
        SOURCE_LOCALE,
      ),
      fileName,
    );

  const frenchData =
    readJsonFile(
      frenchPath,
    );

  const added =
    {} as Record<
      Locale,
      string[]
    >;

  for (
    const locale of LOCALES
  ) {
    added[locale] = [];

    if (
      locale ===
      SOURCE_LOCALE
    ) {
      continue;
    }

    const localeFolder =
      getLocaleFolder(
        locale,
      );

    if (
      !fs.existsSync(
        localeFolder,
      )
    ) {
      fs.mkdirSync(
        localeFolder,
        {
          recursive: true,
        },
      );
    }

    const targetPath =
      path.join(
        localeFolder,
        fileName,
      );

    let targetData:
      TranslationFile = {};

    if (
      fs.existsSync(
        targetPath,
      )
    ) {
      targetData =
        readJsonFile(
          targetPath,
        );
    }

    let changed = false;

    for (
      const [
        key,
        frenchValue,
      ] of Object.entries(
        frenchData,
      )
    ) {
      if (
        Object.prototype.hasOwnProperty.call(
          targetData,
          key,
        )
      ) {
        continue;
      }

      targetData[key] =
        `${MISSING_PREFIX}${frenchValue}`;

      added[locale].push(
        key,
      );

      changed = true;
    }

    if (!changed) {
      continue;
    }

    const ordered:
      TranslationFile = {};

    /*
     * Même ordre que le français.
     */
    for (
      const key of Object.keys(
        frenchData,
      )
    ) {
      if (
        Object.prototype.hasOwnProperty.call(
          targetData,
          key,
        )
      ) {
        ordered[key] =
          targetData[key];
      }
    }

    /*
     * Garde les clés supplémentaires.
     */
    for (
      const [
        key,
        value,
      ] of Object.entries(
        targetData,
      )
    ) {
      if (
        !Object.prototype.hasOwnProperty.call(
          ordered,
          key,
        )
      ) {
        ordered[key] =
          value;
      }
    }

    writeJsonFile(
      targetPath,
      ordered,
    );
  }

  return {
    added,
  };
}

/*
 * =========================================================
 * AUDIT DES TSX
 * =========================================================
 */

function getCompatibilityTsxFiles():
  string[] {
  if (
    !fs.existsSync(
      COMPONENTS_FOLDER,
    )
  ) {
    throw new Error(
      `Dossier CompatibilityPdf introuvable : ${COMPONENTS_FOLDER}`,
    );
  }

  return fs
    .readdirSync(
      COMPONENTS_FOLDER,
    )
    .filter(
      (fileName) =>
        fileName.endsWith(
          ".tsx",
        ),
    )
    .sort();
}

/*
 * Détection simple de texte français visible.
 *
 * Ce n'est pas une traduction automatique.
 * Le but est seulement de repérer les zones
 * où du français est encore codé en dur.
 */
const FRENCH_HINTS = [
  "é",
  "è",
  "ê",
  "à",
  "ù",
  "ç",
  "ô",
  "î",
  "ï",
  "œ",
  "Première",
  "Deuxième",
  "Naissance",
  "Heure",
  "Lieu",
  "Synastrie",
  "Attirance",
  "Votre",
  "Vos ",
  "Les ",
  "Une ",
  "Deux ",
  "Cette ",
  "Ce ",
  "La ",
  "Le ",
  "L’",
  "d’évolution",
  "relation",
  "astrologique",
];

function looksFrench(
  value: string,
): boolean {
  const trimmed =
    value.trim();

  if (
    trimmed.length < 3
  ) {
    return false;
  }

  /*
   * Ignore imports, chemins, classes, URLs,
   * noms de constantes et code technique.
   */
  if (
    trimmed.startsWith(
      "http",
    ) ||
    trimmed.includes(
      "@/components/",
    ) ||
    trimmed.includes(
      "./",
    ) ||
    trimmed.includes(
      "../",
    )
  ) {
    return false;
  }

  return FRENCH_HINTS.some(
    (hint) =>
      trimmed.includes(
        hint,
      ),
  );
}

function cleanCandidate(
  value: string,
): string {
  return value
    .replace(
      /^\s+/,
      "",
    )
    .replace(
      /\s+$/,
      "",
    )
    .replace(
      /^["'`]/,
      "",
    )
    .replace(
      /["'`,;]+$/,
      "",
    )
    .trim();
}

function auditTsxFile(
  fileName: string,
): HardcodedTextResult[] {
  const filePath =
    path.join(
      COMPONENTS_FOLDER,
      fileName,
    );

  const source =
    fs.readFileSync(
      filePath,
      "utf8",
    );

  const lines =
    source.split(
      /\r?\n/,
    );

  const results:
    HardcodedTextResult[] = [];

  for (
    let index = 0;
    index < lines.length;
    index++
  ) {
    const line =
      lines[index];

    /*
     * Ignore les commentaires.
     */
    const trimmed =
      line.trim();

    if (
      trimmed.startsWith(
        "//",
      ) ||
      trimmed.startsWith(
        "*",
      ) ||
      trimmed.startsWith(
        "/*",
      )
    ) {
      continue;
    }

    /*
     * Texte JSX simple :
     *
     * Naissance
     * Votre voyage astrologique
     */
    if (
      !trimmed.startsWith(
        "<",
      ) &&
      !trimmed.startsWith(
        "{",
      ) &&
      looksFrench(
        trimmed,
      )
    ) {
      results.push({
        fileName,
        line:
          index + 1,
        text:
          cleanCandidate(
            trimmed,
          ),
      });
    }

    /*
     * Chaînes entre guillemets :
     *
     * label="Première personne"
     * fallbackName="Deuxième personne"
     */
    const quotedRegex =
      /["'`]([^"'`]{3,})["'`]/g;

    let match:
      RegExpExecArray | null;

    while (
      (
        match =
          quotedRegex.exec(
            line,
          )
      ) !== null
    ) {
      const candidate =
        cleanCandidate(
          match[1],
        );

      if (
        looksFrench(
          candidate,
        )
      ) {
        results.push({
          fileName,
          line:
            index + 1,
          text:
            candidate,
        });
      }
    }
  }

  /*
   * Évite les doublons identiques
   * sur la même ligne.
   */
  const seen =
    new Set<string>();

  return results.filter(
    (item) => {
      const key =
        `${item.fileName}:${item.line}:${item.text}`;

      if (
        seen.has(
          key,
        )
      ) {
        return false;
      }

      seen.add(
        key,
      );

      return true;
    },
  );
}

function auditCompatibilityComponents():
  HardcodedTextResult[] {
  const files =
    getCompatibilityTsxFiles();

  const results:
    HardcodedTextResult[] = [];

  for (
    const fileName of files
  ) {
    results.push(
      ...auditTsxFile(
        fileName,
      ),
    );
  }

  return results;
}

/*
 * =========================================================
 * RAPPORT
 * =========================================================
 */

function printDivider(): void {
  console.log(
    "------------------------------------------------------------",
  );
}

function main(): void {
  console.log("");
  console.log(
    "LUNA ASTRALIS — Compatibility i18n audit",
  );

  printDivider();

  /*
   * -------------------------------------------------------
   * 1. SYNCHRONISATION JSON
   * -------------------------------------------------------
   */

  const files =
    getFrenchCompatibilityFiles();

  console.log(
    `${files.length} fichier(s) JSON Compatibility trouvé(s).`,
  );

  printDivider();

  const totals =
    {} as Record<
      Locale,
      number
    >;

  for (
    const locale of LOCALES
  ) {
    totals[locale] = 0;
  }

  for (
    const fileName of files
  ) {
    const result =
      syncFile(
        fileName,
      );

    const changedLocales =
      LOCALES.filter(
        (locale) =>
          locale !==
            SOURCE_LOCALE &&
          result.added[
            locale
          ].length > 0,
      );

    if (
      changedLocales.length ===
      0
    ) {
      console.log(
        `✓ ${fileName}`,
      );

      continue;
    }

    console.log("");
    console.log(
      `• ${fileName}`,
    );

    for (
      const locale of
        changedLocales
    ) {
      const keys =
        result.added[
          locale
        ];

      totals[locale] +=
        keys.length;

      console.log(
        `  ${locale.toUpperCase()} : ${keys.length} clé(s) ajoutée(s)`,
      );

      for (
        const key of keys
      ) {
        console.log(
          `    - ${key}`,
        );
      }
    }
  }

  console.log("");
  printDivider();

  console.log(
    "TRADUCTIONS JSON À COMPLÉTER",
  );

  printDivider();

  for (
    const locale of LOCALES
  ) {
    if (
      locale ===
      SOURCE_LOCALE
    ) {
      continue;
    }

    console.log(
      `${locale.toUpperCase()} : ${totals[locale]}`,
    );
  }

  /*
   * -------------------------------------------------------
   * 2. AUDIT DES COMPOSANTS
   * -------------------------------------------------------
   */

  console.log("");
  printDivider();

  console.log(
    "TEXTES FRANÇAIS ENCORE CODÉS DANS LES TSX",
  );

  printDivider();

  const hardcoded =
    auditCompatibilityComponents();

  if (
    hardcoded.length ===
    0
  ) {
    console.log(
      "✓ Aucun texte français suspect détecté.",
    );
  } else {
    let currentFile = "";

    for (
      const item of hardcoded
    ) {
      if (
        item.fileName !==
        currentFile
      ) {
        currentFile =
          item.fileName;

        console.log("");
        console.log(
          `• ${currentFile}`,
        );
      }

      console.log(
        `  ligne ${item.line} : ${item.text}`,
      );
    }
  }

  console.log("");
  printDivider();

  console.log(
    `Total : ${hardcoded.length} texte(s) français suspect(s) dans les composants CompatibilityPdf.`,
  );

  console.log("");

  if (
    hardcoded.length > 0
  ) {
    console.log(
      "Ces textes doivent être branchés sur __i18n avant que les 6 langues puissent être considérées comme complètes.",
    );
  }

  console.log("");
}

main();
