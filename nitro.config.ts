import { fileURLToPath } from "node:url";
import { defineConfig } from "nitro/config";

/**
 * Codzienny ping bazy Supabase (darmowy projekt usypia się po ~7 dniach bez ruchu).
 * Działa jako Cron Trigger w Cloudflare Workers — w darmowym planie, bez GitHub Actions.
 * Nitro dopisuje harmonogram do wygenerowanego wrangler.json (triggers.crons).
 */
export default defineConfig({
  experimental: { tasks: true },
  tasks: {
    "supabase:ping": {
      handler: fileURLToPath(
        new URL("./server/tasks/supabase-ping.ts", import.meta.url),
      ),
    },
  },
  scheduledTasks: {
    // Codziennie o 06:17 UTC.
    "17 6 * * *": ["supabase:ping"],
  },
});
