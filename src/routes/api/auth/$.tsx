import { createServerFileRoute } from "@tanstack/react-start/server";
import { authServer } from "@/lib/auth/server.ts";

export const ServerRoute = createServerFileRoute("/api/auth/$").methods({
    GET: ({ request }) => {
        return authServer.handler(request);
    },
    POST: ({ request }) => {
        return authServer.handler(request);
    },
});
