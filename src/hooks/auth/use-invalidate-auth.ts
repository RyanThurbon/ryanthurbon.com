import { useRouter } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { getAuthQueryOptions } from "@/queries/auth/get-auth-query.ts";

export function useInvalidateAuth() {
    const router = useRouter();
    const queryClient = useQueryClient();

    return async () => {
        await queryClient.invalidateQueries(getAuthQueryOptions());
        await router.invalidate();
    };
}
