import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Use Next.js recommended config
  ...compat.extends("next/core-web-vitals", "next", "next/typescript"),

  {
    rules: {
      // ✅ Disable image warning (you accept performance hit from <img>)
      "@next/next/no-img-element": "off",

      // ✅ Allow unused variables (only for local dev)
      "@typescript-eslint/no-unused-vars": "off",

      // ✅ Allow console statements for debugging
      "no-console": "off",

      // ✅ You can add more relaxed rules here
      "react/display-name": "off",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
