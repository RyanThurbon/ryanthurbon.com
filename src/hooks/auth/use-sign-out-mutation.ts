import { toast } from "sonner";
import { authClient } from "@/lib/auth/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidateAuth } from "@/hooks/auth/use-invalidate-auth.ts";

export function useSignOutMutation() {
    const invalidateAuth = useInvalidateAuth();

    return useMutation({
        mutationFn: async () => {
            return await authClient.signOut();
        },
        onSuccess: async (response) => {
            if (!response.data) {
                return toast.error("Something went wrong. Please try again later.");
            }

            await invalidateAuth();
            toast.success("Signed out!");
        },
        onError: (error) => {
            console.error(error);
            return toast.error("Internal server error");
        },
    });
}
