import { env } from "@/env";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";

config({ path: ".env" });

export const dbClient = drizzle(env.SUPABASE_DATABASE_URL);
