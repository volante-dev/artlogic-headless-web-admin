import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
export default defineConfig([...nextVitals, ...nextTs, globalIgnores(["node_modules/**", ".next/**", ".runtime/**", "out/**", "dist/**", "build/**", "coverage/**", "test-results/**", "playwright-report/**", "**/*.min.js", "next-env.d.ts"])]);
