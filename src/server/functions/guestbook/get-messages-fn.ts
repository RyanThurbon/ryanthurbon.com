import { createServerFn } from "@tanstack/react-start";
import { db } from "@/lib/db";
import { guestbook } from "@/lib/db/schemas/guestbook-schema.ts";
import { desc } from "drizzle-orm";

export const $getMessagesServerFn = createServerFn({ method: "GET" }).handler(async () => {
    //TODO pagination eventually when needed
    try {
        return await db
            .select({
                name: guestbook.name,
                email: guestbook.email,
                message: guestbook.message,
                createdAt: guestbook.createdAt,
            })
            .from(guestbook)
            .orderBy(desc(guestbook.createdAt));
    } catch (error) {
        console.error(error);
        throw new Error("Unable to fetch all guestbook messages");
    }
});
