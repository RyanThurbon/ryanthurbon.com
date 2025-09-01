import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";
import { env } from "@/env.ts";

config({ path: ".env" });

export default defineConfig({
    dialect: "postgresql",
    schema: [
        "./src/lib/db/schemas/auth-schema.ts",
        "./src/lib/db/schemas/guestbook-schema.ts"
    ],
    out: "./src/lib/db/migrations",
    dbCredentials: {
        url: env.SUPABASE_DATABASE_URL
    }
});
