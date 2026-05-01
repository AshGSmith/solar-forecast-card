const fs = require("fs");
const path = require("path");

const supportedLocales = [
  "af", "ar", "bg", "bn", "bs", "ca", "cs", "cy", "da", "de", "el", "en",
  "en-GB", "eo", "es", "es-419", "et", "eu", "fa", "fi", "fy", "fr", "ga",
  "gl", "gsw", "he", "hi", "hr", "hu", "hy", "id", "it", "is", "ja", "ka",
  "ko", "lb", "lt", "lv", "mk", "ml", "nl", "nb", "nn", "pl", "pt", "pt-BR",
  "ro", "ru", "sk", "sl", "sr", "sr-Latn", "sv", "sq", "ta", "te", "th",
  "tr", "uk", "ur", "vi", "zh-Hans", "zh-Hant",
];

const localeDir = path.join(__dirname, "..", "src", "locales");

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
