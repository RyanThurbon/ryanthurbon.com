import { getSessionQueryOptions } from "@/features/guestbook/queries";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";

export function useInvalidateAuth() {
    const router = useRouter();
    const queryClient = useQueryClient();

    return async () => {
        await queryClient.invalidateQueries(getSessionQueryOptions());
        await router.invalidate();
    };
}
