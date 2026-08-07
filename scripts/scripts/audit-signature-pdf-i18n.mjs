import fs from "fs";
import path from "path";

const ROOT = process.cwd();

const COMPONENTS_DIR = path.join(
  ROOT,
  "components",
  "SignaturePdf"
);

const FR_JSON_DIR = path.join(
  ROOT,
  "i18n",
  "migrated",
  "fr",
  "components",
  "signaturepdf"
);

function getFiles(dir, extension) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) =>
      file.endsWith(extension)
    );
}

function normalize(text) {
  return text
    .replace(/\s+/g, " ")
    .trim();
}

function loadJson(filePath) {
  try {
    return JSON.parse(
      fs.readFileSync(
        filePath,
        "utf8"
      )
    );
  } catch {
    return null;
  }
}

const tsxFiles =
  getFiles(
    COMPONENTS_DIR,
    ".tsx"
  );

const jsonFiles =
  getFiles(
    FR_JSON_DIR,
    ".json"
  );

console.log("");
console.log(
  "======================================"
);
console.log(
  " AUDIT SIGNATURE PDF — I18N"
);
console.log(
  "======================================"
);
console.log("");

console.log(
  `Composants TSX trouvés : ${tsxFiles.length}`
);

console.log(
  `JSON français trouvés : ${jsonFiles.length}`
);

console.log("");

for (const file of tsxFiles) {
  const componentPath =
    path.join(
      COMPONENTS_DIR,
      file
    );

  const source =
    fs.readFileSync(
      componentPath,
      "utf8"
    );

  const baseName =
    file
      .replace(/\.tsx$/, "")
      .toLowerCase();

  const possibleJson =
    jsonFiles.find(
      (json) =>
        json
          .replace(/\.json$/, "")
          .toLowerCase() ===
        baseName
    );

  console.log(
    "--------------------------------------"
  );

  console.log(file);

  if (possibleJson) {
    console.log(
      `JSON : ${possibleJson}`
    );
  } else {
    console.log(
      "JSON : ⚠️ aucun JSON correspondant"
    );
  }

  const hasLocale =
    /\blocale\b/.test(source);

  console.log(
    `Locale : ${
      hasLocale
        ? "✅ présent"
        : "❌ absent"
    }`
  );

  const json =
    possibleJson
      ? loadJson(
          path.join(
            FR_JSON_DIR,
            possibleJson
          )
        )
      : null;

  const translatedValues =
    json
      ? Object.values(json)
          .filter(
            (value) =>
              typeof value ===
              "string"
          )
          .map(normalize)
      : [];

  /*
   * Cherche principalement les textes
   * visibles entre balises React-PDF.
   */

  const textRegex =
    /<Text\b[^>]*>([\s\S]*?)<\/Text>/g;

  const hardcodedTexts = [];

  let match;

  while (
    (match =
      textRegex.exec(source)) !==
    null
  ) {
    let content =
      match[1];

    /*
     * Ignore les expressions JSX.
     */

    content =
      content.replace(
        /\{[\s\S]*?\}/g,
        ""
      );

    const clean =
      normalize(content);

    if (!clean) {
      continue;
    }

    /*
     * Ignore les symboles seuls.
     */

    if (
      /^[✦★☆•—–\-]+$/.test(
        clean
      )
    ) {
      continue;
    }

    const alreadyInJson =
      translatedValues.includes(
        clean
      );

    hardcodedTexts.push({
      text: clean,
      alreadyInJson,
    });
  }

  if (
    hardcodedTexts.length === 0
  ) {
    console.log(
      "Textes en dur : aucun détecté"
    );
  } else {
    console.log(
      `Textes en dur : ${hardcodedTexts.length}`
    );

    for (
      const item of hardcodedTexts
    ) {
      console.log(
        `  ${
          item.alreadyInJson
            ? "🟡 JSON existe"
            : "🔴 JSON manquant"
        } : ${item.text}`
      );
    }
  }

  console.log("");
}

console.log(
  "======================================"
);

console.log(
  " FIN DE L'AUDIT"
);

console.log(
  "======================================"
);

console.log("");
