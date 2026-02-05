import js from "@eslint/js";
import tseslint from "typescript-eslint";

// ESM-compatible __dirname
import { fileURLToPath } from "url";
import path from "path";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Normalize plugin imports (ESM vs CJS)
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";

const react = reactPlugin?.default ?? reactPlugin;
const reactHooks = reactHooksPlugin?.default ?? reactHooksPlugin;
const a11y = jsxA11yPlugin?.default ?? jsxA11yPlugin;
const prettier = prettierPlugin?.default ?? prettierPlugin;

export default [

  // ------------------------------------------------------------
  // 1) GLOBAL IGNORE BLOCK — MUST COME FIRST
  // ------------------------------------------------------------
  {
    ignores: [
      ".storybook/**",
      "coverage/**",        // ← NEW: fixes your latest error
      "dist/",
      "node_modules/",
      "build/",
      "**/*.css",
      "**/*.scss",
      "**/*.ttf",
      "**/*.svg",
      "**/*.html",
      "**/*.stories.*",
      "**/*.d.ts",
      "**/stories/**",
      "*.config.*",
      "**.t.ts",
    ]
  },

  // ------------------------------------------------------------
  // 2) BASE ESLINT + TYPESCRIPT CONFIGS
  // ------------------------------------------------------------
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // ------------------------------------------------------------
  // 3) MAIN PROJECT CONFIG
  // ------------------------------------------------------------
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true }
      }
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": a11y,
      prettier
    },

    rules: {
      // Prettier
      "prettier/prettier": "error",

      // React
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",

      // Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // A11y
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/no-autofocus": "warn",

      // Misc
      "linebreak-style": 0,
      "jest/expect-expect": "off"
    },

    settings: {
      react: { version: "detect" }
    }
  }
];
