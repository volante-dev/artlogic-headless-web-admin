import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  outputDir:process.env.E2E_ARTIFACT_DIR??"test-results",
  testDir: "./tests",testIgnore:process.env.E2E_CONTACT_FIXTURE?[]:["**/contact-*.spec.ts"], fullyParallel: false, workers: 1, timeout: 30000,
  use: { baseURL: process.env.E2E_BASE_URL ?? "http://127.0.0.1:3002", trace: "retain-on-failure" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } },{name:"webkit",use:{...devices["Desktop Safari"]}}],
  reporter: [["list"], ["html", { open: "never" }]],
});
