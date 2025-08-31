import { createRouter as createTanstackRouter } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import * as TanstackQuery from "@/lib/tanstack-query/root-provider";
import { routeTree } from "@/routeTree.gen";
import { ReactNode } from "react";

export const createRouter = () => {
    const rqContext = TanstackQuery.getContext();

    const router = createTanstackRouter({
        routeTree,
        context: { ...rqContext },
        defaultPreload: "intent",
        Wrap: (props: { children: ReactNode }) => {
            return <TanstackQuery.Provider {...rqContext}>{props.children}</TanstackQuery.Provider>;
        },
    });

    setupRouterSsrQueryIntegration({ router, queryClient: rqContext.queryClient });

    return router;
};

declare module "@tanstack/react-router" {
    interface Register {
        router: ReturnType<typeof createRouter>;
    }
}
