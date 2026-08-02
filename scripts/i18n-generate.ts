import fs from "node:fs";
import path from "node:path";

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/

const PROJECT_ROOT = process.cwd();

const AUDIT_FILE = path.join(
  PROJECT_ROOT,
  "i18n-audit",
  "hardcoded-texts.json",
);

const OUTPUT_ROOT = path.join(
  PROJECT_ROOT,
  "i18n-generated",
);

const SOURCE_LOCALE = "fr";

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

type GeneratedEntry = {
  key: string;
  text: string;
  file: string;
  line: number;
  column: number;
  kind: TextKind;
};

type FileGroup = {
  sourceFile: string;
  namespace: string;
  outputFile: string;
  entries: GeneratedEntry[];
};

/*
|--------------------------------------------------------------------------
| Utilitaires
|--------------------------------------------------------------------------
*/

function normalizePath(value: string): string {
  return value.replace(/\\/g, "/");
}

function sanitizeSegment(value: string): string {
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

function createNamespace(sourceFile: string): string {
  const normalized = normalizePath(sourceFile);

  return normalized
    .split("/")
    .filter(Boolean)
    .map(sanitizeSegment)
    .join(".");
}

function createOutputFile(sourceFile: string): string {
  const normalized = normalizePath(sourceFile);
  const withoutExtension = normalized.replace(/\.(tsx?|jsx?)$/i, "");

  const segments = withoutExtension
    .split("/")
    .filter(Boolean)
    .map(sanitizeSegment);

  return path.join(
    OUTPUT_ROOT,
    SOURCE_LOCALE,
    ...segments,
  ) + ".json";
}

function createStableKey(
  entry: AuditEntry,
  usedKeys: Set<string>,
): string {
  const rawLastSegment =
    entry.suggestedKey.split(".").at(-1) || "text";

  const base = rawLastSegment
    .replace(/[^a-zA-Z0-9_]+/g, "_")
    .replace(/^_+|_+$/g, "")
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

function ensureDirectory(filePath: string): void {
  fs.mkdirSync(path.dirname(filePath), {
    recursive: true,
  });
}

function writeJson(
  filePath: string,
  value: unknown,
): void {
  ensureDirectory(filePath);

  fs.writeFileSync(
    filePath,
    JSON.stringify(value, null, 2) + "\n",
    "utf8",
  );
}

/*
|--------------------------------------------------------------------------
| Génération
|--------------------------------------------------------------------------
*/

function loadAudit(): AuditEntry[] {
  if (!fs.existsSync(AUDIT_FILE)) {
    throw new Error(
      [
        "Le rapport d’audit est introuvable.",
        `Fichier attendu : ${path.relative(PROJECT_ROOT, AUDIT_FILE)}`,
        "Exécute d’abord : npm run i18n:audit",
      ].join("\n"),
    );
  }

  const raw = fs.readFileSync(AUDIT_FILE, "utf8");
  const parsed: unknown = JSON.parse(raw);

  if (!Array.isArray(parsed)) {
    throw new Error(
      "Le fichier hardcoded-texts.json doit contenir un tableau.",
    );
  }

  return parsed as AuditEntry[];
}

function groupEntries(
  entries: AuditEntry[],
): FileGroup[] {
  const grouped = new Map<string, AuditEntry[]>();

  for (const entry of entries) {
    const file = normalizePath(entry.file);
    const current = grouped.get(file) ?? [];
    current.push(entry);
    grouped.set(file, current);
  }

  const groups: FileGroup[] = [];

  for (const [sourceFile, fileEntries] of grouped) {
    const usedKeys = new Set<string>();

    const generatedEntries = fileEntries
      .sort((a, b) => {
        if (a.line !== b.line) return a.line - b.line;
        return a.column - b.column;
      })
      .map((entry) => ({
        key: createStableKey(entry, usedKeys),
        text: entry.text,
        file: sourceFile,
        line: entry.line,
        column: entry.column,
        kind: entry.kind,
      }));

    groups.push({
      sourceFile,
      namespace: createNamespace(sourceFile),
      outputFile: normalizePath(
        path.relative(
          PROJECT_ROOT,
          createOutputFile(sourceFile),
        ),
      ),
      entries: generatedEntries,
    });
  }

  return groups.sort((a, b) =>
    a.sourceFile.localeCompare(b.sourceFile),
  );
}

function generateLocaleFiles(
  groups: FileGroup[],
): void {
  for (const group of groups) {
    const outputPath = path.join(
      PROJECT_ROOT,
      group.outputFile,
    );

    const dictionary = Object.fromEntries(
      group.entries.map((entry) => [
        entry.key,
        entry.text,
      ]),
    );

    writeJson(outputPath, dictionary);
  }
}

function generateManifest(
  groups: FileGroup[],
): void {
  const manifest = {
    generatedAt: new Date().toISOString(),
    sourceLocale: SOURCE_LOCALE,
    sourceAudit: normalizePath(
      path.relative(PROJECT_ROOT, AUDIT_FILE),
    ),
    files: groups.map((group) => ({
      sourceFile: group.sourceFile,
      namespace: group.namespace,
      outputFile: group.outputFile,
      textCount: group.entries.length,
      replacements: group.entries,
    })),
  };

  writeJson(
    path.join(OUTPUT_ROOT, "migration-manifest.json"),
    manifest,
  );
}

function generateSummary(
  groups: FileGroup[],
): void {
  const totalTexts = groups.reduce(
    (sum, group) => sum + group.entries.length,
    0,
  );

  const lines = [
    "# Préparation i18n Luna Astralis",
    "",
    `Fichiers préparés : ${groups.length}`,
    `Textes préparés : ${totalTexts}`,
    "",
    "Les fichiers français générés se trouvent dans `i18n-generated/fr/`.",
    "",
    "Le fichier `migration-manifest.json` contient les emplacements exacts",
    "des textes à remplacer dans le code.",
    "",
  ];

  for (const group of groups) {
    lines.push(
      `## ${group.sourceFile}`,
      "",
      `- Namespace : \`${group.namespace}\``,
      `- Fichier généré : \`${group.outputFile}\``,
      `- Textes : ${group.entries.length}`,
      "",
    );
  }

  const summaryPath = path.join(
    OUTPUT_ROOT,
    "README.md",
  );

  ensureDirectory(summaryPath);
  fs.writeFileSync(
    summaryPath,
    lines.join("\n") + "\n",
    "utf8",
  );
}

/*
|--------------------------------------------------------------------------
| Exécution
|--------------------------------------------------------------------------
*/

function main(): void {
  const entries = loadAudit();
  const groups = groupEntries(entries);

  fs.rmSync(OUTPUT_ROOT, {
    recursive: true,
    force: true,
  });

  generateLocaleFiles(groups);
  generateManifest(groups);
  generateSummary(groups);

  const totalTexts = groups.reduce(
    (sum, group) => sum + group.entries.length,
    0,
  );

  console.log("");
  console.log("Préparation i18n terminée.");
  console.log(`Fichiers préparés : ${groups.length}`);
  console.log(`Textes préparés : ${totalTexts}`);
  console.log(
    `Dossier généré : ${path.relative(
      PROJECT_ROOT,
      OUTPUT_ROOT,
    )}`,
  );
  console.log("");
}

main();
