import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/solar-forecast-card.ts",
  output: {
    file: "dist/solar-forecast-card.js",
    format: "es",
    sourcemap: false,
  },
  plugins: [
    resolve(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
  ],
};
