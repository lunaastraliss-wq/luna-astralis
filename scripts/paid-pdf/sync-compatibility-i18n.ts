import fs from "node:fs";
import path from "node:path";

/*
 * =========================================================
 * LUNA ASTRALIS
 * SYNCHRONISATION I18N — PDF COMPATIBILITY
 * =========================================================
 *
 * Ce script utilise le français comme référence.
 *
 * Il vérifie automatiquement :
 * fr / en / es / de / it / pt
 *
 * Il :
 * - parcourt tous les compatibility*.json
 * - détecte les clés manquantes
 * - ajoute les clés manquantes
 * - n'écrase JAMAIS une traduction existante
 * - marque clairement les nouvelles traductions à faire
 * - affiche un rapport dans le terminal
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

/*
 * Racine du projet.
 *
 * Le script se trouve dans :
 * scripts/paid-pdf/
 *
 * process.cwd() doit normalement être
 * la racine du projet lorsque le script
 * est lancé depuis npm.
 */
const PROJECT_ROOT =
  process.cwd();

const I18N_ROOT =
  path.join(
    PROJECT_ROOT,
    "i18n",
    "migrated",
  );

const COMPATIBILITY_FOLDER =
  path.join(
    "components",
    "compatibilitypdf",
  );

/*
 * Préfixe volontairement très visible.
 *
 * Si une traduction manque, on ne veut surtout
 * pas qu'elle passe inaperçue dans le PDF.
 */
const MISSING_PREFIX =
  "[TRANSLATE] ";

/*
 * ---------------------------------------------------------
 * TYPES
 * ---------------------------------------------------------
 */

type TranslationFile =
  Record<string, string>;

/*
 * ---------------------------------------------------------
 * UTILITAIRES
 * ---------------------------------------------------------
 */

function getLocaleFolder(
  locale: Locale,
): string {
  return path.join(
    I18N_ROOT,
    locale,
    COMPATIBILITY_FOLDER,
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
 * ---------------------------------------------------------
 * RÉCUPÉRATION DES FICHIERS COMPATIBILITY
 * ---------------------------------------------------------
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
 * ---------------------------------------------------------
 * SYNCHRONISATION D'UN FICHIER
 * ---------------------------------------------------------
 */

function syncFile(
  fileName: string,
): {
  added: Record<
    Locale,
    string[]
  >;
} {
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

    /*
     * Le français est notre référence.
     * On ne le modifie pas.
     */
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

    /*
     * Si jamais le dossier d'une langue
     * n'existe pas, on le crée.
     */
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

    /*
     * On conserve le contenu existant
     * s'il existe déjà.
     */
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

    /*
     * On parcourt toutes les clés françaises.
     */
    for (
      const [
        key,
        frenchValue,
      ] of Object.entries(
        frenchData,
      )
    ) {
      /*
       * IMPORTANT :
       *
       * On ne touche jamais à une clé
       * déjà présente.
       */
      if (
        Object.prototype.hasOwnProperty.call(
          targetData,
          key,
        )
      ) {
        continue;
      }

      /*
       * Nouvelle clé manquante.
       *
       * On l'ajoute avec un marqueur visible.
       * Cela évite qu'un texte français soit
       * accidentellement considéré comme traduit.
       */
      targetData[key] =
        `${MISSING_PREFIX}${frenchValue}`;

      added[locale].push(
        key,
      );

      changed = true;
    }

    /*
     * On réordonne les clés selon le français.
     *
     * Les éventuelles clés supplémentaires
     * déjà présentes dans la langue sont
     * conservées à la fin.
     */
    if (changed) {
      const ordered:
        TranslationFile = {};

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
       * Conservation des clés supplémentaires.
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
  }

  return {
    added,
  };
}

/*
 * ---------------------------------------------------------
 * RAPPORT
 * ---------------------------------------------------------
 */

function printDivider(): void {
  console.log(
    "------------------------------------------------------------",
  );
}

function main(): void {
  console.log("");
  console.log(
    "LUNA ASTRALIS — Compatibility i18n sync",
  );

  printDivider();

  const files =
    getFrenchCompatibilityFiles();

  console.log(
    `${files.length} fichier(s) Compatibility trouvé(s).`,
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
    "RÉSUMÉ",
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
      `${locale.toUpperCase()} : ${totals[locale]} traduction(s) à compléter`,
    );
  }

  console.log("");

  const totalMissing =
    LOCALES
      .filter(
        (locale) =>
          locale !==
          SOURCE_LOCALE,
      )
      .reduce(
        (
          total,
          locale,
        ) =>
          total +
          totals[locale],
        0,
      );

  if (
    totalMissing === 0
  ) {
    console.log(
      "✓ Toutes les clés Compatibility sont synchronisées.",
    );
  } else {
    console.log(
      `${totalMissing} traduction(s) marquée(s) avec ${MISSING_PREFIX.trim()}`,
    );

    console.log("");
    console.log(
      "Les traductions existantes n'ont pas été modifiées.",
    );
  }

  console.log("");
}

main();
