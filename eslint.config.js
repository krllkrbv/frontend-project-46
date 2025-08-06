import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [".__tests__/"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      semi: "off",
      "eol-last": "off",
      quotes: "off",
      "no-tabs": "off",
      indent: "off",
      "no-mixed-spaces-and-tabs": "off",
      "no-trailing-spaces": "off",
      "arrow-parens": "off",
    },
  },
]);