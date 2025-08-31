import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/db";
import { account, session, user, verification } from "@/lib/db/schemas/auth-schema.ts";
import { reactStartCookies } from "better-auth/react-start";

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
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
            scope: ["read:user"]
        }
    },
    plugins: [reactStartCookies()]
});