import { authServer } from "@/lib/auth/server.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/auth/$")({
    server: {
        handlers: {
            GET: ({ request }) => {
                return authServer.handler(request);
            },
            POST: ({ request }) => {
                return authServer.handler(request);
            },
        },
    },
});
