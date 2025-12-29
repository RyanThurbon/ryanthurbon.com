import { getGuestbookEntriesServerFn } from "@/features/guestbook/server/functions";
import { queryOptions } from "@tanstack/react-query";

export const getGuestbookEntriesQueryOptions = () =>
    queryOptions({
        queryKey: ["guestbook-entries"],
        queryFn: async () => getGuestbookEntriesServerFn(),
        staleTime: Infinity,
    });
