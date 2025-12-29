import { authMiddleware } from "@/features/guestbook/server/middleware";
import { createServerFn } from "@tanstack/react-start";

export const getSessionServerFn = createServerFn({ method: "GET" })
    .middleware([authMiddleware])
    .handler(async ({ context }) => {
        if (!context.user || !context.session) {
            return null;
        }

        return {
            user: context.user,
            session: context.session,
        };
    });
