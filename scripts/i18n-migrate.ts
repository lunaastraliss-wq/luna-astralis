/*
|--------------------------------------------------------------------------
| i18n-migrate V8
|--------------------------------------------------------------------------
|
| Migration modulaire pour Luna Astralis.
|
| V5 lit maintenant le plan persistant dans i18n/migrated.
|
| V4 sépare les transformations selon la catégorie :
| - lib
| - components
| - pdf
| - app
|
| Sécurité :
| - simulation par défaut
| - sauvegarde avant écriture
| - validation syntaxique avant modification
| - rapport détaillé
| - les cas ambigus sont ignorés
|
| Exemples :
| npm run i18n:migrate
| npm run i18n:migrate -- --category=lib --limit=5
| npm run i18n:migrate:write -- --category=component --limit=10
|
*/

import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/

const PROJECT_ROOT = process.cwd();

const PLAN_FILE = path.join(
  PROJECT_ROOT,
  "i18n",
  "migrated",
  "migration-plan.json",
);

const BACKUP_ROOT = path.join(
  PROJECT_ROOT,
  "i18n-backup",
);

const REPORT_ROOT = path.join(
  PROJECT_ROOT,
  "i18n-migration-report",
);

const WRITE_MODE =
  process.argv.includes("--write");

const CATEGORY_ARGUMENT =
  process.argv.find((argument) =>
    argument.startsWith("--category="),
  );

const SELECTED_CATEGORY =
  CATEGORY_ARGUMENT
    ? CATEGORY_ARGUMENT.split("=")[1]
    : null;

const LIMIT_ARGUMENT =
  process.argv.find((argument) =>
    argument.startsWith("--limit="),
  );

const parsedLimit =
  LIMIT_ARGUMENT
    ? Number(
        LIMIT_ARGUMENT.split("=")[1],
      )
    : Number.POSITIVE_INFINITY;

const FILE_LIMIT =
  Number.isFinite(parsedLimit) &&
  parsedLimit >= 0
    ? parsedLimit
    : Number.POSITIVE_INFINITY;

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

type GeneratedEntry = {
  key: string;
  text: string;
  sourceFile: string;
  line: number;
  column: number;
  kind: TextKind;
  category: AuditCategory;
};

type FileGroup = {
  sourceFile: string;
  category: AuditCategory;
  namespace: string;
  outputFile: string;
  textCount: number;
  priorityScore: number;
  entries: GeneratedEntry[];
};

type MigrationPlan = {
  generatedAt: string;
  sourceLocale: string;
  sourceAudit: string;
  sourceSummary: string | null;
  totals: {
    files: number;
    texts: number;
  };
  categories: Record<
    AuditCategory,
    {
      files: number;
      texts: number;
    }
  >;
  recommendedOrder: AuditCategory[];
  files: FileGroup[];
};

type Replacement = {
  start: number;
  end: number;
  value: string;
  key: string;
  original: string;
  kind: TextKind;
  line: number;
};

type TransformContext = {
  group: FileGroup;
  absoluteSource: string;
  originalSource: string;
  sourceFile: ts.SourceFile;
};

type TransformResult = {
  replacements: Replacement[];
  skippedReasons: string[];
  importRequired: boolean;
};

type FileResult = {
  sourceFile: string;
  category: AuditCategory;
  dictionaryFile: string;
  status:
    | "modified"
    | "simulated"
    | "skipped"
    | "error";
  replacementsApplied: number;
  replacementsSkipped: number;
  reasons: string[];
};

type MigrationReport = {
  generatedAt: string;
  mode: "simulation" | "write";
  selectedCategory: string | null;
  fileLimit: number | null;
  totals: {
    filesConsidered: number;
    filesModified: number;
    filesSimulated: number;
    filesSkipped: number;
    filesErrored: number;
    replacementsApplied: number;
    replacementsSkipped: number;
  };
  files: FileResult[];
};

type CategoryTransformer = (
  context: TransformContext,
) => TransformResult;

/*
|--------------------------------------------------------------------------
| Utilitaires
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
  return JSON.parse(
    fs.readFileSync(
      filePath,
      "utf8",
    ),
  ) as T;
}

function writeJson(
  filePath: string,
  value: unknown,
): void {
  ensureDirectory(filePath);

  fs.writeFileSync(
    filePath,
    JSON.stringify(
      value,
      null,
      2,
    ) + "\n",
    "utf8",
  );
}

function createTimestamp(): string {
  return new Date()
    .toISOString()
    .replace(/[:.]/g, "-");
}

function escapeKey(
  key: string,
): string {
  return JSON.stringify(key);
}

function dictionaryAccess(
  key: string,
): string {
  return `__i18n[${escapeKey(key)}]`;
}

function getScriptKind(
  filePath: string,
): ts.ScriptKind {
  if (filePath.endsWith(".tsx")) {
    return ts.ScriptKind.TSX;
  }

  if (filePath.endsWith(".jsx")) {
    return ts.ScriptKind.JSX;
  }

  if (filePath.endsWith(".js")) {
    return ts.ScriptKind.JS;
  }

  return ts.ScriptKind.TS;
}

function normalizeComparableText(
  value: string,
): string {
  return value
    .replace(/\s+/g, " ")
    .trim();
}

function getNodeLine(
  sourceFile: ts.SourceFile,
  node: ts.Node,
): number {
  return (
    sourceFile
      .getLineAndCharacterOfPosition(
        node.getStart(sourceFile),
      )
      .line + 1
  );
}

function entryMatchesNode(
  entry: GeneratedEntry,
  sourceFile: ts.SourceFile,
  node: ts.Node,
  rawText: string,
): boolean {
  return (
    getNodeLine(
      sourceFile,
      node,
    ) === entry.line &&
    normalizeComparableText(rawText) ===
      normalizeComparableText(
        entry.text,
      )
  );
}

function createRelativeImportPath(
  sourceFile: string,
  dictionaryFile: string,
): string {
  const sourceDirectory =
    path.dirname(
      path.join(
        PROJECT_ROOT,
        sourceFile,
      ),
    );

  const absoluteDictionary =
    path.join(
      PROJECT_ROOT,
      dictionaryFile,
    );

  let relative =
    normalizePath(
      path.relative(
        sourceDirectory,
        absoluteDictionary,
      ),
    );

  if (!relative.startsWith(".")) {
    relative = `./${relative}`;
  }

  return relative;
}

function addDictionaryImport(
  sourceText: string,
  importPath: string,
): string {
  const importLine =
    `import __i18n from ${JSON.stringify(importPath)};\n`;

  /*
   * Retire d'abord tout ancien import __i18n.
   * Il sera ensuite replacé au bon endroit.
   */
  const sourceWithoutImport =
    sourceText.replace(
      /import\s+__i18n\s+from\s+["'][^"']+["'];?\s*/,
      "",
    );

  /*
   * Une directive "use client" ou "use server" doit rester avant
   * tous les imports. Les commentaires placés au début du fichier
   * sont permis et sont conservés.
   */
  const directiveMatch =
    sourceWithoutImport.match(
      /^((?:(?:\s+)|(?:\/\/[^\n]*(?:\n|$))|(?:\/\*[\s\S]*?\*\/))*)(["'])use (client|server)\2;\s*/,
    );

  if (directiveMatch) {
    const position =
      directiveMatch[0].length;

    return (
      sourceWithoutImport.slice(
        0,
        position,
      ) +
      "\n" +
      importLine +
      sourceWithoutImport.slice(
        position,
      )
    );
  }

  return importLine + sourceWithoutImport;
}

function applyReplacements(
  sourceText: string,
  replacements: Replacement[],
): string {
  const sorted =
    [...replacements].sort(
      (first, second) =>
        second.start - first.start,
    );

  let output = sourceText;

  for (const replacement of sorted) {
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

function hasSyntaxErrors(
  filePath: string,
  sourceText: string,
): boolean {
  const result =
    ts.transpileModule(
      sourceText,
      {
        fileName: filePath,
        reportDiagnostics: true,
        compilerOptions: {
          target:
            ts.ScriptTarget.ES2022,
          module:
            ts.ModuleKind.ESNext,
          moduleResolution:
            ts.ModuleResolutionKind.NodeJs,
          jsx:
            ts.JsxEmit.Preserve,
          allowJs: true,
          resolveJsonModule: true,
          esModuleInterop: true,
        },
      },
    );

  return (
    result.diagnostics?.some(
      (diagnostic) =>
        diagnostic.category ===
        ts.DiagnosticCategory.Error,
    ) ?? false
  );
}

function backupFile(
  sourceFile: string,
  timestamp: string,
): void {
  const absoluteSource =
    path.join(
      PROJECT_ROOT,
      sourceFile,
    );

  const backupPath =
    path.join(
      BACKUP_ROOT,
      timestamp,
      sourceFile,
    );

  ensureDirectory(backupPath);

  fs.copyFileSync(
    absoluteSource,
    backupPath,
  );
}

/*
|--------------------------------------------------------------------------
| Chargement du plan
|--------------------------------------------------------------------------
*/

function loadPlan(): MigrationPlan {
  if (!fs.existsSync(PLAN_FILE)) {
    throw new Error(
      [
        "Le plan de migration est introuvable.",
        `Fichier attendu : ${path.relative(
          PROJECT_ROOT,
          PLAN_FILE,
        )}`,
        "Exécute d’abord : npm run i18n:prepare",
      ].join("\n"),
    );
  }

  return readJson<MigrationPlan>(
    PLAN_FILE,
  );
}

/*
|--------------------------------------------------------------------------
| Recherche des nœuds
|--------------------------------------------------------------------------
*/

function buildReplacement(
  entry: GeneratedEntry,
  sourceFile: ts.SourceFile,
  node: ts.Node,
): Replacement | null {
  const access =
    dictionaryAccess(
      entry.key,
    );

  if (
    entry.kind === "jsx-text" &&
    ts.isJsxText(node)
  ) {
    return {
      start:
        node.getStart(sourceFile),
      end:
        node.getEnd(),
      value:
        `{${access}}`,
      key:
        entry.key,
      original:
        entry.text,
      kind:
        entry.kind,
      line:
        entry.line,
    };
  }

  if (
    entry.kind === "jsx-attribute" &&
    ts.isStringLiteral(node)
  ) {
    return {
      start:
        node.getStart(sourceFile),
      end:
        node.getEnd(),
      value:
        `{${access}}`,
      key:
        entry.key,
      original:
        entry.text,
      kind:
        entry.kind,
      line:
        entry.line,
    };
  }

  if (
    entry.kind === "string" &&
    (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(
        node,
      )
    )
  ) {
    return {
      start:
        node.getStart(sourceFile),
      end:
        node.getEnd(),
      value:
        access,
      key:
        entry.key,
      original:
        entry.text,
      kind:
        entry.kind,
      line:
        entry.line,
    };
  }

  return null;
}

function findReplacement(
  entry: GeneratedEntry,
  sourceFile: ts.SourceFile,
): Replacement | null {
  let found:
    Replacement | null = null;

  function visit(
    node: ts.Node,
  ): void {
    if (found) {
      return;
    }

    if (
      entry.kind === "jsx-text" &&
      ts.isJsxText(node) &&
      entryMatchesNode(
        entry,
        sourceFile,
        node,
        node.getText(sourceFile),
      )
    ) {
      found =
        buildReplacement(
          entry,
          sourceFile,
          node,
        );
      return;
    }

    if (
      entry.kind === "jsx-attribute" &&
      ts.isJsxAttribute(node) &&
      node.initializer &&
      ts.isStringLiteral(
        node.initializer,
      ) &&
      entryMatchesNode(
        entry,
        sourceFile,
        node,
        node.initializer.text,
      )
    ) {
      found =
        buildReplacement(
          entry,
          sourceFile,
          node.initializer,
        );
      return;
    }

    if (
      entry.kind === "string" &&
      (
        ts.isStringLiteral(node) ||
        ts.isNoSubstitutionTemplateLiteral(
          node,
        )
      ) &&
      entryMatchesNode(
        entry,
        sourceFile,
        node,
        node.text,
      )
    ) {
      found =
        buildReplacement(
          entry,
          sourceFile,
          node,
        );
      return;
    }

    ts.forEachChild(
      node,
      visit,
    );
  }

  visit(sourceFile);

  return found;
}

function collectSafeReplacements(
  context: TransformContext,
  allowedKinds: Set<TextKind>,
): TransformResult {
  const replacements:
    Replacement[] = [];

  const skippedReasons:
    string[] = [];

  for (
    const entry of
      context.group.entries
  ) {
    if (
      !allowedKinds.has(
        entry.kind,
      )
    ) {
      skippedReasons.push(
        `Type ignoré (${entry.kind}) à la ligne ${entry.line}.`,
      );
      continue;
    }

    const replacement =
      findReplacement(
        entry,
        context.sourceFile,
      );

    if (replacement) {
      replacements.push(
        replacement,
      );
    } else {
      skippedReasons.push(
        `Texte non retrouvé à la ligne ${entry.line} : ${entry.text.slice(
          0,
          100,
        )}`,
      );
    }
  }

  return {
    replacements,
    skippedReasons,
    importRequired:
      replacements.length > 0,
  };
}

/*
|--------------------------------------------------------------------------
| Transformateurs par catégorie
|--------------------------------------------------------------------------
*/

const transformLib:
  CategoryTransformer =
  (context) =>
    collectSafeReplacements(
      context,
      new Set<TextKind>([
        "string",
      ]),
    );

const transformComponent:
  CategoryTransformer =
  (context) =>
    collectSafeReplacements(
      context,
      new Set<TextKind>([
        "jsx-text",
        "jsx-attribute",
        "string",
      ]),
    );

const transformPdf:
  CategoryTransformer =
  (context) =>
    collectSafeReplacements(
      context,
      new Set<TextKind>([
        "jsx-text",
        "jsx-attribute",
        "string",
      ]),
    );

const transformApp:
  CategoryTransformer =
  (context) =>
    collectSafeReplacements(
      context,
      new Set<TextKind>([
        "jsx-text",
        "jsx-attribute",
        "string",
      ]),
    );

const TRANSFORMERS:
  Record<
    AuditCategory,
    CategoryTransformer
  > = {
    lib:
      transformLib,
    component:
      transformComponent,
    pdf:
      transformPdf,
    app:
      transformApp,
  };

/*
|--------------------------------------------------------------------------
| Migration d’un fichier
|--------------------------------------------------------------------------
*/

function migrateFile(
  group: FileGroup,
  timestamp: string,
): FileResult {
  const absoluteSource =
    path.join(
      PROJECT_ROOT,
      group.sourceFile,
    );

  if (
    !fs.existsSync(
      absoluteSource,
    )
  ) {
    return {
      sourceFile:
        group.sourceFile,
      category:
        group.category,
      dictionaryFile:
        group.outputFile,
      status:
        "skipped",
      replacementsApplied:
        0,
      replacementsSkipped:
        group.entries.length,
      reasons: [
        "Fichier source introuvable.",
      ],
    };
  }

  const originalSource =
    fs.readFileSync(
      absoluteSource,
      "utf8",
    );

  const sourceFile =
    ts.createSourceFile(
      absoluteSource,
      originalSource,
      ts.ScriptTarget.Latest,
      true,
      getScriptKind(
        absoluteSource,
      ),
    );

  const context:
    TransformContext = {
      group,
      absoluteSource,
      originalSource,
      sourceFile,
    };

  const transformer =
    TRANSFORMERS[
      group.category
    ];

  const transformed =
    transformer(context);

  const importPath =
    createRelativeImportPath(
      group.sourceFile,
      group.outputFile,
    );

  /*
   * Répare toujours un ancien import i18n, même lorsqu'aucun texte
   * français ne reste à migrer dans le fichier.
   */
  if (
    transformed.replacements.length ===
    0
  ) {
    const repairedSource =
      addDictionaryImport(
        originalSource,
        importPath,
      );

    const importWasRepaired =
      repairedSource !== originalSource;

    if (importWasRepaired) {
      if (
        hasSyntaxErrors(
          absoluteSource,
          repairedSource,
        )
      ) {
        return {
          sourceFile:
            group.sourceFile,
          category:
            group.category,
          dictionaryFile:
            group.outputFile,
          status:
            "error",
          replacementsApplied:
            0,
          replacementsSkipped:
            group.entries.length,
          reasons: [
            "La réparation de l’import i18n produit une erreur de syntaxe.",
            ...transformed.skippedReasons,
          ],
        };
      }

      if (WRITE_MODE) {
        backupFile(
          group.sourceFile,
          timestamp,
        );

        fs.writeFileSync(
          absoluteSource,
          repairedSource,
          "utf8",
        );
      }

      return {
        sourceFile:
          group.sourceFile,
        category:
          group.category,
        dictionaryFile:
          group.outputFile,
        status:
          WRITE_MODE
            ? "modified"
            : "simulated",
        replacementsApplied:
          0,
        replacementsSkipped:
          group.entries.length,
        reasons: [
          "Import i18n existant réparé.",
          ...transformed.skippedReasons,
        ],
      };
    }

    return {
      sourceFile:
        group.sourceFile,
      category:
        group.category,
      dictionaryFile:
        group.outputFile,
      status:
        "skipped",
      replacementsApplied:
        0,
      replacementsSkipped:
        group.entries.length,
      reasons:
        transformed.skippedReasons.length
          ? transformed.skippedReasons
          : [
              "Aucun remplacement sûr trouvé.",
            ],
    };
  }

  let migratedSource =
    applyReplacements(
      originalSource,
      transformed.replacements,
    );

  migratedSource =
    addDictionaryImport(
      migratedSource,
      importPath,
    );

  if (
    hasSyntaxErrors(
      absoluteSource,
      migratedSource,
    )
  ) {
    return {
      sourceFile:
        group.sourceFile,
      category:
        group.category,
      dictionaryFile:
        group.outputFile,
      status:
        "error",
      replacementsApplied:
        0,
      replacementsSkipped:
        group.entries.length,
      reasons: [
        "La transformation produit une erreur de syntaxe. Le fichier n’a pas été modifié.",
        ...transformed.skippedReasons,
      ],
    };
  }

  if (WRITE_MODE) {
    backupFile(
      group.sourceFile,
      timestamp,
    );

    fs.writeFileSync(
      absoluteSource,
      migratedSource,
      "utf8",
    );
  }

  return {
    sourceFile:
      group.sourceFile,
    category:
      group.category,
    dictionaryFile:
      group.outputFile,
    status:
      WRITE_MODE
        ? "modified"
        : "simulated",
    replacementsApplied:
      transformed.replacements.length,
    replacementsSkipped:
      group.entries.length -
      transformed.replacements.length,
    reasons:
      transformed.skippedReasons,
  };
}

/*
|--------------------------------------------------------------------------
| Rapport
|--------------------------------------------------------------------------
*/

function createReport(
  results: FileResult[],
): MigrationReport {
  return {
    generatedAt:
      new Date().toISOString(),
    mode:
      WRITE_MODE
        ? "write"
        : "simulation",
    selectedCategory:
      SELECTED_CATEGORY,
    fileLimit:
      Number.isFinite(
        FILE_LIMIT,
      )
        ? FILE_LIMIT
        : null,
    totals: {
      filesConsidered:
        results.length,
      filesModified:
        results.filter(
          (result) =>
            result.status ===
            "modified",
        ).length,
      filesSimulated:
        results.filter(
          (result) =>
            result.status ===
            "simulated",
        ).length,
      filesSkipped:
        results.filter(
          (result) =>
            result.status ===
            "skipped",
        ).length,
      filesErrored:
        results.filter(
          (result) =>
            result.status ===
            "error",
        ).length,
      replacementsApplied:
        results.reduce(
          (
            total,
            result,
          ) =>
            total +
            result.replacementsApplied,
          0,
        ),
      replacementsSkipped:
        results.reduce(
          (
            total,
            result,
          ) =>
            total +
            result.replacementsSkipped,
          0,
        ),
    },
    files:
      results,
  };
}

/*
|--------------------------------------------------------------------------
| Exécution
|--------------------------------------------------------------------------
*/

function main(): void {
  const plan =
    loadPlan();

  const timestamp =
    createTimestamp();

  let groups =
    [...plan.files];

  if (SELECTED_CATEGORY) {
    const validCategories:
      AuditCategory[] = [
        "app",
        "component",
        "pdf",
        "lib",
      ];

    if (
      !validCategories.includes(
        SELECTED_CATEGORY as AuditCategory,
      )
    ) {
      throw new Error(
        `Catégorie invalide : ${SELECTED_CATEGORY}`,
      );
    }

    groups =
      groups.filter(
        (group) =>
          group.category ===
          SELECTED_CATEGORY,
      );
  }

  groups =
    groups.slice(
      0,
      FILE_LIMIT,
    );

  const results =
    groups.map(
      (group) =>
        migrateFile(
          group,
          timestamp,
        ),
    );

  const report =
    createReport(
      results,
    );

  const reportFile =
    path.join(
      REPORT_ROOT,
      WRITE_MODE
        ? "migration-v8-write.json"
        : "migration-v8-simulation.json",
    );

  writeJson(
    reportFile,
    report,
  );

  console.log("");
  console.log(
    WRITE_MODE
      ? "Migration i18n V8 terminée."
      : "Simulation i18n V8 terminée.",
  );
  console.log(
    `Fichiers considérés : ${report.totals.filesConsidered}`,
  );
  console.log(
    `Fichiers modifiés : ${report.totals.filesModified}`,
  );
  console.log(
    `Fichiers simulés : ${report.totals.filesSimulated}`,
  );
  console.log(
    `Fichiers ignorés : ${report.totals.filesSkipped}`,
  );
  console.log(
    `Fichiers en erreur : ${report.totals.filesErrored}`,
  );
  console.log(
    `Remplacements appliqués : ${report.totals.replacementsApplied}`,
  );
  console.log(
    `Remplacements ignorés : ${report.totals.replacementsSkipped}`,
  );
  console.log(
    `Rapport : ${path.relative(
      PROJECT_ROOT,
      reportFile,
    )}`,
  );

  if (WRITE_MODE) {
    console.log(
      `Sauvegarde : ${path.relative(
        PROJECT_ROOT,
        path.join(
          BACKUP_ROOT,
          timestamp,
        ),
      )}`,
    );
  }

  console.log("");
}

main();
