import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { getMessagesQueryOptions } from "@/queries/guestbook/get-messages-query.ts";
import { $postMessageServerFn, postMessageFormSchema } from "@/server/functions/guestbook/post-message-fn.ts";

type PostMessagePayload = z.infer<typeof postMessageFormSchema>;

export function usePostMessageMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (message: PostMessagePayload) => {
            return await $postMessageServerFn({ data: message });
        },
        onSuccess: async (response) => {
            if (!response.success) {
                return toast.info(response.message);
            }

            await queryClient.invalidateQueries(getMessagesQueryOptions());
            toast.success(response.message);
        },
        onError: (error) => {
            console.error(error);
            return toast.error("Internal server error");
        },
    });
}
