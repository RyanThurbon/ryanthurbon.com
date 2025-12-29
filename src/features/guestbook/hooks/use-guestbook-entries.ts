import { getGuestbookEntriesQueryOptions } from "@/features/guestbook/queries";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useGuestbookEntries() {
    const { data: guestbookEntriesQuery } = useSuspenseQuery(getGuestbookEntriesQueryOptions());

    if (!guestbookEntriesQuery.success) {
        console.error("[GUESTBOOK_ENTRIES_QUERY]:", guestbookEntriesQuery.error);

        return {
            error: guestbookEntriesQuery.error,
        };
    }

    return {
        data: guestbookEntriesQuery.data,
    };
}
