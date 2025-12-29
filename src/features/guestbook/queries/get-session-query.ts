import { getSessionServerFn } from "@/features/guestbook/server/functions";
import { queryOptions } from "@tanstack/react-query";

export const getSessionQueryOptions = () =>
    queryOptions({
        queryKey: ["auth-session"],
        queryFn: async () => getSessionServerFn(),
        staleTime: Infinity,
    });
