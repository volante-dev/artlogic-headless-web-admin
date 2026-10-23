import { PHASE_PRODUCTION_BUILD } from "next/constants";
export async function register() {
  if (process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) return;
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { loadConfig } = await import("./lib/config/env");
    loadConfig();
  }
}
