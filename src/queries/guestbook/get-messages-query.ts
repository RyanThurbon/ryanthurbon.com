import { queryOptions } from "@tanstack/react-query";
import { $getMessagesServerFn } from "@/server/functions/guestbook/get-messages-fn.ts";

export const getMessagesQueryOptions = () =>
    queryOptions({
        queryKey: ["guestbook-messages"],
        queryFn: async () => $getMessagesServerFn(),
        staleTime: Infinity,
    });
