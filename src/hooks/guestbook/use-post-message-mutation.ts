import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { getMessagesQueryOptions } from "@/queries/guestbook/get-messages-query.ts";
import {
    $postMessageServerFn,
    GUESTBOOK_ENTRY_LIMIT_REACHED,
    postMessageFormSchema,
} from "@/server/functions/guestbook/post-message-fn.ts";

type PostMessagePayload = z.infer<typeof postMessageFormSchema>;

export function usePostMessageMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (message: PostMessagePayload) => {
            return await $postMessageServerFn({ data: message });
        },
        onSuccess: async (response) => {
            if (!response) {
                return toast.error("Something went wrong. Please try again later.");
            }

            await queryClient.invalidateQueries(getMessagesQueryOptions());
            toast.success("Signed the guestbook!");
        },
        onError: (error) => {
            if (error.message === GUESTBOOK_ENTRY_LIMIT_REACHED) {
                return toast.info("You have already signed the guestbook");
            }

            return toast.error("Internal server error");
        },
    });
}
