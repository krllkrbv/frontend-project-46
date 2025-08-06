import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig({
  files: ["**/*.{js,mjs,cjs}"],
  plugins: {
    js,
    stylistic: require('eslint-plugin-stylistic'),
  },
  extends: ["js/recommended"],
  languageOptions: {
    globals: globals.browser,
  },
  rules: {
    '@stylistic/semi': ['error', 'always'],
  },
});