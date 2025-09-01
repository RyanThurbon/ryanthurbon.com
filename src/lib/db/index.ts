import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { config } from "dotenv";
import { env } from "@/env.ts";

config({ path: ".env" });

const queryClient = postgres(env.SUPABASE_DATABASE_URL);

export const db = drizzle({ client: queryClient });