import { GuestbookSelectError } from "@/features/guestbook/server/errors";
import { toTaggedError } from "@/features/guestbook/server/utils";
import { dbClient } from "@/lib/db/client";
import { guestbookTable } from "@/lib/db/schemas/guestbook";
import { createServerFn } from "@tanstack/react-start";
import { desc } from "drizzle-orm";

export const getGuestbookEntriesServerFn = createServerFn({ method: "GET" }).handler(async () => {
    const { name, email, message, createdAt } = guestbookTable;

    //TODO pagination eventually
    try {
        const entries = await dbClient
            .select({
                name,
                email,
                message,
                createdAt,
            })
            .from(guestbookTable)
            .orderBy(desc(guestbookTable.createdAt));

        return {
            success: true,
            data: entries,
        };
    } catch (error) {
        return {
            success: false,
            error: toTaggedError(
                new GuestbookSelectError("Unable to retrieve guestbook entries", error),
            ),
        };
    }
});
