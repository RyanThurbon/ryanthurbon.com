import { createServerFn } from "@tanstack/react-start";
import { $$ensureAuthenticatedMw } from "@/server/middleware/auth.ts";
import { db } from "@/lib/db";
import { guestbook } from "@/lib/db/schemas/guestbook-schema.ts";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const postMessageFormSchema = z.object({
    message: z
        .string()
        .min(2, "Message must be a minimum of 2 characters")
        .max(200, "Message must be a maximum of 200 characters"),
});

export const $postMessageServerFn = createServerFn({ method: "POST" })
    .middleware([$$ensureAuthenticatedMw])
    .validator(postMessageFormSchema)
    .handler(async ({ context, data }) => {
        const { user } = context;

        try {
            const [guestbookEntryExists] = await db
                .select({
                    userId: guestbook.userId,
                })
                .from(guestbook)
                .where(eq(guestbook.userId, user.id))
                .limit(1);

            if (guestbookEntryExists) {
                return {
                    success: false,
                    message: "You have already signed the guestbook",
                    data: null,
                };
            }
        } catch (error) {
            console.error(error);
            throw new Error("Failed to check for duplicate guestbook entry");
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
                    message: guestbook.message,
                    createdAt: guestbook.createdAt,
                });

            return {
                success: true,
                message: "Signed the guestbook!",
                data: guestbookEntry,
            };
        } catch (error) {
            console.error(error);
            throw new Error("Failed to insert guestbook entry");
        }
    });
