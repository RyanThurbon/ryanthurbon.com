import { createServerFn } from "@tanstack/react-start";
import { db } from "@/lib/db";
import { guestbook } from "@/lib/db/schemas/guestbook-schema.ts";

export const $getMessagesServerFn = createServerFn({ method: "GET" })
    .handler(async () => {
        try {
            return await db
                .select({
                    name: guestbook.name,
                    email: guestbook.email,
                    message: guestbook.message,
                    createdAt: guestbook.createdAt
                })
                .from(guestbook)
                .orderBy(guestbook.createdAt);
        } catch (error) {
            console.error((error as Error).message);
            throw new Error("Unable to fetch all guestbook messages");
        }
    });
