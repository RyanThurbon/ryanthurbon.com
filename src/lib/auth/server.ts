import { env } from "@/env.ts";
import { dbClient } from "@/lib/db/client";
import { accountTable, sessionTable, userTable, verificationTable } from "@/lib/db/schemas/auth.ts";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { tanstackStartCookies } from "better-auth/tanstack-start";

export const authServer = betterAuth({
    database: drizzleAdapter(dbClient, {
        schema: {
            user: userTable,
            account: accountTable,
            session: sessionTable,
            verification: verificationTable,
        },
        provider: "pg",
    }),
    socialProviders: {
        github: {
            clientId: env.GITHUB_CLIENT_ID,
            clientSecret: env.GITHUB_CLIENT_SECRET,
            scope: ["read:user"],
        },
    },
    plugins: [tanstackStartCookies()],
});
