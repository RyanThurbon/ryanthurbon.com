import {
    GuestbookAlreadySignedError,
    GuestbookInsertError,
} from "@/features/guestbook/server/errors";
import { ensureAuthenticatedMiddleware } from "@/features/guestbook/server/middleware";
import { isUniqueConstraintViolationError, toTaggedError } from "@/features/guestbook/server/utils";
import { dbClient } from "@/lib/db/client";
import { guestbookTable } from "@/lib/db/schemas/guestbook";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const postMessageFormSchema = z.object({
    message: z
        .string()
        .min(2, "Message must be a minimum of 2 characters")
        .max(200, "Message must be a maximum of 200 characters"),
});

export const postGuestbookMessageServerFn = createServerFn({ method: "POST" })
    .middleware([ensureAuthenticatedMiddleware])
    .inputValidator(postMessageFormSchema)
    .handler(async ({ context, data }) => {
        const { user } = context;
        const { id, name, email, image } = user;
        const { message } = data;

        try {
            const [guestbookEntry] = await dbClient
                .insert(guestbookTable)
                .values({
                    userId: id,
                    name,
                    email,
                    image,
                    message,
                })
                .returning({
                    name: guestbookTable.name,
                    email: guestbookTable.email,
                    message: guestbookTable.message,
                    createdAt: guestbookTable.createdAt,
                });

            return {
                success: true,
                data: guestbookEntry,
            };
        } catch (error) {
            if (isUniqueConstraintViolationError(error)) {
                return {
                    success: false,
                    error: toTaggedError(new GuestbookAlreadySignedError()),
                };
            }

            return {
                success: false,
                error: toTaggedError(
                    new GuestbookInsertError("Unable to insert guestbook entry", error),
                ),
            };
        }
    });
