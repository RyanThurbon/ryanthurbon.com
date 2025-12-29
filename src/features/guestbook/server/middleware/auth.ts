import { UnauthorizedError } from "@/features/guestbook/server/errors";
import { authServer } from "@/lib/auth/server.ts";
import { createMiddleware } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";

export const authMiddleware = createMiddleware({ type: "function" }).server(async ({ next }) => {
    const headers = getRequestHeaders();

    const response = await authServer.api.getSession({
        headers,
    });

    return await next({
        context: {
            user: response?.user,
            session: response?.session,
        },
    });
});

export const ensureAuthenticatedMiddleware = createMiddleware({ type: "function" })
    .middleware([authMiddleware])
    .server(async ({ next, context }) => {
        if (!context.user || !context.session) {
            throw new UnauthorizedError();
        }

        return await next({
            context: {
                user: context.user,
                session: context.session,
            },
        });
    });
