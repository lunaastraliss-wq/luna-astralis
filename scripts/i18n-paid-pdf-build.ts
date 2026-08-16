import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

import {
  localizePremiumFile,
} from "./paid-pdf/premium-localization";

import {
  localizeSignatureFile,
} from "./paid-pdf/signature-localization";

import {
  localizeCompatibilityFile,
} from "./paid-pdf/compatibility-localization";

import {
  localizeHoroscopeFile,
} from "./paid-pdf/horoscope-localization";

import {
  localizeMonthHoroscopeFile,
} from "./paid-pdf/month-horoscope-localization";

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


/*
|--------------------------------------------------------------------------
| Protection des chaînes techniques
|--------------------------------------------------------------------------
|
| IMPORTANT :
| Le plan i18n contient aussi des chaînes qui servent d'identifiants
| internes aux calculs astrologiques. Elles ne doivent jamais être
| remplacées par __i18n[...] :
|
| - MonthlyPlanetName
| - HoroscopeZodiacSign
| - MonthlyAspectType
| - catégories / tons / statuts
| - clés de Map / Set
| - valeurs utilisées dans switch / comparaisons
|
| Le but est de traduire le texte visible par le client sans modifier
| les valeurs qui font partie du contrat TypeScript ou de la logique.
|
*/

const TECHNICAL_PROPERTY_NAMES =
  new Set([
    "planet",
    "planet1",
    "planet2",
    "firstPlanet",
    "secondPlanet",
    "sign",
    "name",
    "type",
    "id",
    "key",
    "code",
    "slug",
    "locale",
    "mode",
    "status",
    "kind",
    "tone",
    "category",
    "icon",
    "iconKey",
    "image",
    "imageUrl",
    "url",
    "aspect",
    "aspectType",
  ]);

const DISPLAY_PROPERTY_NAMES =
  new Set([
    "title",
    "subtitle",
    "heading",
    "eyebrow",
    "label",
    "description",
    "text",
    "intro",
    "introduction",
    "message",
    "quote",
    "advice",
    "conclusion",
    "summary",
    "theme",
    "influence",
    "opportunity",
    "vigilance",
    "mantra",
    "content",
    "caption",
    "preparedFor",
    "nameLabel",
    "dateLabel",

    // Contenu éditorial des PDF astrologiques
    "energy",
    "strengths",
    "challenges",
    "evolution",
    "nature",
    "strength",
    "balance",
    "premium",
  ]);

/*
|--------------------------------------------------------------------------
| Constantes explicitement destinées à l'affichage
|--------------------------------------------------------------------------
|
| Ces objets contiennent des valeurs visibles dans le PDF.
| Leurs clés restent intactes; seules les valeurs peuvent être localisées.
|
| IMPORTANT :
| SIGN_KEYS et SIGNS_FROM_LONGITUDE ne sont volontairement PAS inclus ici,
| car ils servent à la logique et aux correspondances astrologiques.
|
*/

const DISPLAY_VARIABLE_NAMES =
  new Set([
    "PLANET_FR",
    "PLANET_NAMES",
    "PLANET_NAMES_FR",
    "PLANET_MEANINGS",
    "SIGN_NAMES_FR",

    // Premium : contenu visible, jamais utilisé comme identifiant de calcul.
    "ELEMENT_WORDS",
    "ELEMENT_DESCRIPTIONS",
    "ELEMENT_INSIGHTS",
    "MODALITY_WORDS",
    "MODALITY_DESCRIPTIONS",
    "MODALITY_INSIGHTS",
    "HOUSE_TITLES",
    "HOUSE_KEYWORDS",
    "HOUSE_DESCRIPTIONS",
    "HOUSE_PREMIUM_INSIGHTS",
    "PLANET_ENERGIES",
    "PLANET_MANIFESTATIONS",
  ]);

/*
 * Variables Premium qui servent réellement aux calculs / correspondances.
 * Même dans PremiumPdf, leur contenu ne doit jamais être localisé directement.
 */
const PREMIUM_TECHNICAL_VARIABLE_NAMES =
  new Set([
    "MAIN_PLANETS",
    "SIGNS_FROM_LONGITUDE",
    "SIGN_KEYS",
    "SIGN_NAMES_EN",
    "ELEMENTS",
    "MODALITIES",
    "HOUSE_NUMBERS",
  ]);

const TECHNICAL_TYPE_PATTERN =
  /\b(?:PlanetName|ZodiacSign|AspectType|PeriodCategory|Locale|Tone|Status|Kind|Mode|Id|Key|Code)\b/i;

function getPropertyNameText(
  name: ts.PropertyName,
): string | null {
  if (
    ts.isIdentifier(name) ||
    ts.isStringLiteral(name) ||
    ts.isNumericLiteral(name)
  ) {
    return name.text;
  }

  return null;
}

function getNearestVariableDeclaration(
  node: ts.Node,
): ts.VariableDeclaration | null {
  let current:
    ts.Node | undefined =
      node.parent;

  while (current) {
    if (
      ts.isVariableDeclaration(
        current,
      )
    ) {
      return current;
    }

    if (
      ts.isFunctionLike(
        current,
      ) ||
      ts.isSourceFile(
        current,
      )
    ) {
      break;
    }

    current =
      current.parent;
  }

  return null;
}

function isInsideDisplayVariable(
  node: ts.Node,
): boolean {
  const declaration =
    getNearestVariableDeclaration(
      node,
    );

  if (
    !declaration ||
    !ts.isIdentifier(
      declaration.name,
    )
  ) {
    return false;
  }

  return DISPLAY_VARIABLE_NAMES.has(
    declaration.name.text,
  );
}

function getNearestPropertyAssignment(
  node: ts.Node,
): ts.PropertyAssignment | null {
  let current:
    ts.Node | undefined =
      node.parent;

  while (current) {
    if (
      ts.isPropertyAssignment(
        current,
      )
    ) {
      return current;
    }

    if (
      ts.isFunctionLike(
        current,
      ) ||
      ts.isSourceFile(
        current,
      )
    ) {
      break;
    }

    current =
      current.parent;
  }

  return null;
}

function isInsideNewSetOrMap(
  node: ts.Node,
): boolean {
  let current:
    ts.Node | undefined =
      node.parent;

  while (current) {
    if (
      ts.isNewExpression(
        current,
      )
    ) {
      const expressionText =
        current.expression.getText();

      if (
        expressionText === "Set" ||
        expressionText === "Map"
      ) {
        return true;
      }
    }

    if (
      ts.isFunctionLike(
        current,
      ) ||
      ts.isSourceFile(
        current,
      )
    ) {
      break;
    }

    current =
      current.parent;
  }

  return false;
}

function isInsideTypeSyntax(
  node: ts.Node,
): boolean {
  let current: ts.Node | undefined = node.parent;

  while (current) {
    if (
      ts.isTypeAliasDeclaration(current) ||
      ts.isInterfaceDeclaration(current) ||
      ts.isTypeLiteralNode(current) ||
      ts.isLiteralTypeNode(current) ||
      ts.isUnionTypeNode(current) ||
      ts.isIntersectionTypeNode(current)
    ) {
      return true;
    }

    if (
      ts.isFunctionLike(current) ||
      ts.isSourceFile(current)
    ) {
      break;
    }

    current = current.parent;
  }

  return false;
}

function isInsidePremiumTechnicalVariable(
  node: ts.Node,
): boolean {
  const declaration =
    getNearestVariableDeclaration(node);

  if (
    !declaration ||
    !ts.isIdentifier(declaration.name)
  ) {
    return false;
  }

  return PREMIUM_TECHNICAL_VARIABLE_NAMES.has(
    declaration.name.text,
  );
}

function isPremiumPdfSource(
  sourceFile: ts.SourceFile,
): boolean {
  const normalized =
    normalizePath(
      sourceFile.fileName,
    );

  return (
    normalized.includes(
      "/components/PremiumPdf/",
    ) ||
    normalized.includes(
      "/paid-pdf-generated/fr/PremiumPdf/",
    ) ||
    normalized.includes(
      "/paid-pdf-generated/en/PremiumPdf/",
    ) ||
    normalized.includes(
      "/paid-pdf-generated/es/PremiumPdf/",
    ) ||
    normalized.includes(
      "/paid-pdf-generated/de/PremiumPdf/",
    ) ||
    normalized.includes(
      "/paid-pdf-generated/it/PremiumPdf/",
    ) ||
    normalized.includes(
      "/paid-pdf-generated/pt/PremiumPdf/",
    )
  );
}

function isHoroscopeCalculationSource(
  sourceFile: ts.SourceFile,
): boolean {
  const normalized =
    normalizePath(sourceFile.fileName);

  return (
    (
      normalized.includes(
        "/components/HoroscopePdf/",
      ) ||
      normalized.includes(
        "/paid-pdf-generated/fr/HoroscopePdf/",
      ) ||
      normalized.includes(
        "/paid-pdf-generated/en/HoroscopePdf/",
      ) ||
      normalized.includes(
        "/paid-pdf-generated/es/HoroscopePdf/",
      ) ||
      normalized.includes(
        "/paid-pdf-generated/de/HoroscopePdf/",
      ) ||
      normalized.includes(
        "/paid-pdf-generated/it/HoroscopePdf/",
      ) ||
      normalized.includes(
        "/paid-pdf-generated/pt/HoroscopePdf/",
      )
    ) &&
    normalized.includes(
      "/calculations/",
    )
  );
}

function isInsideTechnicalTypedVariable(
  node: ts.Node,
  sourceFile: ts.SourceFile,
): boolean {
  const declaration =
    getNearestVariableDeclaration(
      node,
    );

  if (!declaration) {
    return false;
  }

  const typeText =
    declaration.type
      ? declaration.type.getText(
          sourceFile,
        )
      : "";

  if (
    typeText &&
    TECHNICAL_TYPE_PATTERN.test(
      typeText,
    )
  ) {
    return true;
  }

  /*
   * Les grosses constantes de configuration en MAJUSCULES contiennent
   * souvent des identifiants de calcul. On ne les bloque pas toutes :
   * uniquement lorsqu'elles sont aussi typées avec un nom technique.
   */
  const variableName =
    ts.isIdentifier(
      declaration.name,
    )
      ? declaration.name.text
      : "";

  return Boolean(
    variableName &&
    /^[A-Z0-9_]+$/.test(
      variableName,
    ) &&
    typeText &&
    /\b(?:Record|Set|Map|Partial|Readonly)\b/.test(
      typeText,
    ) &&
    TECHNICAL_TYPE_PATTERN.test(
      typeText,
    ),
  );
}

function isUsedAsTechnicalComparison(
  node: ts.Node,
): boolean {
  const parent =
    node.parent;

  if (
    ts.isCaseClause(parent) &&
    parent.expression === node
  ) {
    return true;
  }

  if (
    ts.isBinaryExpression(
      parent,
    )
  ) {
    const operator =
      parent.operatorToken.kind;

    if (
      operator ===
        ts.SyntaxKind.EqualsEqualsEqualsToken ||
      operator ===
        ts.SyntaxKind.ExclamationEqualsEqualsToken ||
      operator ===
        ts.SyntaxKind.EqualsEqualsToken ||
      operator ===
        ts.SyntaxKind.ExclamationEqualsToken
    ) {
      return true;
    }
  }

  return false;
}

function isPropertyNameNode(
  node: ts.Node,
): boolean {
  const parent =
    node.parent;

  return Boolean(
    (
      ts.isPropertyAssignment(
        parent,
      ) ||
      ts.isPropertySignature(
        parent,
      ) ||
      ts.isMethodDeclaration(
        parent,
      ) ||
      ts.isMethodSignature(
        parent,
      )
    ) &&
    parent.name === node,
  );
}

function isSafeTranslatableStringNode(
  node: ts.StringLiteralLike,
  sourceFile: ts.SourceFile,
): boolean {
  /*
   * Les fichiers de calcul Horoscope contiennent des valeurs fortement typées
   * (MonthlyPlanetName, MonthlyAspectType, etc.). Elles ne doivent jamais être
   * remplacées par des traductions, sinon TypeScript et les calculs cassent.
   */
  if (isHoroscopeCalculationSource(sourceFile)) {
    return false;
  }

  /*
   * Imports, exports et noms de propriétés ne sont jamais du texte client.
   */
  let current:
    ts.Node | undefined =
      node.parent;

  while (current) {
    if (
      ts.isImportDeclaration(
        current,
      ) ||
      ts.isExportDeclaration(
        current,
      ) ||
      ts.isImportEqualsDeclaration(
        current,
      )
    ) {
      return false;
    }

    if (
      ts.isFunctionLike(
        current,
      ) ||
      ts.isSourceFile(
        current,
      )
    ) {
      break;
    }

    current =
      current.parent;
  }

  if (
    isPropertyNameNode(
      node,
    )
  ) {
    return false;
  }

  if (
    isInsideTypeSyntax(node) ||
    isInsidePremiumTechnicalVariable(node)
  ) {
    return false;
  }

  if (
    isUsedAsTechnicalComparison(
      node,
    )
  ) {
    return false;
  }

  if (
    isInsideNewSetOrMap(
      node,
    )
  ) {
    return false;
  }

  if (
    isInsideTechnicalTypedVariable(
      node,
      sourceFile,
    )
  ) {
    return false;
  }

  /*
   * Valeurs d'objets :
   * - propriétés techniques => jamais traduites
   * - propriétés clairement éditoriales => autorisées
   */
  const property =
    getNearestPropertyAssignment(
      node,
    );

  if (property) {
    const propertyName =
      getPropertyNameText(
        property.name,
      );

    if (propertyName) {
      if (
        TECHNICAL_PROPERTY_NAMES.has(
          propertyName,
        )
      ) {
        return false;
      }

      if (
        DISPLAY_PROPERTY_NAMES.has(
          propertyName,
        )
      ) {
        return true;
      }
    }
  }

  /*
   * Les chaînes directement retournées par une fonction sont souvent
   * des libellés destinés au rapport ("Influence principale", etc.).
   */
  if (
    ts.isReturnStatement(
      node.parent,
    )
  ) {
    return true;
  }

  /*
   * Chaînes dans un opérateur conditionnel :
   * autorisées sauf si la variable englobante est technique (filtrée plus haut).
   */
  if (
    ts.isConditionalExpression(
      node.parent,
    )
  ) {
    return true;
  }

  /*
   * Les appels de formatage / construction de texte peuvent contenir
   * des chaînes visibles. On autorise les arguments sauf pour quelques
   * API clairement structurelles.
   */
  if (
    ts.isCallExpression(
      node.parent,
    )
  ) {
    const callee =
      node.parent.expression.getText(
        sourceFile,
      );

    if (
      /^(?:Object\.(?:keys|values|entries)|JSON\.(?:parse|stringify)|path\.|fs\.)/.test(
        callee,
      )
    ) {
      return false;
    }

    return true;
  }

  /*
   * Dictionnaires explicitement destinés à l'affichage.
   *
   * Exemples :
   * PLANET_FR
   * PLANET_MEANINGS
   * SIGN_NAMES_FR
   *
   * Les clés techniques ne sont jamais modifiées; seules les valeurs
   * trouvées dans le plan i18n peuvent être remplacées par __i18n[...].
   */
  if (
    isInsideDisplayVariable(
      node,
    )
  ) {
    return true;
  }

  /*
   * Premium contient beaucoup de textes éditoriaux stockés dans des constantes,
   * retours de fonctions et branches conditionnelles. Après les protections
   * ci-dessus (types, comparaisons, Map/Set, propriétés et variables techniques),
   * les chaînes restantes du dossier PremiumPdf sont du texte d'affichage.
   */
  if (isPremiumPdfSource(sourceFile)) {
    return true;
  }

  /*
   * Pour les autres PDF, on conserve le comportement historique prudent.
   */
  return false;
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
      if (
        !isSafeTranslatableStringNode(
          node,
          sourceFile,
        )
      ) {
        return;
      }

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
        entry.kind === "string"
          ? `Chaîne ignorée par sécurité ou non retrouvée à la ligne ${entry.line}: ${entry.text.slice(
              0,
              100,
            )}`
          : `Texte non retrouvé à la ligne ${entry.line}: ${entry.text.slice(
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
  oldSpecifier.startsWith("@/")
    ? path.join(
        PROJECT_ROOT,
        oldSpecifier.slice(2),
      )
    : path.resolve(
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


function collectLocalizedStringPairs(
  locale: PaidPdfLocale,
): Map<string, string> {
  const translations =
    new Map<string, string>();

  if (locale === "fr") {
    return translations;
  }

  const frenchRoot = path.join(
    PROJECT_ROOT,
    "i18n",
    "migrated",
    "fr",
  );

  const localizedRoot = path.join(
    PROJECT_ROOT,
    "i18n",
    "migrated",
    locale,
  );

  if (
    !fs.existsSync(frenchRoot) ||
    !fs.existsSync(localizedRoot)
  ) {
    return translations;
  }

  const ambiguous =
    new Set<string>();

  const collectFromObjects = (
    frenchValue: unknown,
    localizedValue: unknown,
  ): void => {
    if (
      typeof frenchValue === "string" &&
      typeof localizedValue === "string"
    ) {
      const frenchText =
        frenchValue.trim();

      const localizedText =
        localizedValue.trim();

      if (
        !frenchText ||
        !localizedText ||
        frenchText === localizedText
      ) {
        return;
      }

      const existing =
        translations.get(
          frenchText,
        );

      if (
        existing &&
        existing !== localizedText
      ) {
        translations.delete(
          frenchText,
        );

        ambiguous.add(
          frenchText,
        );

        return;
      }

      if (
        !ambiguous.has(
          frenchText,
        )
      ) {
        translations.set(
          frenchText,
          localizedText,
        );
      }

      return;
    }

    if (
      !frenchValue ||
      !localizedValue ||
      typeof frenchValue !== "object" ||
      typeof localizedValue !== "object" ||
      Array.isArray(frenchValue) ||
      Array.isArray(localizedValue)
    ) {
      return;
    }

    const frenchRecord =
      frenchValue as Record<
        string,
        unknown
      >;

    const localizedRecord =
      localizedValue as Record<
        string,
        unknown
      >;

    for (
      const key of
      Object.keys(frenchRecord)
    ) {
      if (
        Object.prototype.hasOwnProperty.call(
          localizedRecord,
          key,
        )
      ) {
        collectFromObjects(
          frenchRecord[key],
          localizedRecord[key],
        );
      }
    }
  };

  const visit = (
    frenchDirectory: string,
  ): void => {
    for (
      const entry of fs.readdirSync(
        frenchDirectory,
        {
          withFileTypes: true,
        },
      )
    ) {
      const frenchPath =
        path.join(
          frenchDirectory,
          entry.name,
        );

      if (
        entry.isDirectory()
      ) {
        visit(frenchPath);
        continue;
      }

      if (
        !entry.name.endsWith(
          ".json",
        )
      ) {
        continue;
      }

      const relative =
        path.relative(
          frenchRoot,
          frenchPath,
        );

      const localizedPath =
        path.join(
          localizedRoot,
          relative,
        );

      if (
        !fs.existsSync(
          localizedPath,
        )
      ) {
        continue;
      }

      try {
        const frenchDictionary =
          readJson<unknown>(
            frenchPath,
          );

        const localizedDictionary =
          readJson<unknown>(
            localizedPath,
          );

        collectFromObjects(
          frenchDictionary,
          localizedDictionary,
        );
      } catch {
        /*
         * Un dictionnaire invalide ne doit pas
         * faire échouer toute la génération.
         */
      }
    }
  };

  visit(frenchRoot);

  return translations;
}

function localizeRemainingDisplayStrings(
  filePath: string,
  sourceText: string,
  translations: Map<
    string,
    string
  >,
): string {
  if (
    translations.size === 0
  ) {
    return sourceText;
  }

  const sourceFile =
    ts.createSourceFile(
      filePath,
      sourceText,
      ts.ScriptTarget.Latest,
      true,
      getScriptKind(filePath),
    );

  const replacements:
    Replacement[] = [];

  const visit = (
    node: ts.Node,
  ): void => {
    if (
      (
        ts.isStringLiteral(node) ||
        ts.isNoSubstitutionTemplateLiteral(
          node,
        )
      ) &&
      isSafeTranslatableStringNode(
        node,
        sourceFile,
      )
    ) {
      const original =
        node.text.trim();

      const translated =
        translations.get(
          original,
        );

      if (
        translated &&
        translated !== original
      ) {
        replacements.push({
          start:
            node.getStart(
              sourceFile,
            ),
          end:
            node.getEnd(),
          value:
            JSON.stringify(
              translated,
            ),
          key:
            "__post_localize__",
          original,
          kind:
            "string",
          line:
            getNodeLine(
              sourceFile,
              node,
            ),
        });
      }
    }

    ts.forEachChild(
      node,
      visit,
    );
  };

  visit(sourceFile);

  return applyReplacements(
    sourceText,
    replacements,
  );
}


function localizePaidPdfDisplayLiterals(
  locale: PaidPdfLocale,
): void {
  const base = path.join(
    OUTPUT_ROOT,
    locale,
  );

  if (!fs.existsSync(base)) {
    return;
  }

  const words: Record<
    PaidPdfLocale,
    {
      house: string;
      houseUnspecified: string;
      retrograde: string;
      premiumReport: string;
      connector: string;
    }
  > = {
    fr: {
      house: "Maison",
      houseUnspecified: "Maison non précisée",
      retrograde: "Rétrograde",
      premiumReport: "Rapport Premium",
      connector: "en",
    },
    en: {
      house: "House",
      houseUnspecified: "House unspecified",
      retrograde: "Retrograde",
      premiumReport: "Premium Report",
      connector: "in",
    },
    es: {
      house: "Casa",
      houseUnspecified: "Casa no especificada",
      retrograde: "Retrógrado",
      premiumReport: "Informe Premium",
      connector: "en",
    },
    de: {
      house: "Haus",
      houseUnspecified: "Haus nicht angegeben",
      retrograde: "Rückläufig",
      premiumReport: "Premium-Bericht",
      connector: "im",
    },
    it: {
      house: "Casa",
      houseUnspecified: "Casa non specificata",
      retrograde: "Retrogrado",
      premiumReport: "Rapporto Premium",
      connector: "in",
    },
    pt: {
      house: "Casa",
      houseUnspecified: "Casa não especificada",
      retrograde: "Retrógrado",
      premiumReport: "Relatório Premium",
      connector: "em",
    },
  };

  const localized = words[locale];

  const stringTranslations =
    collectLocalizedStringPairs(
      locale,
    );

  const visit = (directory: string): void => {
    for (
      const entry of fs.readdirSync(
        directory,
        { withFileTypes: true },
      )
    ) {
      const absolute = path.join(
        directory,
        entry.name,
      );

      if (entry.isDirectory()) {
        visit(absolute);
        continue;
      }

      if (
        !/\.(ts|tsx|js|jsx)$/.test(
          entry.name,
        )
      ) {
        continue;
      }

      let source = fs.readFileSync(
        absolute,
        "utf8",
      );

      source = localizePremiumFile({
        source,
        locale,
        filePath: absolute,
        fileName: entry.name,
      });

      source = localizeSignatureFile({
  source,
  locale,
  filePath: absolute,
  fileName: entry.name,
});
     
      source = localizeCompatibilityFile({
  source,
  locale,
  filePath: absolute,
  fileName: entry.name,
});

source = localizeHoroscopeFile({
  source,
  locale,
  filePath: absolute,
  fileName: entry.name,
});

      source = localizeMonthHoroscopeFile({
  source,
  locale,
  filePath: absolute,
  fileName: entry.name,
});
      /*
       * PremiumPdf — noms visibles des planètes et des signes.
       * Cette correction reste limitée à PlanetConstants.ts et PlanetUtils.ts
       * dans les copies Premium générées. Les valeurs de calcul ne sont pas touchées.
       */
      if (
        normalizePath(absolute).includes(
          "/PremiumPdf/",
        ) &&
        (
          entry.name === "PlanetConstants.ts" ||
          entry.name === "PlanetUtils.ts"
        )
      ) {
        const premiumNames: Record<
          PaidPdfLocale,
          Record<string, string>
        > = {
          fr: {},
          en: {
            Soleil: "Sun",
            Lune: "Moon",
            Mercure: "Mercury",
            Vénus: "Venus",
            Saturne: "Saturn",
            Pluton: "Pluto",
            Bélier: "Aries",
            Taureau: "Taurus",
            Gémeaux: "Gemini",
            Lion: "Leo",
            Vierge: "Virgo",
            Balance: "Libra",
            Scorpion: "Scorpio",
            Sagittaire: "Sagittarius",
            Capricorne: "Capricorn",
            Verseau: "Aquarius",
            Poissons: "Pisces",
          },
          es: {
            Soleil: "Sol",
            Lune: "Luna",
            Mercure: "Mercurio",
            Vénus: "Venus",
            Saturne: "Saturno",
            Pluton: "Plutón",
            Bélier: "Aries",
            Taureau: "Tauro",
            Gémeaux: "Géminis",
            Lion: "Leo",
            Vierge: "Virgo",
            Balance: "Libra",
            Scorpion: "Escorpio",
            Sagittaire: "Sagitario",
            Capricorne: "Capricornio",
            Verseau: "Acuario",
            Poissons: "Piscis",
          },
          de: {
            Soleil: "Sonne",
            Lune: "Mond",
            Mercure: "Merkur",
            Vénus: "Venus",
            Saturne: "Saturn",
            Pluton: "Pluto",
            Bélier: "Widder",
            Taureau: "Stier",
            Gémeaux: "Zwillinge",
            Lion: "Löwe",
            Vierge: "Jungfrau",
            Balance: "Waage",
            Scorpion: "Skorpion",
            Sagittaire: "Schütze",
            Capricorne: "Steinbock",
            Verseau: "Wassermann",
            Poissons: "Fische",
          },
          it: {
            Soleil: "Sole",
            Lune: "Luna",
            Mercure: "Mercurio",
            Vénus: "Venere",
            Saturne: "Saturno",
            Pluton: "Plutone",
            Bélier: "Ariete",
            Taureau: "Toro",
            Gémeaux: "Gemelli",
            Lion: "Leone",
            Vierge: "Vergine",
            Balance: "Bilancia",
            Scorpion: "Scorpione",
            Sagittaire: "Sagittario",
            Capricorne: "Capricorno",
            Verseau: "Acquario",
            Poissons: "Pesci",
          },
          pt: {
            Soleil: "Sol",
            Lune: "Lua",
            Mercure: "Mercúrio",
            Vénus: "Vênus",
            Saturne: "Saturno",
            Pluton: "Plutão",
            Bélier: "Áries",
            Taureau: "Touro",
            Gémeaux: "Gêmeos",
            Lion: "Leão",
            Vierge: "Virgem",
            Balance: "Libra",
            Scorpion: "Escorpião",
            Sagittaire: "Sagitário",
            Capricorne: "Capricórnio",
            Verseau: "Aquário",
            Poissons: "Peixes",
          },
        };

        for (
          const [french, translated] of
          Object.entries(
            premiumNames[locale],
          )
        ) {
          source = source.replace(
            new RegExp(
              `(["'])${french}\\1`,
              "g",
            ),
            (_full, quote: string) =>
              `${quote}${translated}${quote}`,
          );
        }
      }

      /*
       * SignaturePdf — page 3 / guide de lecture.
       *
       * PdfSignatureWheelGuide.tsx contient les noms visibles des cinq
       * planètes directement dans le JSX. Les autres textes de la page
       * sont déjà localisés, mais ces noms peuvent rester en français.
       *
       * On cible UNIQUEMENT ce composant afin de ne jamais modifier
       * les valeurs techniques utilisées ailleurs dans SignaturePdf.
       */
      if (
        normalizePath(absolute).includes(
          "/SignaturePdf/",
        ) &&
        entry.name ===
          "PdfSignatureWheelGuide.tsx"
      ) {
        const signatureGuidePlanetNames:
          Record<
            PaidPdfLocale,
            Record<string, string>
          > = {
          fr: {},
          en: {
            Soleil: "Sun",
            Lune: "Moon",
            Mercure: "Mercury",
            Vénus: "Venus",
            Mars: "Mars",
          },
          es: {
            Soleil: "Sol",
            Lune: "Luna",
            Mercure: "Mercurio",
            Vénus: "Venus",
            Mars: "Marte",
          },
          de: {
            Soleil: "Sonne",
            Lune: "Mond",
            Mercure: "Merkur",
            Vénus: "Venus",
            Mars: "Mars",
          },
          it: {
            Soleil: "Sole",
            Lune: "Luna",
            Mercure: "Mercurio",
            Vénus: "Venere",
            Mars: "Marte",
          },
          pt: {
            Soleil: "Sol",
            Lune: "Lua",
            Mercure: "Mercúrio",
            Vénus: "Vênus",
            Mars: "Marte",
          },
        };

        for (
          const [french, translated] of
          Object.entries(
            signatureGuidePlanetNames[
              locale
            ],
          )
        ) {
          /*
           * Ici les noms sont du JSX texte, pas des chaînes entre guillemets.
           * On cible le contenu exact situé entre les balises Text afin
           * d'éviter tout remplacement dans la logique ou les constantes.
           */
          source = source.replace(
            new RegExp(
              `(>\\s*)${french}(\\s*<)`,
              "g",
            ),
            `$1${translated}$2`,
          );
        }
      }

      /*
       * PdfPlanet.tsx — connecteur visible entre la planète et le signe.
       * Exemple anglais : Sun in Scorpio.
       * On cible uniquement le composant Premium PdfPlanet généré.
       */
      if (
        normalizePath(absolute).includes(
          "/PremiumPdf/",
        ) &&
        entry.name === "PdfPlanet.tsx"
      ) {
        source = source.replace(
          /(\{planetName\})\s*en(?=\{\s*["']\s*["']\s*\})/g,
          `$1 ${localized.connector}`,
        );
      }

      source =
        localizeRemainingDisplayStrings(
          absolute,
          source,
          stringTranslations,
        );

      /*
       * Littéraux simples.
       */
      source = source
        .replace(
          /(["'`])Maison non précisée\1/g,
          (_full, quote: string) =>
            `${quote}${localized.houseUnspecified}${quote}`,
        )
        .replace(
          /(["'`])Rétrograde\1/g,
          (_full, quote: string) =>
            `${quote}${localized.retrograde}${quote}`,
        )
        .replace(
          /(["'`])Rapport Premium\1/g,
          (_full, quote: string) =>
            `${quote}${localized.premiumReport}${quote}`,
        );

      /*
       * Template dynamique exact utilisé par getHouseDisplayName :
       * `Maison ${romanNumeral}` -> `House ${romanNumeral}`, etc.
       */
      source = source.replace(
        /`Maison \$\{romanNumeral\}`/g,
        `\`${localized.house} \${romanNumeral}\``,
      );

      /*
       * Connecteur exact des titres de PdfPlanet :
       * {planetName} en{" "}{translatedSign}
       *
       * On cible uniquement cette construction précise afin de ne pas
       * remplacer tous les mots "en" présents dans les textes.
       */
      source = source.replace(
        /(\{planetName\})\s*en\s*(\{\s*["']\s["']\s*\})\s*(\{translatedSign\})/g,
        `$1 ${localized.connector}$2$3`,
      );

      fs.writeFileSync(
        absolute,
        source,
        "utf8",
      );
    }
  };

  visit(base);
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
   * 4) Corrige les petits libellés des PDF payants construits dynamiquement
   * qui ne peuvent pas être pris par le plan i18n (templates ignorés).
   * Cette passe agit uniquement sur les copies générées.
   */
  for (const locale of LOCALES) {
    localizePaidPdfDisplayLiterals(locale);
  }

  /*
   * 5) Génère automatiquement les wrappers pour les fichiers
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
