const fs = require("fs");
const path = require("path");

const localeDir = path.join(__dirname, "..", "src", "locales");

// locales/index.ts is the single list of supported languages.
const localeIndex = fs.readFileSync(path.join(localeDir, "index.ts"), "utf8");
const supportedLocales = [...localeIndex.matchAll(/^\s+"([\w-]+)": \w+,$/gm)].map((m) => m[1]);

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    throw new Error(`${path.relative(process.cwd(), filePath)} is not valid JSON: ${error.message}`);
  }
}

function flattenKeys(value, prefix = "") {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return [prefix];
  }

  return Object.entries(value).flatMap(([key, child]) => {
    const childPrefix = prefix ? `${prefix}.${key}` : key;
    return flattenKeys(child, childPrefix);
  });
}

const englishPath = path.join(localeDir, "en.json");
const englishKeys = flattenKeys(readJson(englishPath)).sort();
const expected = new Set(englishKeys);
const failures = [];

for (const locale of supportedLocales) {
  const filePath = path.join(localeDir, `${locale}.json`);
  if (!fs.existsSync(filePath)) {
    failures.push(`${locale}.json is missing`);
    continue;
  }

  const keys = flattenKeys(readJson(filePath)).sort();
  const actual = new Set(keys);
  const missing = englishKeys.filter((key) => !actual.has(key));
  const extra = keys.filter((key) => !expected.has(key));

  if (missing.length > 0) {
    failures.push(`${locale}.json is missing keys: ${missing.join(", ")}`);
  }

  if (extra.length > 0) {
    failures.push(`${locale}.json has extra keys: ${extra.join(", ")}`);
  }
}

const jsonFiles = fs.readdirSync(localeDir).filter((file) => file.endsWith(".json"));
const expectedFiles = new Set(supportedLocales.map((locale) => `${locale}.json`));
const unexpected = jsonFiles.filter((file) => !expectedFiles.has(file));
if (unexpected.length > 0) {
  failures.push(`Unexpected locale JSON files: ${unexpected.join(", ")}`);
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Validated ${supportedLocales.length} locale files with ${englishKeys.length} keys each.`);
