import { describe, expect, it } from "vitest";
import { LANGUAGE_OPTIONS, LOCALES } from "../src/locales/index.js";
import { localize, resolveLanguage } from "../src/localize.js";
import { makeHass } from "./helpers.js";

describe("resolveLanguage", () => {
  it("prefers the locale language and normalises separators and casing", () => {
    expect(resolveLanguage(makeHass({}, { language: "fr", locale: { language: "de" } }))).toBe("de");
    expect(resolveLanguage(makeHass({}, { language: "zh_hant" }))).toBe("zh-Hant");
  });

  it("falls back to the base language, then English", () => {
    expect(resolveLanguage(makeHass({}, { language: "de-AT" }))).toBe("de");
    expect(resolveLanguage(makeHass({}, { language: "xx" }))).toBe("en");
    expect(resolveLanguage(undefined)).toBe("en");
  });
});

describe("localize", () => {
  it("interpolates variables and keeps unknown placeholders", () => {
    expect(localize("en", "card.aria.dayButton", { day: "Mon", date: "01/02" })).toBe("Mon 01/02");
    expect(localize("en", "card.aria.dayButton", { day: "Mon" })).toBe("Mon {date}");
  });

  it("returns the key when it is missing everywhere", () => {
    expect(localize("de", "no.such.key")).toBe("no.such.key");
  });
});

describe("locale table", () => {
  it("derives the language list from the table", () => {
    expect(LANGUAGE_OPTIONS).toEqual(Object.keys(LOCALES));
    expect(LANGUAGE_OPTIONS).toHaveLength(64);
  });
});
