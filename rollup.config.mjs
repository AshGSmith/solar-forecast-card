import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

function jsonLocale() {
  return {
    name: "json-locale",
    transform(code, id) {
      if (!id.endsWith(".json")) return null;
      return {
        code: `export default ${code};`,
        map: { mappings: "" },
      };
    },
  };
}

export default {
  input: "src/solar-forecast-card.ts",
  output: {
    file: "dist/solar-forecast-card.js",
    format: "es",
    sourcemap: false,
  },
  plugins: [
    resolve(),
    jsonLocale(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
  ],
};
