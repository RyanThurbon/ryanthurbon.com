import { createServerFn } from "@tanstack/react-start";
import { $$authMw } from "@/server/middleware/auth.ts";

export const $getSessionServerFn = createServerFn({ method: "GET" })
    .middleware([$$authMw])
    .handler(async ({ context }) => {
        if (!context.user || !context.session) {
            return null;
        }

        return {
            user: context.user,
            session: context.session,
        };
    });