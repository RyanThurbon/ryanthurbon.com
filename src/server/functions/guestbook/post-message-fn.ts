import { createServerFn } from "@tanstack/react-start";
import { $$ensureAuthenticatedMw } from "@/server/middleware/auth.ts";
import { db } from "@/lib/db";
import { guestbook } from "@/lib/db/schemas/guestbook-schema.ts";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const GUESTBOOK_ENTRY_LIMIT_REACHED = "GUESTBOOK_ENTRY_LIMIT_REACHED";

export const postMessageFormSchema = z.object({
    message: z
        .string()
        .min(2, "Message must be a minimum of 2 characters")
        .max(200, "Message must be a maximum of 200 characters")
});

export const $postMessageServerFn = createServerFn({ method: "POST" })
    .middleware([$$ensureAuthenticatedMw])
    .validator(postMessageFormSchema)
    .handler(async ({ context, data }) => {
        const { user } = context;

        const [guestbookEntryExists] = await db
            .select({
                userId: guestbook.userId
            })
            .from(guestbook)
            .where(eq(guestbook.userId, user.id))
            .limit(1);

        if (guestbookEntryExists) {
            throw new Error(GUESTBOOK_ENTRY_LIMIT_REACHED);
        }

        try {
            const [guestbookEntry] = await db
                .insert(guestbook)
                .values({
                    userId: user.id,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    message: data.message,
                })
                .returning({
                    name: guestbook.name,
                    email: guestbook.email,
                    message: guestbook.message
                });

            return guestbookEntry;
        } catch (error) {
            console.error(error);
            throw new Error("Failed to insert guestbook entry");
        }
    });
