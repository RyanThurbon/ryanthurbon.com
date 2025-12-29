import { env } from "@/env";
import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: [".env"] });

export default defineConfig({
    out: "./drizzle",
    schema: ["./src/lib/db/schemas/auth.ts", "./src/lib/db/schemas/guestbook.ts"],
    dialect: "postgresql",
    dbCredentials: {
        url: env.SUPABASE_DATABASE_URL,
    },
});
