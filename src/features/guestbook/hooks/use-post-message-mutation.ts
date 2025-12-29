import { getGuestbookEntriesQueryOptions } from "@/features/guestbook/queries";
import {
    postGuestbookMessageServerFn,
    postMessageFormSchema,
} from "@/features/guestbook/server/functions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";

type PostMessagePayload = z.infer<typeof postMessageFormSchema>;

export function usePostMessageMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (message: PostMessagePayload) => {
            return await postGuestbookMessageServerFn({ data: message });
        },
        onSuccess: async (response) => {
            if (!response.success) {
                console.error("[POST_MESSAGE_MUTATION]:", response.error);
                return toast.info(response.error.message);
            }

            await queryClient.invalidateQueries(getGuestbookEntriesQueryOptions());
            return toast.success("You have signed the guestbook!");
        },
        onError: (error) => {
            console.error("[POST_MESSAGE_MUTATION]:", error);
            return toast.error("Internal Server Error");
        },
    });
}
