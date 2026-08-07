/*
|--------------------------------------------------------------------------
| i18n-audit V6
|--------------------------------------------------------------------------
|
| Audit intelligent pour Luna Astralis.
| Ignore les valeurs techniques, les identifiants astrologiques, le CSS inline et les blocs <style>.
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


function isPremiumPdfFile(
  filePath: string,
): boolean {
  const relativeFile = normalizePath(
    path.relative(
      PROJECT_ROOT,
      filePath,
    ),
  );

  return relativeFile.startsWith(
    "components/PremiumPdf/",
  );
}

function templateToPlaceholderText(
  node: ts.TemplateExpression,
): string {
  let output = node.head.text;

  node.templateSpans.forEach(
    (span, index) => {
      output += `{${index}}`;
      output += span.literal.text;
    },
  );

  return output;
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
    text.includes("application/json") ||
    text.includes("text/html") ||
    text.includes("multipart/form-data") ||
    text.includes("@keyframes") ||
    text.includes("linear-gradient(") ||
    text.includes("radial-gradient(") ||
    text.includes("rgba(") ||
    text.includes("rgb(") ||
    text.includes("hsl(") ||
    text.includes("hsla(") ||
    text.includes("var(--") ||
    text.includes("calc(") ||
    text.includes("clamp(") ||
    text.includes("blur(") ||
    text.includes("rotate(") ||
    text.includes("translate(") ||
    text.includes("scale(") ||
    /^#[0-9a-f]{3,8}$/i.test(text) ||
    /^-?\d+(?:\.\d+)?(?:px|rem|em|vh|vw|vmin|vmax|%|s|ms|deg)(?:\s+-?\d+(?:\.\d+)?(?:px|rem|em|vh|vw|vmin|vmax|%|s|ms|deg))*$/i.test(text) ||
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
  "Content-Type",
  "Accept",
  "Authorization",
  "encoding",
  "format",
  "variant",

  // Identifiants et valeurs techniques des calculs astrologiques.
  "planet",
  "planet1",
  "planet2",
  "firstPlanet",
  "secondPlanet",
  "sign",
  "aspect",
  "aspectType",
  "tone",
  "category",
  "status",
  "mode",
  "kind",
  "code",
  "slug",
  "locale",
  "icon",
  "iconKey",
  "image",
  "imageUrl",

  // Propriétés CSS et valeurs de mise en page.
  "display",
  "position",
  "top",
  "right",
  "bottom",
  "left",
  "inset",
  "zIndex",
  "width",
  "minWidth",
  "maxWidth",
  "height",
  "minHeight",
  "maxHeight",
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "gap",
  "rowGap",
  "columnGap",
  "flex",
  "flexGrow",
  "flexShrink",
  "flexBasis",
  "flexDirection",
  "flexWrap",
  "alignItems",
  "alignContent",
  "alignSelf",
  "justifyContent",
  "justifyItems",
  "justifySelf",
  "grid",
  "gridTemplateColumns",
  "gridTemplateRows",
  "gridColumn",
  "gridRow",
  "placeItems",
  "overflow",
  "overflowX",
  "overflowY",
  "objectFit",
  "objectPosition",
  "boxSizing",
  "border",
  "borderTop",
  "borderRight",
  "borderBottom",
  "borderLeft",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor",
  "borderWidth",
  "borderStyle",
  "borderRadius",
  "outline",
  "boxShadow",
  "background",
  "backgroundColor",
  "backgroundImage",
  "backgroundPosition",
  "backgroundSize",
  "backgroundRepeat",
  "color",
  "opacity",
  "filter",
  "backdropFilter",
  "WebkitBackdropFilter",
  "transform",
  "transformOrigin",
  "transition",
  "transitionProperty",
  "transitionDuration",
  "transitionTimingFunction",
  "animation",
  "animationName",
  "animationDuration",
  "animationTimingFunction",
  "animationIterationCount",
  "cursor",
  "pointerEvents",
  "userSelect",
  "visibility",
  "whiteSpace",
  "wordBreak",
  "overflowWrap",
  "textOverflow",
  "textDecoration",
  "textUnderlineOffset",
  "textTransform",
  "textAlign",
  "lineHeight",
  "letterSpacing",
  "fontFamily",
  "fontSize",
  "fontWeight",
  "fontStyle",
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
| Protection AST des valeurs techniques
|--------------------------------------------------------------------------
|
| Une chaîne peut contenir du français sans être du texte destiné au client.
| Exemples : "Mercure", "Vénus", "square", "general", etc.
| Ces valeurs peuvent être des identifiants utilisés dans les calculs.
|
*/

const TECHNICAL_TYPE_PATTERN =
  /\b(?:PlanetName|Planet|ZodiacSign|AspectType|Aspect|PeriodCategory|Locale|Tone|Status|Kind|Mode|Id|Key|Code)\b/i;

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

function isInsideTechnicalTypedVariable(
  node: ts.Node,
  sourceFile: ts.SourceFile,
): boolean {
  const declaration =
    getNearestVariableDeclaration(
      node,
    );

  if (!declaration?.type) {
    return false;
  }

  const typeText =
    declaration.type.getText(
      sourceFile,
    );

  return TECHNICAL_TYPE_PATTERN.test(
    typeText,
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

    return (
      operator ===
        ts.SyntaxKind.EqualsEqualsEqualsToken ||
      operator ===
        ts.SyntaxKind.ExclamationEqualsEqualsToken ||
      operator ===
        ts.SyntaxKind.EqualsEqualsToken ||
      operator ===
        ts.SyntaxKind.ExclamationEqualsToken
    );
  }

  return false;
}

function isInsideImportOrExport(
  node: ts.Node,
): boolean {
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
      return true;
    }

    if (
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

function isSafeAuditableStringNode(
  node: ts.StringLiteralLike,
  sourceFile: ts.SourceFile,
): boolean {
  if (
    isInsideImportOrExport(
      node,
    )
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
   * Une chaîne utilisée comme nom de propriété n'est jamais du texte client.
   */
  const parent =
    node.parent;

  if (
    (
      ts.isPropertyAssignment(
        parent,
      ) ||
      ts.isPropertySignature(
        parent,
      )
    ) &&
    parent.name === node
  ) {
    return false;
  }

  return true;
}


function getJsxTagName(
  node:
    | ts.JsxOpeningElement
    | ts.JsxSelfClosingElement,
  sourceFile: ts.SourceFile,
): string {
  return node.tagName
    .getText(sourceFile)
    .toLowerCase();
}

function isStyleElement(
  node: ts.Node,
  sourceFile: ts.SourceFile,
): boolean {
  if (!ts.isJsxElement(node)) {
    return false;
  }

  return (
    getJsxTagName(
      node.openingElement,
      sourceFile,
    ) === "style"
  );
}

function isInsideJsxStyleAttribute(
  node: ts.Node,
  sourceFile: ts.SourceFile,
): boolean {
  let current:
    ts.Node | undefined = node;

  while (current) {
    if (
      ts.isJsxAttribute(current) &&
      current.name.getText(sourceFile) ===
        "style"
    ) {
      return true;
    }

    current = current.parent;
  }

  return false;
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
     * Le contenu de <style> et <style jsx> est du CSS technique.
     * On ignore tout le sous-arbre pour ne jamais le traduire.
     */
    if (
      isStyleElement(
        node,
        sourceFile,
      )
    ) {
      return;
    }

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
        ) &&
        !isInsideJsxStyleAttribute(
          node,
          sourceFile,
        ) &&
        isSafeAuditableStringNode(
          node.initializer,
          sourceFile,
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
          (
            ts.isStringLiteral(element) ||
            ts.isNoSubstitutionTemplateLiteral(
              element,
            )
          ) &&
          isSafeAuditableStringNode(
            element,
            sourceFile,
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
      !isInsideJsxStyleAttribute(
        node,
        sourceFile,
      ) &&
      node.expression &&
      (
        ts.isStringLiteral(
          node.expression,
        ) ||
        ts.isNoSubstitutionTemplateLiteral(
          node.expression,
        )
      ) &&
      isSafeAuditableStringNode(
        node.expression,
        sourceFile,
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

    /*
    |--------------------------------------------------------------------------
    | Templates dynamiques Premium
    |--------------------------------------------------------------------------
    |
    | Les interpolations sont remplacées par des placeholders stables
    | {0}, {1}, etc. Le traducteur peut ainsi traduire la phrase complète
    | sans modifier les expressions TypeScript. Cette détection est limitée
    | à components/PremiumPdf afin de préserver les calculs des autres PDF.
    |
    */

    if (
      isPremiumPdfFile(filePath) &&
      ts.isTemplateExpression(node) &&
      !isInsideJsxStyleAttribute(
        node,
        sourceFile,
      )
    ) {
      addEntry(
        results,
        sourceFile,
        filePath,
        node,
        "template",
        templateToPlaceholderText(node),
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
