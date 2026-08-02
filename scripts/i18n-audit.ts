import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/

const PROJECT_ROOT =
  process.cwd();

const SCAN_DIRECTORIES = [
  "app",
  "components",
  "lib",
];

const IGNORED_DIRECTORIES = new Set([
  "node_modules",
  ".next",
  ".git",
  "public",
  "i18n",
  "dist",
  "build",
]);

const OUTPUT_DIRECTORY =
  path.join(
    PROJECT_ROOT,
    "i18n-audit",
  );

const JSON_OUTPUT =
  path.join(
    OUTPUT_DIRECTORY,
    "hardcoded-texts.json",
  );

const MARKDOWN_OUTPUT =
  path.join(
    OUTPUT_DIRECTORY,
    "hardcoded-texts.md",
  );

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type TextKind =
  | "jsx-text"
  | "jsx-attribute"
  | "string"
  | "template";

type AuditEntry = {
  file: string;
  line: number;
  column: number;
  kind: TextKind;
  text: string;
  suggestedKey: string;
};

/*
|--------------------------------------------------------------------------
| Détection du texte affiché
|--------------------------------------------------------------------------
*/

function normalizeText(
  value: string,
): string {
  return value
    .replace(/\s+/g, " ")
    .trim();
}

function containsLetters(
  value: string,
): boolean {
  return /[A-Za-zÀ-ÖØ-öø-ÿ]/.test(
    value,
  );
}

function shouldIgnoreText(
  value: string,
): boolean {
  const text =
    normalizeText(
      value,
    );

  if (!text) {
    return true;
  }

  if (!containsLetters(text)) {
    return true;
  }

  /*
  |--------------------------------------------------------------------------
  | Valeurs techniques
  |--------------------------------------------------------------------------
  */

  if (
    text.startsWith("/") ||
    text.startsWith("./") ||
    text.startsWith("../") ||
    text.startsWith("@/") ||
    text.startsWith("http://") ||
    text.startsWith("https://")
  ) {
    return true;
  }

  if (
    /^[a-z0-9_-]+$/i.test(text) &&
    !text.includes(" ")
  ) {
    return true;
  }

  if (
    /\.(png|jpg|jpeg|webp|svg|pdf|css|tsx?|jsx?)$/i.test(
      text,
    )
  ) {
    return true;
  }

  /*
  |--------------------------------------------------------------------------
  | Classes CSS et valeurs HTML fréquentes
  |--------------------------------------------------------------------------
  */

  if (
    text.includes("className") ||
    text.includes("application/ld+json")
  ) {
    return true;
  }

  return false;
}

/*
|--------------------------------------------------------------------------
| Création d’une clé suggérée
|--------------------------------------------------------------------------
*/

function slugify(
  value: string,
): string {
  return normalizeText(value)
    .toLocaleLowerCase("fr-CA")
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      "",
    )
    .replace(
      /[^a-z0-9]+/g,
      "_",
    )
    .replace(
      /^_+|_+$/g,
      "",
    )
    .slice(
      0,
      60,
    );
}

function createSuggestedKey(
  relativeFile: string,
  text: string,
): string {
  const fileKey =
    relativeFile
      .replace(
        /\.(tsx?|jsx?)$/,
        "",
      )
      .replace(
        /[\\/[\]()]+/g,
        ".",
      )
      .replace(
        /\.+/g,
        ".",
      )
      .replace(
        /^\.|\.$/g,
        "");

  const textKey =
    slugify(
      text,
    ) || "text";

  return `${fileKey}.${textKey}`;
}

/*
|--------------------------------------------------------------------------
| Lecture des fichiers
|--------------------------------------------------------------------------
*/

function getFilesRecursively(
  directory: string,
): string[] {
  if (
    !fs.existsSync(
      directory,
    )
  ) {
    return [];
  }

  const entries =
    fs.readdirSync(
      directory,
      {
        withFileTypes:
          true,
      },
    );

  const files:
    string[] = [];

  for (
    const entry
    of entries
  ) {
    if (
      IGNORED_DIRECTORIES.has(
        entry.name,
      )
    ) {
      continue;
    }

    const fullPath =
      path.join(
        directory,
        entry.name,
      );

    if (
      entry.isDirectory()
    ) {
      files.push(
        ...getFilesRecursively(
          fullPath,
        ),
      );

      continue;
    }

    if (
      /\.(tsx|ts|jsx|js)$/.test(
        entry.name,
      )
    ) {
      files.push(
        fullPath,
      );
    }
  }

  return files;
}

/*
|--------------------------------------------------------------------------
| Position dans le fichier
|--------------------------------------------------------------------------
*/

function getPosition(
  sourceFile:
    ts.SourceFile,
  node:
    ts.Node,
) {
  const position =
    sourceFile.getLineAndCharacterOfPosition(
      node.getStart(
        sourceFile,
      ),
    );

  return {
    line:
      position.line + 1,

    column:
      position.character + 1,
  };
}

/*
|--------------------------------------------------------------------------
| Ajout d’un résultat
|--------------------------------------------------------------------------
*/

function addEntry(
  results:
    AuditEntry[],
  sourceFile:
    ts.SourceFile,
  filePath:
    string,
  node:
    ts.Node,
  kind:
    TextKind,
  rawText:
    string,
) {
  const text =
    normalizeText(
      rawText,
    );

  if (
    shouldIgnoreText(
      text,
    )
  ) {
    return;
  }

  const relativeFile =
    path
      .relative(
        PROJECT_ROOT,
        filePath,
      )
      .replace(
        /\\/g,
        "/",
      );

  const position =
    getPosition(
      sourceFile,
      node,
    );

  results.push({
    file:
      relativeFile,

    line:
      position.line,

    column:
      position.column,

    kind,

    text,

    suggestedKey:
      createSuggestedKey(
        relativeFile,
        text,
      ),
  });
}

/*
|--------------------------------------------------------------------------
| Analyse AST
|--------------------------------------------------------------------------
*/

function scanFile(
  filePath: string,
): AuditEntry[] {
  const sourceText =
    fs.readFileSync(
      filePath,
      "utf8",
    );

  const sourceFile =
    ts.createSourceFile(
      filePath,
      sourceText,
      ts.ScriptTarget.Latest,
      true,
      filePath.endsWith(
        ".tsx",
      ) ||
      filePath.endsWith(
        ".jsx",
      )
        ? ts.ScriptKind.TSX
        : ts.ScriptKind.TS,
    );

  const results:
    AuditEntry[] = [];

  function visit(
    node: ts.Node,
  ) {
    /*
    |--------------------------------------------------------------------------
    | Texte JSX :
    | <h1>Bonjour</h1>
    |--------------------------------------------------------------------------
    */

    if (
      ts.isJsxText(
        node,
      )
    ) {
      addEntry(
        results,
        sourceFile,
        filePath,
        node,
        "jsx-text",
        node.getText(
          sourceFile,
        ),
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Attribut JSX :
    | aria-label="Navigation astrologique"
    | placeholder="Votre prénom"
    |--------------------------------------------------------------------------
    */

    if (
      ts.isJsxAttribute(
        node,
      ) &&
      node.initializer &&
      ts.isStringLiteral(
        node.initializer,
      )
    ) {
      const attributeName =
        node.name.getText(
          sourceFile,
        );

      const translatableAttributes =
        new Set([
          "alt",
          "title",
          "placeholder",
          "aria-label",
          "aria-description",
        ]);

      if (
        translatableAttributes.has(
          attributeName,
        )
      ) {
        addEntry(
          results,
          sourceFile,
          filePath,
          node,
          "jsx-attribute",
          node.initializer.text,
        );
      }
    }

    /*
    |--------------------------------------------------------------------------
    | Chaînes dans les objets et tableaux :
    | title: "Horoscope du jour"
    | description: "Découvrez..."
    |--------------------------------------------------------------------------
    */

    if (
      ts.isPropertyAssignment(
        node,
      ) &&
      (
        ts.isStringLiteral(
          node.initializer,
        ) ||
        ts.isNoSubstitutionTemplateLiteral(
          node.initializer,
        )
      )
    ) {
      addEntry(
        results,
        sourceFile,
        filePath,
        node.initializer,
        "string",
        node.initializer.text,
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Éléments de tableau :
    | ["Amour", "Travail", "Finances"]
    |--------------------------------------------------------------------------
    */

    if (
      ts.isArrayLiteralExpression(
        node,
      )
    ) {
      for (
        const element
        of node.elements
      ) {
        if (
          ts.isStringLiteral(
            element,
          ) ||
          ts.isNoSubstitutionTemplateLiteral(
            element,
          )
        ) {
          addEntry(
            results,
            sourceFile,
            filePath,
            element,
            "string",
            element.text,
          );
        }
      }
    }

    /*
    |--------------------------------------------------------------------------
    | Texte dans une expression JSX :
    | <p>{"Paiement unique"}</p>
    |--------------------------------------------------------------------------
    */

    if (
      ts.isJsxExpression(
        node,
      ) &&
      node.expression &&
      (
        ts.isStringLiteral(
          node.expression,
        ) ||
        ts.isNoSubstitutionTemplateLiteral(
          node.expression,
        )
      )
    ) {
      addEntry(
        results,
        sourceFile,
        filePath,
        node.expression,
        "string",
        node.expression.text,
      );
    }

    ts.forEachChild(
      node,
      visit,
    );
  }

  visit(
    sourceFile,
  );

  return results;
}

/*
|--------------------------------------------------------------------------
| Suppression des doublons
|--------------------------------------------------------------------------
*/

function removeDuplicates(
  entries:
    AuditEntry[],
): AuditEntry[] {
  const seen =
    new Set<string>();

  return entries.filter(
    (
      entry,
    ) => {
      const id =
        [
          entry.file,
          entry.line,
          entry.column,
          entry.text,
        ].join(
          "::",
        );

      if (
        seen.has(
          id,
        )
      ) {
        return false;
      }

      seen.add(
        id,
      );

      return true;
    },
  );
}

/*
|--------------------------------------------------------------------------
| Rapport Markdown
|--------------------------------------------------------------------------
*/

function createMarkdownReport(
  entries:
    AuditEntry[],
): string {
  const grouped =
    new Map<
      string,
      AuditEntry[]
    >();

  for (
    const entry
    of entries
  ) {
    const current =
      grouped.get(
        entry.file,
      ) ?? [];

    current.push(
      entry,
    );

    grouped.set(
      entry.file,
      current,
    );
  }

  const lines = [
    "# Audit i18n Luna Astralis",
    "",
    `Fichiers contenant du texte : ${grouped.size}`,
    "",
    `Textes détectés : ${entries.length}`,
    "",
  ];

  for (
    const [
      file,
      fileEntries,
    ]
    of grouped
  ) {
    lines.push(
      `## ${file}`,
      "",
    );

    for (
      const entry
      of fileEntries
    ) {
      lines.push(
        `- Ligne ${entry.line} — \`${entry.kind}\``,
        `  - Texte : ${JSON.stringify(entry.text)}`,
        `  - Clé suggérée : \`${entry.suggestedKey}\``,
        "",
      );
    }
  }

  return lines.join(
    "\n",
  );
}

/*
|--------------------------------------------------------------------------
| Exécution
|--------------------------------------------------------------------------
*/

function main() {
  const files =
    SCAN_DIRECTORIES.flatMap(
      (
        directory,
      ) =>
        getFilesRecursively(
          path.join(
            PROJECT_ROOT,
            directory,
          ),
        ),
    );

  const entries =
    removeDuplicates(
      files.flatMap(
        scanFile,
      ),
    ).sort(
      (
        first,
        second,
      ) => {
        const fileComparison =
          first.file.localeCompare(
            second.file,
          );

        if (
          fileComparison !== 0
        ) {
          return fileComparison;
        }

        return (
          first.line -
          second.line
        );
      },
    );

  fs.mkdirSync(
    OUTPUT_DIRECTORY,
    {
      recursive:
        true,
    },
  );

  fs.writeFileSync(
    JSON_OUTPUT,
    JSON.stringify(
      entries,
      null,
      2,
    ),
    "utf8",
  );

  fs.writeFileSync(
    MARKDOWN_OUTPUT,
    createMarkdownReport(
      entries,
    ),
    "utf8",
  );

  console.log("");
  console.log(
    "Audit i18n terminé.",
  );

  console.log(
    `Fichiers analysés : ${files.length}`,
  );

  console.log(
    `Textes détectés : ${entries.length}`,
  );

  console.log(
    `Rapport JSON : ${path.relative(
      PROJECT_ROOT,
      JSON_OUTPUT,
    )}`,
  );

  console.log(
    `Rapport Markdown : ${path.relative(
      PROJECT_ROOT,
      MARKDOWN_OUTPUT,
    )}`,
  );

  console.log("");
}

main();
