/*
|--------------------------------------------------------------------------
| i18n-migrate V3
|--------------------------------------------------------------------------
|
| Migration automatique prudente pour Luna Astralis.
|
| - Lit i18n-generated/migration-plan.json
| - Sauvegarde les fichiers avant modification
| - Remplace les textes simples par un dictionnaire français généré
| - Ajoute automatiquement l’import du dictionnaire
| - Ignore les cas ambigus au lieu de casser le fichier
| - Mode simulation par défaut
| - Utiliser --write pour appliquer les changements
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
  "i18n-generated",
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

const FILE_LIMIT =
  LIMIT_ARGUMENT
    ? Number(
        LIMIT_ARGUMENT.split("=")[1],
      )
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

function escapeForJsonAccess(
  key: string,
): string {
  return JSON.stringify(key);
}

function createDictionaryAccess(
  key: string,
): string {
  return `__i18n[${escapeForJsonAccess(key)}]`;
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

  relative = relative.replace(
    /\.json$/i,
    "",
  );

  if (
    !relative.startsWith(".")
  ) {
    relative = `./${relative}`;
  }

  return relative;
}

function addDictionaryImport(
  sourceText: string,
  importPath: string,
): string {
  if (
    sourceText.includes(
      'import __i18n from',
    )
  ) {
    return sourceText;
  }

  const importLine =
    `import __i18n from ${JSON.stringify(importPath)};\n`;

  const shebangMatch =
    sourceText.match(/^#!.*\n/);

  if (shebangMatch) {
    return (
      shebangMatch[0] +
      importLine +
      sourceText.slice(
        shebangMatch[0].length,
      )
    );
  }

  return importLine + sourceText;
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
| Recherche AST
|--------------------------------------------------------------------------
*/

function getScriptKind(
  filePath: string,
): ts.ScriptKind {
  if (
    filePath.endsWith(".tsx")
  ) {
    return ts.ScriptKind.TSX;
  }

  if (
    filePath.endsWith(".jsx")
  ) {
    return ts.ScriptKind.JSX;
  }

  if (
    filePath.endsWith(".js")
  ) {
    return ts.ScriptKind.JS;
  }

  return ts.ScriptKind.TS;
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

function normalizeComparableText(
  value: string,
): string {
  return value
    .replace(/\s+/g, " ")
    .trim();
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

function buildReplacementForNode(
  entry: GeneratedEntry,
  sourceFile: ts.SourceFile,
  node: ts.Node,
): Replacement | null {
  const access =
    createDictionaryAccess(
      entry.key,
    );

  if (
    entry.kind === "jsx-text" &&
    ts.isJsxText(node)
  ) {
    return {
      start: node.getStart(sourceFile),
      end: node.getEnd(),
      value: `{${access}}`,
      key: entry.key,
      original: entry.text,
      kind: entry.kind,
      line: entry.line,
    };
  }

  if (
    entry.kind === "jsx-attribute" &&
    ts.isStringLiteral(node)
  ) {
    return {
      start: node.getStart(sourceFile),
      end: node.getEnd(),
      value: `{${access}}`,
      key: entry.key,
      original: entry.text,
      kind: entry.kind,
      line: entry.line,
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
      start: node.getStart(sourceFile),
      end: node.getEnd(),
      value: access,
      key: entry.key,
      original: entry.text,
      kind: entry.kind,
      line: entry.line,
    };
  }

  return null;
}

function findReplacement(
  entry: GeneratedEntry,
  sourceFile: ts.SourceFile,
): Replacement | null {
  let found: Replacement | null =
    null;

  function visit(
    node: ts.Node,
  ): void {
    if (found) {
      return;
    }

    if (
      entry.kind === "jsx-text" &&
      ts.isJsxText(node)
    ) {
      const rawText =
        node.getText(sourceFile);

      if (
        entryMatchesNode(
          entry,
          sourceFile,
          node,
          rawText,
        )
      ) {
        found =
          buildReplacementForNode(
            entry,
            sourceFile,
            node,
          );
        return;
      }
    }

    if (
      entry.kind === "jsx-attribute" &&
      ts.isJsxAttribute(node) &&
      node.initializer &&
      ts.isStringLiteral(
        node.initializer,
      )
    ) {
      if (
        entryMatchesNode(
          entry,
          sourceFile,
          node,
          node.initializer.text,
        )
      ) {
        found =
          buildReplacementForNode(
            entry,
            sourceFile,
            node.initializer,
          );
        return;
      }
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
      if (
        entryMatchesNode(
          entry,
          sourceFile,
          node,
          node.text,
        )
      ) {
        found =
          buildReplacementForNode(
            entry,
            sourceFile,
            node,
          );
        return;
      }
    }

    ts.forEachChild(
      node,
      visit,
    );
  }

  visit(sourceFile);

  return found;
}

/*
|--------------------------------------------------------------------------
| Validation simple
|--------------------------------------------------------------------------
*/

function hasParseErrors(
  filePath: string,
  sourceText: string,
): boolean {
  const parsed =
    ts.createSourceFile(
      filePath,
      sourceText,
      ts.ScriptTarget.Latest,
      true,
      getScriptKind(filePath),
    );

  return (
    parsed.parseDiagnostics.length > 0
  );
}

/*
|--------------------------------------------------------------------------
| Sauvegarde
|--------------------------------------------------------------------------
*/

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

  const reasons: string[] = [];

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
      status: "skipped",
      replacementsApplied: 0,
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

  const replacements: Replacement[] =
    [];

  for (
    const entry of group.entries
  ) {
    const replacement =
      findReplacement(
        entry,
        sourceFile,
      );

    if (replacement) {
      replacements.push(
        replacement,
      );
    } else {
      reasons.push(
        `Texte ignoré à la ligne ${entry.line} : ${entry.text.slice(
          0,
          100,
        )}`,
      );
    }
  }

  if (
    replacements.length === 0
  ) {
    return {
      sourceFile:
        group.sourceFile,
      category:
        group.category,
      dictionaryFile:
        group.outputFile,
      status: "skipped",
      replacementsApplied: 0,
      replacementsSkipped:
        group.entries.length,
      reasons:
        reasons.length > 0
          ? reasons
          : [
              "Aucun remplacement sûr trouvé.",
            ],
    };
  }

  let migratedSource =
    applyReplacements(
      originalSource,
      replacements,
    );

  const importPath =
    createRelativeImportPath(
      group.sourceFile,
      group.outputFile,
    );

  migratedSource =
    addDictionaryImport(
      migratedSource,
      importPath,
    );

  if (
    hasParseErrors(
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
      status: "error",
      replacementsApplied: 0,
      replacementsSkipped:
        group.entries.length,
      reasons: [
        "La transformation produit une erreur de syntaxe. Le fichier n’a pas été modifié.",
        ...reasons,
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
      replacements.length,
    replacementsSkipped:
      group.entries.length -
      replacements.length,
    reasons,
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
      Number.isFinite(FILE_LIMIT)
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
    files: results,
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
    groups = groups.filter(
      (group) =>
        group.category ===
        SELECTED_CATEGORY,
    );
  }

  groups = groups.slice(
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
    createReport(results);

  const reportFile =
    path.join(
      REPORT_ROOT,
      WRITE_MODE
        ? "migration-write.json"
        : "migration-simulation.json",
    );

  writeJson(
    reportFile,
    report,
  );

  console.log("");
  console.log(
    WRITE_MODE
      ? "Migration i18n V3 terminée."
      : "Simulation i18n V3 terminée.",
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
