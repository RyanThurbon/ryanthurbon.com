import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
    server: {
        BETTER_AUTH_SECRET: z.string(),
        BETTER_AUTH_URL: z.url(),
        SUPABASE_DATABASE_URL: z.string(),
        SUPABASE_DB_PASSWORD: z.string(),
        GITHUB_CLIENT_ID: z.string(),
        GITHUB_CLIENT_SECRET: z.string(),
    },
    clientPrefix: "VITE_",
    client: {},
    runtimeEnv: process.env,
    emptyStringAsUndefined: true,
});
