import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/db";
import { account, session, user, verification } from "@/lib/db/schemas/auth-schema.ts";
import { reactStartCookies } from "better-auth/react-start";
import { env } from "@/env.ts";

export const authServer = betterAuth({
    database: drizzleAdapter(db, {
        schema: {
            user,
            account,
            session,
            verification,
        },
        provider: "pg",
    }),
    socialProviders: {
        github: {
            clientId: env.GITHUB_CLIENT_ID,
            clientSecret: env.GITHUB_CLIENT_SECRET,
            scope: ["read:user"]
        }
    },
    plugins: [reactStartCookies()]
});