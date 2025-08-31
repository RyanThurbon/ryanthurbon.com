import { queryOptions } from "@tanstack/react-query";
import { $getSessionServerFn } from "@/server/functions/auth/get-session-fn.ts";

export const getAuthQueryOptions = () =>
    queryOptions({
        queryKey: ["auth"],
        queryFn: async () => $getSessionServerFn(),
        staleTime: Infinity,
    });
