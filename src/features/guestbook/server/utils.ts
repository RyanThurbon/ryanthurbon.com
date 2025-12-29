import { GuestbookError } from "@/features/guestbook/server/errors";

export function toTaggedError(error: GuestbookError) {
    return { _tag: error._tag, message: error.message };
}

export function isUniqueConstraintViolationError(error: unknown) {
    if (error && typeof error === "object") {
        if ("cause" in error && error.cause && typeof error.cause === "object") {
            if ("code" in error.cause && error.cause.code === "23505") {
                return true;
            }
        }
    }

    return false;
}
