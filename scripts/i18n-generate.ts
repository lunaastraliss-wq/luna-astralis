/*
|--------------------------------------------------------------------------
| i18n-generate V2
|--------------------------------------------------------------------------
|
| Générateur intelligent pour Luna Astralis.
| Compatible avec le nouvel audit classé par app, component, pdf et lib.
|
*/

import fs from "node:fs";
import path from "node:path";

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/

const PROJECT_ROOT = process.cwd();

const AUDIT_DIRECTORY = path.join(
  PROJECT_ROOT,
  "i18n-audit",
);

const AUDIT_FILE = path.join(
  AUDIT_DIRECTORY,
  "hardcoded-texts.json",
);

const AUDIT_SUMMARY_FILE = path.join(
  AUDIT_DIRECTORY,
  "summary.json",
);

const OUTPUT_ROOT = path.join(
  PROJECT_ROOT,
  "i18n-generated",
);

const SOURCE_LOCALE = "fr";

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

function readJson<T>(
  filePath: string,
): T {
  const raw = fs.readFileSync(
    filePath,
    "utf8",
  );

  return JSON.parse(raw) as T;
}

function sanitizeSegment(
  value: string,
): string {
  const cleaned = value
    .replace(/\.(tsx?|jsx?)$/i, "")
    .replace(/\[[^\]]+\]/g, "")
    .replace(/\([^)]*\)/g, "")
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

  return cleaned || "index";
}

function createNamespace(
  sourceFile: string,
): string {
  return normalizePath(sourceFile)
    .split("/")
    .filter(Boolean)
    .map(sanitizeSegment)
    .join(".");
}

function createOutputFile(
  sourceFile: string,
): string {
  const normalized =
    normalizePath(sourceFile);

  const withoutExtension =
    normalized.replace(
      /\.(tsx?|jsx?)$/i,
      "",
    );

  const segments = withoutExtension
    .split("/")
    .filter(Boolean)
    .map(sanitizeSegment);

  return normalizePath(
    path.relative(
      PROJECT_ROOT,
      path.join(
        OUTPUT_ROOT,
        SOURCE_LOCALE,
        ...segments,
      ) + ".json",
    ),
  );
}

function createStableKey(
  entry: AuditEntry,
  usedKeys: Set<string>,
): string {
  const rawKey =
    entry.suggestedKey
      .split(".")
      .at(-1) || "text";

  const base = rawKey
    .replace(
      /[^a-zA-Z0-9_]+/g,
      "_",
    )
    .replace(
      /^_+|_+$/g,
      "",
    )
    .toLowerCase() || "text";

  let key = base;
  let counter = 2;

  while (usedKeys.has(key)) {
    key = `${base}_${counter}`;
    counter += 1;
  }

  usedKeys.add(key);

  return key;
}

function getPriorityWeight(
  category: AuditCategory,
): number {
  const weights: Record<
    AuditCategory,
    number
  > = {
    lib: 4000,
    component: 3000,
    pdf: 2000,
    app: 1000,
  };

  return weights[category];
}

function calculatePriorityScore(
  category: AuditCategory,
  textCount: number,
): number {
  return (
    getPriorityWeight(category) +
    Math.min(textCount, 999)
  );
}

/*
|--------------------------------------------------------------------------
| Lecture de l’audit
|--------------------------------------------------------------------------
*/

function loadAudit(): AuditEntry[] {
  if (!fs.existsSync(AUDIT_FILE)) {
    throw new Error(
      [
        "Le rapport d’audit est introuvable.",
        `Fichier attendu : ${path.relative(
          PROJECT_ROOT,
          AUDIT_FILE,
        )}`,
        "Exécute d’abord : npm run i18n:audit",
      ].join("\n"),
    );
  }

  const parsed =
    readJson<unknown>(AUDIT_FILE);

  if (!Array.isArray(parsed)) {
    throw new Error(
      "hardcoded-texts.json doit contenir un tableau.",
    );
  }

  return parsed as AuditEntry[];
}

function loadAuditSummary():
  | AuditSummary
  | null {
  if (
    !fs.existsSync(
      AUDIT_SUMMARY_FILE,
    )
  ) {
    return null;
  }

  return readJson<AuditSummary>(
    AUDIT_SUMMARY_FILE,
  );
}

/*
|--------------------------------------------------------------------------
| Regroupement
|--------------------------------------------------------------------------
*/

function groupEntries(
  entries: AuditEntry[],
): FileGroup[] {
  const grouped =
    new Map<
      string,
      AuditEntry[]
    >();

  for (const entry of entries) {
    const file =
      normalizePath(entry.file);

    const current =
      grouped.get(file) ?? [];

    current.push(entry);
    grouped.set(file, current);
  }

  const groups: FileGroup[] = [];

  for (
    const [
      sourceFile,
      fileEntries,
    ] of grouped
  ) {
    const usedKeys =
      new Set<string>();

    const sortedEntries =
      [...fileEntries].sort(
        (first, second) => {
          if (
            first.line !== second.line
          ) {
            return (
              first.line -
              second.line
            );
          }

          return (
            first.column -
            second.column
          );
        },
      );

    const generatedEntries =
      sortedEntries.map(
        (entry) => ({
          key: createStableKey(
            entry,
            usedKeys,
          ),
          text: entry.text,
          sourceFile,
          line: entry.line,
          column: entry.column,
          kind: entry.kind,
          category: entry.category,
        }),
      );

    const category =
      sortedEntries[0]?.category ??
      "component";

    groups.push({
      sourceFile,
      category,
      namespace:
        createNamespace(
          sourceFile,
        ),
      outputFile:
        createOutputFile(
          sourceFile,
        ),
      textCount:
        generatedEntries.length,
      priorityScore:
        calculatePriorityScore(
          category,
          generatedEntries.length,
        ),
      entries:
        generatedEntries,
    });
  }

  return groups.sort(
    (first, second) => {
      if (
        first.priorityScore !==
        second.priorityScore
      ) {
        return (
          second.priorityScore -
          first.priorityScore
        );
      }

      return first.sourceFile.localeCompare(
        second.sourceFile,
      );
    },
  );
}

/*
|--------------------------------------------------------------------------
| Fichiers français générés
|--------------------------------------------------------------------------
*/

function generateLocaleFiles(
  groups: FileGroup[],
): void {
  for (const group of groups) {
    const outputPath =
      path.join(
        PROJECT_ROOT,
        group.outputFile,
      );

    const dictionary =
      Object.fromEntries(
        group.entries.map(
          (entry) => [
            entry.key,
            entry.text,
          ],
        ),
      );

    writeJson(
      outputPath,
      dictionary,
    );
  }
}

/*
|--------------------------------------------------------------------------
| Plan de migration
|--------------------------------------------------------------------------
*/

function countByCategory(
  groups: FileGroup[],
): MigrationPlan["categories"] {
  const categories:
    MigrationPlan["categories"] = {
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

  for (const group of groups) {
    categories[group.category].files += 1;
    categories[group.category].texts +=
      group.textCount;
  }

  return categories;
}

function generateMigrationPlan(
  groups: FileGroup[],
  summary: AuditSummary | null,
): MigrationPlan {
  const totalTexts =
    groups.reduce(
      (
        total,
        group,
      ) =>
        total +
        group.textCount,
      0,
    );

  return {
    generatedAt:
      new Date().toISOString(),
    sourceLocale:
      SOURCE_LOCALE,
    sourceAudit:
      normalizePath(
        path.relative(
          PROJECT_ROOT,
          AUDIT_FILE,
        ),
      ),
    sourceSummary:
      summary
        ? normalizePath(
            path.relative(
              PROJECT_ROOT,
              AUDIT_SUMMARY_FILE,
            ),
          )
        : null,
    totals: {
      files: groups.length,
      texts: totalTexts,
    },
    categories:
      countByCategory(groups),
    recommendedOrder: [
      "lib",
      "component",
      "pdf",
      "app",
    ],
    files: groups,
  };
}

/*
|--------------------------------------------------------------------------
| Rapports lisibles
|--------------------------------------------------------------------------
*/

function generateMarkdown(
  plan: MigrationPlan,
): string {
  const lines = [
    "# Plan de migration i18n — Luna Astralis",
    "",
    "## Résumé",
    "",
    `- Fichiers préparés : ${plan.totals.files}`,
    `- Textes préparés : ${plan.totals.texts}`,
    "",
    "## Ordre recommandé",
    "",
    "1. `lib` — données partagées et compatibilités",
    "2. `components` — composants réutilisés",
    "3. `pdf` — rapports et documents PDF",
    "4. `app` — pages restantes",
    "",
    "## Catégories",
    "",
    `- Lib et données : ${plan.categories.lib.files} fichiers / ${plan.categories.lib.texts} textes`,
    `- Composants : ${plan.categories.component.files} fichiers / ${plan.categories.component.texts} textes`,
    `- PDF et rapports : ${plan.categories.pdf.files} fichiers / ${plan.categories.pdf.texts} textes`,
    `- Pages : ${plan.categories.app.files} fichiers / ${plan.categories.app.texts} textes`,
    "",
    "## Fichiers prioritaires",
    "",
  ];

  for (
    const group of
      plan.files.slice(0, 100)
  ) {
    lines.push(
      `### ${group.sourceFile}`,
      "",
      `- Catégorie : \`${group.category}\``,
      `- Textes : ${group.textCount}`,
      `- Priorité : ${group.priorityScore}`,
      `- Namespace : \`${group.namespace}\``,
      `- Dictionnaire français : \`${group.outputFile}\``,
      "",
    );
  }

  if (
    plan.files.length > 100
  ) {
    lines.push(
      `> ${plan.files.length - 100} autres fichiers sont disponibles dans migration-plan.json.`,
      "",
    );
  }

  return lines.join("\n");
}

/*
|--------------------------------------------------------------------------
| Exécution
|--------------------------------------------------------------------------
*/

function main(): void {
  const entries =
    loadAudit();

  const summary =
    loadAuditSummary();

  const groups =
    groupEntries(entries);

  fs.rmSync(
    OUTPUT_ROOT,
    {
      recursive: true,
      force: true,
    },
  );

  generateLocaleFiles(groups);

  const plan =
    generateMigrationPlan(
      groups,
      summary,
    );

  writeJson(
    path.join(
      OUTPUT_ROOT,
      "migration-plan.json",
    ),
    plan,
  );

  writeJson(
    path.join(
      OUTPUT_ROOT,
      "top-priority.json",
    ),
    plan.files.slice(0, 50),
  );

  const readmePath =
    path.join(
      OUTPUT_ROOT,
      "README.md",
    );

  ensureDirectory(readmePath);

  fs.writeFileSync(
    readmePath,
    generateMarkdown(plan) + "\n",
    "utf8",
  );

  console.log("");
  console.log(
    "Préparation i18n intelligente terminée.",
  );
  console.log(
    `Fichiers préparés : ${plan.totals.files}`,
  );
  console.log(
    `Textes préparés : ${plan.totals.texts}`,
  );
  console.log("");
  console.log(
    `Lib et données : ${plan.categories.lib.files} fichiers / ${plan.categories.lib.texts} textes`,
  );
  console.log(
    `Composants : ${plan.categories.component.files} fichiers / ${plan.categories.component.texts} textes`,
  );
  console.log(
    `PDF et rapports : ${plan.categories.pdf.files} fichiers / ${plan.categories.pdf.texts} textes`,
  );
  console.log(
    `Pages : ${plan.categories.app.files} fichiers / ${plan.categories.app.texts} textes`,
  );
  console.log("");
  console.log(
    "Plan : i18n-generated/migration-plan.json",
  );
  console.log(
    "Priorités : i18n-generated/top-priority.json",
  );
  console.log(
    "Résumé : i18n-generated/README.md",
  );
  console.log("");
}

main();
