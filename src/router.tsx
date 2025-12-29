import { createRouter } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import * as TanstackQuery from "./lib/tanstack-query/root-provider";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
    const rqContext = TanstackQuery.getContext();

    const router = createRouter({
        routeTree,
        context: {
            ...rqContext,
        },
        defaultPreload: "intent",
    });

    setupRouterSsrQueryIntegration({ router, queryClient: rqContext.queryClient });

    return router;
};
