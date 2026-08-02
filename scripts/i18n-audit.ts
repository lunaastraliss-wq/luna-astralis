import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/

const PROJECT_ROOT = process.cwd();

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
  "messages",
  "i18n-audit",
  "i18n-generated",
  "dist",
  "build",
  "coverage",
]);

const OUTPUT_DIRECTORY = path.join(
  PROJECT_ROOT,
  "i18n-audit",
);

const JSON_OUTPUT = path.join(
  OUTPUT_DIRECTORY,
  "hardcoded-texts.json",
);

const MARKDOWN_OUTPUT = path.join(
  OUTPUT_DIRECTORY,
  "hardcoded-texts.md",
);

const SUMMARY_OUTPUT = path.join(
  OUTPUT_DIRECTORY,
  "summary.json",
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

type AuditCategory =
  | "app"
  | "component"
  | "pdf"
  | "lib";

type AuditEntry = {
  file: string;
  line: number;
  column: number;
  kind: TextKind;
  category: AuditCategory;
  text: string;
  suggestedKey: string;
};

type AuditSummary = {
  filesScanned: number;
  filesWithText: number;
  textsDetected: number;
  categories: Record<
    AuditCategory,
    {
      files: number;
      texts: number;
    }
  >;
};

/*
|--------------------------------------------------------------------------
| Détection des fichiers à ignorer
|--------------------------------------------------------------------------
*/

function normalizePath(
  value: string,
): string {
  return value.replace(/\\/g, "/");
}

function shouldIgnoreFile(
  filePath: string,
): boolean {
  const relativeFile = normalizePath(
    path.relative(
      PROJECT_ROOT,
      filePath,
    ),
  );

  /*
  |--------------------------------------------------------------------------
  | Routes déjà migrées
  |--------------------------------------------------------------------------
  */

  if (
    relativeFile.startsWith("app/[locale]/")
  ) {
    return true;
  }

  /*
  |--------------------------------------------------------------------------
  | Fichiers de configuration et scripts internes
  |--------------------------------------------------------------------------
  */

  if (
    relativeFile.startsWith("scripts/") ||
    relativeFile.endsWith(".d.ts") ||
    relativeFile.includes("/__tests__/") ||
    relativeFile.includes("/test/") ||
    relativeFile.includes("/tests/")
  ) {
    return true;
  }

  return false;
}

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

function looksLikeCodeIdentifier(
  value: string,
): boolean {
  return /^[A-Za-z_$][A-Za-z0-9_$.-]*$/.test(
    value,
  );
}

function shouldIgnoreText(
  value: string,
): boolean {
  const text = normalizeText(value);

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
    text.startsWith("https://") ||
    text.startsWith("mailto:") ||
    text.startsWith("tel:")
  ) {
    return true;
  }

  if (
    /\.(png|jpg|jpeg|webp|svg|pdf|css|scss|sass|tsx?|jsx?|json|woff2?|ttf|otf)$/i.test(
      text,
    )
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
    looksLikeCodeIdentifier(text) &&
    !/[À-ÖØ-öø-ÿ]/.test(text) &&
    !text.includes(" ")
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
    text.includes("application/ld+json") ||
    text === "article" ||
    text === "website" ||
    text === "summary_large_image" ||
    text === "Organization" ||
    text === "Article" ||
    text === "WebPage" ||
    text === "FAQPage" ||
    text === "Question" ||
    text === "Answer" ||
    text === "BreadcrumbList" ||
    text === "ListItem"
  ) {
    return true;
  }

  return false;
}

/*
|--------------------------------------------------------------------------
| Propriétés techniques à ignorer
|--------------------------------------------------------------------------
*/

const IGNORED_PROPERTY_NAMES = new Set([
  "className",
  "id",
  "key",
  "href",
  "src",
  "url",
  "canonical",
  "type",
  "rel",
  "target",
  "method",
  "action",
  "name",
  "item",
  "@context",
  "@type",
  "@id",
  "contentType",
  "encoding",
  "format",
  "variant",
  "display",
  "position",
  "flexDirection",
  "alignItems",
  "justifyContent",
  "fontFamily",
  "fontWeight",
  "fontStyle",
  "textAlign",
  "objectFit",
  "overflow",
]);

function getPropertyName(
  node: ts.PropertyAssignment,
  sourceFile: ts.SourceFile,
): string {
  return node.name
    .getText(sourceFile)
    .replace(/^["']|["']$/g, "");
}

/*
|--------------------------------------------------------------------------
| Catégorie
|--------------------------------------------------------------------------
*/

function getCategory(
  relativeFile: string,
): AuditCategory {
  if (
    relativeFile.startsWith("app/")
  ) {
    return "app";
  }

  if (
    relativeFile.startsWith("lib/")
  ) {
    return "lib";
  }

  if (
    relativeFile.startsWith("components/")
  ) {
    const normalized =
      relativeFile.toLowerCase();

    if (
      normalized.includes("/pdf/") ||
      normalized.includes("pdf") ||
      normalized.includes("report") ||
      normalized.includes("horoscope")
    ) {
      return "pdf";
    }

    return "component";
  }

  return "component";
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
        "",
      );

  const textKey =
    slugify(text) || "text";

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
  if (!fs.existsSync(directory)) {
    return [];
  }

  const entries = fs.readdirSync(
    directory,
    {
      withFileTypes: true,
    },
  );

  const files: string[] = [];

  for (const entry of entries) {
    if (
      IGNORED_DIRECTORIES.has(
        entry.name,
      )
    ) {
      continue;
    }

    const fullPath = path.join(
      directory,
      entry.name,
    );

    if (entry.isDirectory()) {
      files.push(
        ...getFilesRecursively(fullPath),
      );
      continue;
    }

    if (
      /\.(tsx|ts|jsx|js)$/.test(
        entry.name,
      ) &&
      !shouldIgnoreFile(fullPath)
    ) {
      files.push(fullPath);
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
  sourceFile: ts.SourceFile,
  node: ts.Node,
) {
  const position =
    sourceFile.getLineAndCharacterOfPosition(
      node.getStart(sourceFile),
    );

  return {
    line: position.line + 1,
    column: position.character + 1,
  };
}

/*
|--------------------------------------------------------------------------
| Ajout d’un résultat
|--------------------------------------------------------------------------
*/

function addEntry(
  results: AuditEntry[],
  sourceFile: ts.SourceFile,
  filePath: string,
  node: ts.Node,
  kind: TextKind,
  rawText: string,
) {
  const text = normalizeText(rawText);

  if (shouldIgnoreText(text)) {
    return;
  }

  const relativeFile = normalizePath(
    path.relative(
      PROJECT_ROOT,
      filePath,
    ),
  );

  const position = getPosition(
    sourceFile,
    node,
  );

  results.push({
    file: relativeFile,
    line: position.line,
    column: position.column,
    kind,
    category: getCategory(relativeFile),
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
      filePath.endsWith(".tsx") ||
      filePath.endsWith(".jsx")
        ? ts.ScriptKind.TSX
        : ts.ScriptKind.TS,
    );

  const results: AuditEntry[] = [];

  function visit(
    node: ts.Node,
  ) {
    /*
    |--------------------------------------------------------------------------
    | Texte JSX
    |--------------------------------------------------------------------------
    */

    if (ts.isJsxText(node)) {
      addEntry(
        results,
        sourceFile,
        filePath,
        node,
        "jsx-text",
        node.getText(sourceFile),
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Attributs JSX traduisibles
    |--------------------------------------------------------------------------
    */

    if (
      ts.isJsxAttribute(node) &&
      node.initializer &&
      ts.isStringLiteral(
        node.initializer,
      )
    ) {
      const attributeName =
        node.name.getText(sourceFile);

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
    | Chaînes dans les objets
    |--------------------------------------------------------------------------
    */

    if (
      ts.isPropertyAssignment(node) &&
      (
        ts.isStringLiteral(
          node.initializer,
        ) ||
        ts.isNoSubstitutionTemplateLiteral(
          node.initializer,
        )
      )
    ) {
      const propertyName =
        getPropertyName(
          node,
          sourceFile,
        );

      if (
        !IGNORED_PROPERTY_NAMES.has(
          propertyName,
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
    }

    /*
    |--------------------------------------------------------------------------
    | Éléments de tableau
    |--------------------------------------------------------------------------
    */

    if (
      ts.isArrayLiteralExpression(node)
    ) {
      for (
        const element of node.elements
      ) {
        if (
          ts.isStringLiteral(element) ||
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
    | Texte dans une expression JSX
    |--------------------------------------------------------------------------
    */

    if (
      ts.isJsxExpression(node) &&
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

  visit(sourceFile);

  return results;
}

/*
|--------------------------------------------------------------------------
| Suppression des doublons
|--------------------------------------------------------------------------
*/

function removeDuplicates(
  entries: AuditEntry[],
): AuditEntry[] {
  const seen = new Set<string>();

  return entries.filter(
    (entry) => {
      const id = [
        entry.file,
        entry.line,
        entry.column,
        entry.text,
      ].join("::");

      if (seen.has(id)) {
        return false;
      }

      seen.add(id);
      return true;
    },
  );
}

/*
|--------------------------------------------------------------------------
| Résumé
|--------------------------------------------------------------------------
*/

function createSummary(
  files: string[],
  entries: AuditEntry[],
): AuditSummary {
  const categories: AuditSummary["categories"] = {
    app: {
      files: 0,
      texts: 0,
    },
    component: {
      files: 0,
      texts: 0,
    },
    pdf: {
      files: 0,
      texts: 0,
    },
    lib: {
      files: 0,
      texts: 0,
    },
  };

  const filesByCategory =
    new Map<
      AuditCategory,
      Set<string>
    >();

  for (
    const category of [
      "app",
      "component",
      "pdf",
      "lib",
    ] as AuditCategory[]
  ) {
    filesByCategory.set(
      category,
      new Set<string>(),
    );
  }

  for (const entry of entries) {
    categories[entry.category].texts += 1;

    filesByCategory
      .get(entry.category)
      ?.add(entry.file);
  }

  for (
    const category of [
      "app",
      "component",
      "pdf",
      "lib",
    ] as AuditCategory[]
  ) {
    categories[category].files =
      filesByCategory.get(category)?.size ?? 0;
  }

  return {
    filesScanned: files.length,
    filesWithText:
      new Set(
        entries.map(
          (entry) => entry.file,
        ),
      ).size,
    textsDetected: entries.length,
    categories,
  };
}

/*
|--------------------------------------------------------------------------
| Rapport Markdown
|--------------------------------------------------------------------------
*/

function createMarkdownReport(
  entries: AuditEntry[],
  summary: AuditSummary,
): string {
  const grouped =
    new Map<
      string,
      AuditEntry[]
    >();

  for (const entry of entries) {
    const current =
      grouped.get(entry.file) ?? [];

    current.push(entry);
    grouped.set(entry.file, current);
  }

  const lines = [
    "# Audit i18n Luna Astralis",
    "",
    "## Résumé",
    "",
    `- Fichiers analysés : ${summary.filesScanned}`,
    `- Fichiers contenant du texte : ${summary.filesWithText}`,
    `- Textes détectés : ${summary.textsDetected}`,
    "",
    "## Catégories",
    "",
    `- Pages restantes : ${summary.categories.app.files} fichiers / ${summary.categories.app.texts} textes`,
    `- Composants : ${summary.categories.component.files} fichiers / ${summary.categories.component.texts} textes`,
    `- PDF et rapports : ${summary.categories.pdf.files} fichiers / ${summary.categories.pdf.texts} textes`,
    `- Lib et données : ${summary.categories.lib.files} fichiers / ${summary.categories.lib.texts} textes`,
    "",
  ];

  for (
    const [
      file,
      fileEntries,
    ] of grouped
  ) {
    lines.push(
      `## ${file}`,
      "",
    );

    for (
      const entry of fileEntries
    ) {
      lines.push(
        `- Ligne ${entry.line} — \`${entry.kind}\` — \`${entry.category}\``,
        `  - Texte : ${JSON.stringify(entry.text)}`,
        `  - Clé suggérée : \`${entry.suggestedKey}\``,
        "",
      );
    }
  }

  return lines.join("\n");
}

/*
|--------------------------------------------------------------------------
| Exécution
|--------------------------------------------------------------------------
*/

function main() {
  const files =
    SCAN_DIRECTORIES.flatMap(
      (directory) =>
        getFilesRecursively(
          path.join(
            PROJECT_ROOT,
            directory,
          ),
        ),
    );

  const entries =
    removeDuplicates(
      files.flatMap(scanFile),
    ).sort(
      (first, second) => {
        const categoryComparison =
          first.category.localeCompare(
            second.category,
          );

        if (
          categoryComparison !== 0
        ) {
          return categoryComparison;
        }

        const fileComparison =
          first.file.localeCompare(
            second.file,
          );

        if (
          fileComparison !== 0
        ) {
          return fileComparison;
        }

        return first.line - second.line;
      },
    );

  const summary =
    createSummary(
      files,
      entries,
    );

  fs.mkdirSync(
    OUTPUT_DIRECTORY,
    {
      recursive: true,
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
    SUMMARY_OUTPUT,
    JSON.stringify(
      summary,
      null,
      2,
    ),
    "utf8",
  );

  fs.writeFileSync(
    MARKDOWN_OUTPUT,
    createMarkdownReport(
      entries,
      summary,
    ),
    "utf8",
  );

  console.log("");
  console.log(
    "Audit i18n intelligent terminé.",
  );
  console.log(
    `Fichiers analysés : ${summary.filesScanned}`,
  );
  console.log(
    `Fichiers contenant du texte : ${summary.filesWithText}`,
  );
  console.log(
    `Textes détectés : ${summary.textsDetected}`,
  );
  console.log("");
  console.log(
    `Pages restantes : ${summary.categories.app.files} fichiers / ${summary.categories.app.texts} textes`,
  );
  console.log(
    `Composants : ${summary.categories.component.files} fichiers / ${summary.categories.component.texts} textes`,
  );
  console.log(
    `PDF et rapports : ${summary.categories.pdf.files} fichiers / ${summary.categories.pdf.texts} textes`,
  );
  console.log(
    `Lib et données : ${summary.categories.lib.files} fichiers / ${summary.categories.lib.texts} textes`,
  );
  console.log("");
  console.log(
    `Rapport JSON : ${path.relative(
      PROJECT_ROOT,
      JSON_OUTPUT,
    )}`,
  );
  console.log(
    `Résumé JSON : ${path.relative(
      PROJECT_ROOT,
      SUMMARY_OUTPUT,
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
