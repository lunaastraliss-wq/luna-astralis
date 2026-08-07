import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

/*
|--------------------------------------------------------------------------
| Paid PDF locale builder
|--------------------------------------------------------------------------
|
| Génère 6 copies localisées des PDF payants sans modifier les composants
| originaux. Les dictionnaires déjà créés dans i18n/migrated sont utilisés.
|
| Cibles :
| - CompatibilityPdf
| - EssentialPdf
| - PremiumPdf
| - SignaturePdf
| - HoroscopePdf (inclut day/root, month, year)
|
| Sortie :
| paid-pdf-generated/{fr,en,es,de,it,pt}/...
| paid-pdf-generated/wrappers/...
|
| Ce script doit être exécuté APRES i18n:prepare afin que
| i18n/migrated/migration-plan.json soit à jour.
|
*/

const PROJECT_ROOT = process.cwd();

const PLAN_FILE = path.join(
  PROJECT_ROOT,
  "i18n",
  "migrated",
  "migration-plan.json",
);

const OUTPUT_ROOT = path.join(
  PROJECT_ROOT,
  "paid-pdf-generated",
);

const REPORT_FILE = path.join(
  OUTPUT_ROOT,
  "generation-report.json",
);

const LOCALES = [
  "fr",
  "en",
  "es",
  "de",
  "it",
  "pt",
] as const;

type PaidPdfLocale =
  (typeof LOCALES)[number];

const PAID_ROOTS = [
  "CompatibilityPdf",
  "EssentialPdf",
  "PremiumPdf",
  "SignaturePdf",
  "HoroscopePdf",
] as const;

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

type GeneratedFileResult = {
  locale: PaidPdfLocale;
  sourceFile: string;
  outputFile: string;
  dictionaryFile: string | null;
  status:
    | "generated"
    | "copied"
    | "warning"
    | "error";
  replacementsApplied: number;
  reasons: string[];
};

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
    normalizeComparableText(
      rawText,
    ) ===
      normalizeComparableText(
        entry.text,
      )
  );
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
      entry.kind ===
        "jsx-attribute" &&
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

function applyReplacements(
  sourceText: string,
  replacements: Replacement[],
): string {
  const sorted =
    [...replacements].sort(
      (first, second) =>
        second.start - first.start,
    );

  let output =
    sourceText;

  for (
    const replacement of sorted
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

function getPaidRoot(
  sourceFile: string,
): string | null {
  const normalized =
    normalizePath(sourceFile);

  for (
    const root of PAID_ROOTS
  ) {
    const prefix =
      `components/${root}/`;

    if (
      normalized.startsWith(
        prefix,
      )
    ) {
      return root;
    }
  }

  return null;
}

function isPaidSourceFile(
  sourceFile: string,
): boolean {
  return Boolean(
    getPaidRoot(sourceFile),
  );
}

function localeDictionaryFile(
  frenchDictionaryFile: string,
  locale: PaidPdfLocale,
): string {
  const normalized =
    normalizePath(
      frenchDictionaryFile,
    );

  const marker =
    "/migrated/fr/";

  if (
    normalized.includes(marker)
  ) {
    return normalized.replace(
      marker,
      `/migrated/${locale}/`,
    );
  }

  return normalized.replace(
    /(^|\/)fr(\/)/,
    `$1${locale}$2`,
  );
}

function generatedRelativePath(
  sourceFile: string,
  locale: PaidPdfLocale,
): string {
  const normalized =
    normalizePath(sourceFile);

  const withoutComponents =
    normalized.replace(
      /^components\//,
      "",
    );

  return normalizePath(
    path.join(
      "paid-pdf-generated",
      locale,
      withoutComponents,
    ),
  );
}

function relativeImportPath(
  sourceRelativeFile: string,
  targetRelativeFile: string,
): string {
  const sourceDirectory =
    path.dirname(
      path.join(
        PROJECT_ROOT,
        sourceRelativeFile,
      ),
    );

  const targetAbsolute =
    path.join(
      PROJECT_ROOT,
      targetRelativeFile,
    );

  let relative =
    normalizePath(
      path.relative(
        sourceDirectory,
        targetAbsolute,
      ),
    );

  if (
    !relative.startsWith(".")
  ) {
    relative =
      `./${relative}`;
  }

  return relative;
}

function repairDictionaryImport(
  sourceText: string,
  importPath: string,
): string {
  const importLine =
    `import __i18n from ${JSON.stringify(importPath)};\n`;

  const withoutOldImport =
    sourceText.replace(
      /import\s+__i18n\s+from\s+["'][^"']+["'];?\s*/g,
      "",
    );

  const directiveMatch =
    withoutOldImport.match(
      /^((?:(?:\s+)|(?:\/\/[^\n]*(?:\n|$))|(?:\/\*[\s\S]*?\*\/))*)(["'])use (client|server)\2;\s*/,
    );

  if (
    directiveMatch
  ) {
    const position =
      directiveMatch[0].length;

    return (
      withoutOldImport.slice(
        0,
        position,
      ) +
      "\n" +
      importLine +
      withoutOldImport.slice(
        position,
      )
    );
  }

  return (
    importLine +
    withoutOldImport
  );
}

function removeDictionaryImport(
  sourceText: string,
): string {
  return sourceText.replace(
    /import\s+__i18n\s+from\s+["'][^"']+["'];?\s*/g,
    "",
  );
}

function rewriteDefaultLocale(
  sourceText: string,
  locale: PaidPdfLocale,
): string {
  if (
    locale === "fr"
  ) {
    return sourceText;
  }

  return sourceText
    .replace(
      /\blocale\s*=\s*["']fr["']/g,
      `locale = "${locale}"`,
    )
    .replace(
      /\blocale:\s*["']fr["']/g,
      `locale: "${locale}"`,
    );
}

function rewriteProjectImports(
  sourceText: string,
  originalSourceFile: string,
  locale: PaidPdfLocale,
): string {
  const originalDirectory =
    path.dirname(
      path.join(
        PROJECT_ROOT,
        originalSourceFile,
      ),
    );

  const generatedFile =
    generatedRelativePath(
      originalSourceFile,
      locale,
    );

  const generatedDirectory =
    path.dirname(
      path.join(
        PROJECT_ROOT,
        generatedFile,
      ),
    );

  const replaceSpecifier = (
    specifier: string,
  ): string => {
    /*
     * Imports absolus vers un des 5 dossiers PDF :
     * on les redirige vers la copie générée de la langue.
     */
    for (
      const root of PAID_ROOTS
    ) {
      const prefix =
        `@/components/${root}`;

      if (
        specifier === prefix ||
        specifier.startsWith(
          `${prefix}/`,
        )
      ) {
        return specifier.replace(
          prefix,
          `@/paid-pdf-generated/${locale}/${root}`,
        );
      }
    }

    if (
      !specifier.startsWith(".")
    ) {
      return specifier;
    }

    const resolved =
      path.resolve(
        originalDirectory,
        specifier,
      );

    const resolvedRelative =
      normalizePath(
        path.relative(
          PROJECT_ROOT,
          resolved,
        ),
      );

    /*
     * Si l'import reste à l'intérieur du même dossier PDF,
     * la même structure relative existe dans la copie générée.
     */
    const paidRoot =
      getPaidRoot(
        normalizePath(
          path.join(
            path.dirname(
              originalSourceFile,
            ),
            specifier,
          ),
        ),
      );

    if (
      paidRoot
    ) {
      return specifier;
    }

    /*
     * Pour un import relatif qui sort du dossier PDF (ex. i18n),
     * on le convertit en alias projet afin qu'il continue de pointer
     * vers la source réelle malgré la profondeur du dossier généré.
     */
    if (
      !resolvedRelative.startsWith(
        "..",
      )
    ) {
      return `@/${resolvedRelative}`;
    }

    /*
     * Si l'import est réellement externe au projet, on conserve
     * le chemin original.
     */
    const generatedRelative =
      normalizePath(
        path.relative(
          generatedDirectory,
          resolved,
        ),
      );

    if (
      generatedRelative.startsWith(
        "..",
      )
    ) {
      return specifier;
    }

    return generatedRelative.startsWith(
      ".",
    )
      ? generatedRelative
      : `./${generatedRelative}`;
  };

  return sourceText.replace(
    /((?:from\s+)|(?:import\s*\())(["'])([^"']+)\2/g,
    (
      full,
      prefix: string,
      quote: string,
      specifier: string,
    ) => {
      const next =
        replaceSpecifier(
          specifier,
        );

      return `${prefix}${quote}${next}${quote}`;
    },
  );
}

function copyDirectoryRecursive(
  sourceDirectory: string,
  targetDirectory: string,
): void {
  fs.mkdirSync(
    targetDirectory,
    {
      recursive: true,
    },
  );

  for (
    const entry of
      fs.readdirSync(
        sourceDirectory,
        {
          withFileTypes: true,
        },
      )
  ) {
    const sourcePath =
      path.join(
        sourceDirectory,
        entry.name,
      );

    const targetPath =
      path.join(
        targetDirectory,
        entry.name,
      );

    if (
      entry.isDirectory()
    ) {
      copyDirectoryRecursive(
        sourcePath,
        targetPath,
      );
    } else {
      ensureDirectory(
        targetPath,
      );

      fs.copyFileSync(
        sourcePath,
        targetPath,
      );
    }
  }
}

function generateLocalizedFile(
  group: FileGroup,
  locale: PaidPdfLocale,
): GeneratedFileResult {
  const sourceAbsolute =
    path.join(
      PROJECT_ROOT,
      group.sourceFile,
    );

  const outputRelative =
    generatedRelativePath(
      group.sourceFile,
      locale,
    );

  const outputAbsolute =
    path.join(
      PROJECT_ROOT,
      outputRelative,
    );

  if (
    !fs.existsSync(
      sourceAbsolute,
    )
  ) {
    return {
      locale,
      sourceFile:
        group.sourceFile,
      outputFile:
        outputRelative,
      dictionaryFile:
        null,
      status:
        "error",
      replacementsApplied:
        0,
      reasons: [
        "Fichier source introuvable.",
      ],
    };
  }

  const dictionaryRelative =
    localeDictionaryFile(
      group.outputFile,
      locale,
    );

  const dictionaryAbsolute =
    path.join(
      PROJECT_ROOT,
      dictionaryRelative,
    );

  const dictionaryExists =
    fs.existsSync(
      dictionaryAbsolute,
    );

  const effectiveDictionaryRelative =
    dictionaryExists
      ? dictionaryRelative
      : group.outputFile;

  const reasons: string[] =
    [];

  if (
    !dictionaryExists
  ) {
    reasons.push(
      `Dictionnaire ${locale} manquant; repli sur le français.`,
    );
  }

  const originalSource =
    fs.readFileSync(
      sourceAbsolute,
      "utf8",
    );

  const sourceFile =
    ts.createSourceFile(
      sourceAbsolute,
      originalSource,
      ts.ScriptTarget.Latest,
      true,
      getScriptKind(
        sourceAbsolute,
      ),
    );

  const replacements:
    Replacement[] = [];

  for (
    const entry of
      group.entries
  ) {
    if (
      entry.kind ===
        "template"
    ) {
      reasons.push(
        `Template ignoré à la ligne ${entry.line}.`,
      );
      continue;
    }

    const replacement =
      findReplacement(
        entry,
        sourceFile,
      );

    if (
      replacement
    ) {
      replacements.push(
        replacement,
      );
    } else {
      reasons.push(
        `Texte non retrouvé à la ligne ${entry.line}: ${entry.text.slice(
          0,
          100,
        )}`,
      );
    }
  }

  let output =
    applyReplacements(
      originalSource,
      replacements,
    );

  output =
    rewriteDefaultLocale(
      output,
      locale,
    );

  output =
    rewriteProjectImports(
      output,
      group.sourceFile,
      locale,
    );

  const needsDictionary =
    replacements.length > 0 ||
    /\b__i18n\s*\[/.test(
      output,
    );

  if (
    needsDictionary
  ) {
    const importPath =
      relativeImportPath(
        outputRelative,
        effectiveDictionaryRelative,
      );

    output =
      repairDictionaryImport(
        output,
        importPath,
      );
  } else {
    output =
      removeDictionaryImport(
        output,
      );
  }

  if (
    hasSyntaxErrors(
      outputAbsolute,
      output,
    )
  ) {
    return {
      locale,
      sourceFile:
        group.sourceFile,
      outputFile:
        outputRelative,
      dictionaryFile:
        effectiveDictionaryRelative,
      status:
        "error",
      replacementsApplied:
        0,
      reasons: [
        "La version générée contient une erreur de syntaxe.",
        ...reasons,
      ],
    };
  }

  ensureDirectory(
    outputAbsolute,
  );

  fs.writeFileSync(
    outputAbsolute,
    output,
    "utf8",
  );

  return {
    locale,
    sourceFile:
      group.sourceFile,
    outputFile:
      outputRelative,
    dictionaryFile:
      effectiveDictionaryRelative,
    status:
      reasons.length
        ? "warning"
        : "generated",
    replacementsApplied:
      replacements.length,
    reasons,
  };
}

function rewriteCopiedCodeFiles(
  locale: PaidPdfLocale,
): void {
  for (
    const root of
      PAID_ROOTS
  ) {
    const base =
      path.join(
        OUTPUT_ROOT,
        locale,
        root,
      );

    if (
      !fs.existsSync(base)
    ) {
      continue;
    }

    const visit = (
      directory: string,
    ): void => {
      for (
        const entry of
          fs.readdirSync(
            directory,
            {
              withFileTypes: true,
            },
          )
      ) {
        const absolute =
          path.join(
            directory,
            entry.name,
          );

        if (
          entry.isDirectory()
        ) {
          visit(
            absolute,
          );
          continue;
        }

        if (
          !/\.(ts|tsx|js|jsx)$/.test(
            entry.name,
          )
        ) {
          continue;
        }

        const relativeFromOutput =
          normalizePath(
            path.relative(
              path.join(
                OUTPUT_ROOT,
                locale,
              ),
              absolute,
            ),
          );

        const originalSource =
          normalizePath(
            path.join(
              "components",
              relativeFromOutput,
            ),
          );

        let source =
          fs.readFileSync(
            absolute,
            "utf8",
          );

        source =
          rewriteDefaultLocale(
            source,
            locale,
          );

        source =
          rewriteProjectImports(
            source,
            originalSource,
            locale,
          );

        /*
         * Si un fichier avait déjà été migré auparavant avec un import
         * __i18n français, on redirige cet import vers la langue générée.
         */
        const oldImportMatch =
          source.match(
            /import\s+__i18n\s+from\s+(["'])([^"']+)\1;?/,
          );

        if (
          oldImportMatch
        ) {
          const oldSpecifier =
            oldImportMatch[2];

          const originalDirectory =
            path.dirname(
              path.join(
                PROJECT_ROOT,
                originalSource,
              ),
            );

          const resolved =
            path.resolve(
              originalDirectory,
              oldSpecifier,
            );

          const resolvedRelative =
            normalizePath(
              path.relative(
                PROJECT_ROOT,
                resolved,
              ),
            );

          const localized =
            localeDictionaryFile(
              resolvedRelative,
              locale,
            );

          const localizedExists =
            fs.existsSync(
              path.join(
                PROJECT_ROOT,
                localized,
              ),
            );

          const target =
            localizedExists
              ? localized
              : resolvedRelative;

          const generatedRelative =
            normalizePath(
              path.relative(
                PROJECT_ROOT,
                absolute,
              ),
            );

          const importPath =
            relativeImportPath(
              generatedRelative,
              target,
            );

          source =
            repairDictionaryImport(
              source,
              importPath,
            );
        }

        fs.writeFileSync(
          absolute,
          source,
          "utf8",
        );
      }
    };

    visit(base);
  }
}

function findDocumentFiles(
  locale: PaidPdfLocale,
): string[] {
  const found: string[] =
    [];

  for (
    const root of
      PAID_ROOTS
  ) {
    const base =
      path.join(
        OUTPUT_ROOT,
        locale,
        root,
      );

    if (
      !fs.existsSync(base)
    ) {
      continue;
    }

    const visit = (
      directory: string,
    ): void => {
      for (
        const entry of
          fs.readdirSync(
            directory,
            {
              withFileTypes: true,
            },
          )
      ) {
        const absolute =
          path.join(
            directory,
            entry.name,
          );

        if (
          entry.isDirectory()
        ) {
          visit(
            absolute,
          );
          continue;
        }

        if (
          /PdfDocument\.tsx$/i.test(
            entry.name,
          )
        ) {
          found.push(
            normalizePath(
              path.relative(
                path.join(
                  OUTPUT_ROOT,
                  locale,
                ),
                absolute,
              ),
            ),
          );
        }
      }
    };

    visit(base);
  }

  return found;
}

function withoutExtension(
  value: string,
): string {
  return value.replace(
    /\.[^.]+$/,
    "",
  );
}

function safeIdentifier(
  value: string,
): string {
  return value
    .replace(
      /[^a-zA-Z0-9_$]/g,
      "_",
    )
    .replace(
      /^[^a-zA-Z_$]/,
      "_",
    );
}

function generateWrappers(): void {
  const frenchDocuments =
    findDocumentFiles(
      "fr",
    );

  const wrappersRoot =
    path.join(
      OUTPUT_ROOT,
      "wrappers",
    );

  for (
    const documentRelative of
      frenchDocuments
  ) {
    const baseName =
      path.basename(
        documentRelative,
        ".tsx",
      );

    const componentName =
      safeIdentifier(
        `Localized${baseName}`,
      );

    const importLines =
      LOCALES.map(
        (locale) => {
          const variable =
            `${locale.toUpperCase()}Document`;

          const importTarget =
            `@/paid-pdf-generated/${locale}/${withoutExtension(
              documentRelative,
            )}`;

          return `import ${variable} from ${JSON.stringify(importTarget)};`;
        },
      ).join("\n");

    const switchLines =
      LOCALES.filter(
        (locale) =>
          locale !== "fr",
      )
        .map(
          (locale) =>
            `    case ${JSON.stringify(locale)}:\n      return <${locale.toUpperCase()}Document {...props} />;`,
        )
        .join("\n");

    const wrapper =
`${importLines}
import type { ComponentProps } from "react";

export type PaidPdfLocale =
  | "fr"
  | "en"
  | "es"
  | "de"
  | "it"
  | "pt";

type Props =
  ComponentProps<typeof FRDocument> & {
    locale?: PaidPdfLocale;
  };

export default function ${componentName}({
  locale = "fr",
  ...props
}: Props) {
  switch (locale) {
${switchLines}
    case "fr":
    default:
      return <FRDocument {...props} />;
  }
}
`;

    const wrapperRelative =
      normalizePath(
        path.join(
          "paid-pdf-generated",
          "wrappers",
          documentRelative,
        ),
      );

    const wrapperAbsolute =
      path.join(
        PROJECT_ROOT,
        wrapperRelative,
      );

    ensureDirectory(
      wrapperAbsolute,
    );

    fs.writeFileSync(
      wrapperAbsolute,
      wrapper,
      "utf8",
    );
  }
}

function main(): void {
  if (
    !fs.existsSync(
      PLAN_FILE,
    )
  ) {
    throw new Error(
      [
        "migration-plan.json introuvable.",
        "Le script paid-pdf doit être exécuté après i18n:prepare.",
      ].join("\n"),
    );
  }

  const plan =
    readJson<MigrationPlan>(
      PLAN_FILE,
    );

  /*
   * On repart toujours d'un dossier généré propre.
   * Les composants originaux ne sont jamais modifiés.
   */
  fs.rmSync(
    OUTPUT_ROOT,
    {
      recursive: true,
      force: true,
    },
  );

  const paidGroups =
    plan.files.filter(
      (group) =>
        isPaidSourceFile(
          group.sourceFile,
        ),
    );

  /*
   * 1) Copie complète des 5 arbres de composants dans chaque langue.
   * HoroscopePdf inclut automatiquement root/day, month et year.
   */
  for (
    const locale of LOCALES
  ) {
    for (
      const root of
        PAID_ROOTS
    ) {
      const sourceDirectory =
        path.join(
          PROJECT_ROOT,
          "components",
          root,
        );

      if (
        !fs.existsSync(
          sourceDirectory,
        )
      ) {
        continue;
      }

      const targetDirectory =
        path.join(
          OUTPUT_ROOT,
          locale,
          root,
        );

      copyDirectoryRecursive(
        sourceDirectory,
        targetDirectory,
      );
    }
  }

  /*
   * 2) Réécrit les imports des fichiers copiés, y compris ceux qui
   * avaient déjà été migrés dans le passé.
   */
  for (
    const locale of LOCALES
  ) {
    rewriteCopiedCodeFiles(
      locale,
    );
  }

  /*
   * 3) Applique les textes du plan i18n dans les copies localisées.
   */
  const results:
    GeneratedFileResult[] = [];

  for (
    const locale of LOCALES
  ) {
    for (
      const group of
        paidGroups
    ) {
      results.push(
        generateLocalizedFile(
          group,
          locale,
        ),
      );
    }
  }

  /*
   * 4) Génère automatiquement les wrappers pour les fichiers
   * *PdfDocument.tsx trouvés.
   */
  generateWrappers();

  const report = {
    generatedAt:
      new Date().toISOString(),
    planGeneratedAt:
      plan.generatedAt,
    locales:
      LOCALES,
    paidRoots:
      PAID_ROOTS,
    reportsRepresented: [
      "Essential",
      "Premium",
      "Signature",
      "Compatibility",
      "Horoscope day",
      "Horoscope month",
      "Horoscope year",
    ],
    totals: {
      migrationGroups:
        paidGroups.length,
      generated:
        results.filter(
          (result) =>
            result.status ===
            "generated",
        ).length,
      warnings:
        results.filter(
          (result) =>
            result.status ===
            "warning",
        ).length,
      errors:
        results.filter(
          (result) =>
            result.status ===
            "error",
        ).length,
      replacements:
        results.reduce(
          (
            total,
            result,
          ) =>
            total +
            result.replacementsApplied,
          0,
        ),
    },
    results,
  };

  writeJson(
    REPORT_FILE,
    report,
  );

  console.log("");
  console.log(
    "Paid PDF i18n généré.",
  );
  console.log(
    `Groupes PDF : ${paidGroups.length}`,
  );
  console.log(
    `Versions générées : ${report.totals.generated}`,
  );
  console.log(
    `Avertissements : ${report.totals.warnings}`,
  );
  console.log(
    `Erreurs : ${report.totals.errors}`,
  );
  console.log(
    `Remplacements : ${report.totals.replacements}`,
  );
  console.log(
    `Rapport : ${normalizePath(
      path.relative(
        PROJECT_ROOT,
        REPORT_FILE,
      ),
    )}`,
  );
  console.log("");
}

main();
