// <== IMPORTS ==>
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// <== FILE SCOPE VARIABLES ==>
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// <== ESLINT CONFIGURATION ==>
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// <== ESLINT EXPORTS ==>
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
