import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

export function getContext() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnReconnect: false,
                refetchOnMount: false,
                refetchOnWindowFocus: false,
            }
        }
    });
    return {
        queryClient,
    };
}

export function Provider({ children, queryClient }: { children: ReactNode; queryClient: QueryClient }) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
