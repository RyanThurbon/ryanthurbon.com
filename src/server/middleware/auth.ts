import { createMiddleware } from "@tanstack/react-start";
import { authServer } from "@/lib/auth/server.ts";
import { getHeaders } from "@tanstack/react-start/server";

export const $$authMw = createMiddleware({ type: "function" }).server(
    async ({ next }) => {
        const response = await authServer.api.getSession({
            headers: new Headers(getHeaders() as HeadersInit)
        });

        return await next({
            context: {
                user: response?.user,
                session: response?.session
            }
        });
    },
);

export const $$ensureAuthenticatedMw = createMiddleware({ type: "function" })
    .middleware([$$authMw])
    .server(
        async ({ next, context }) => {
            if (!context.user || !context.session) {
                throw new Error("Unauthorized");
            }

            return await next({
                context: {
                    user: context.user,
                    session: context.session
                }
            });
        },
    );