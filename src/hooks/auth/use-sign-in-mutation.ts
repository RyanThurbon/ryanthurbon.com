import { toast } from "sonner";
import { authClient } from "@/lib/auth/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidateAuth } from "@/hooks/auth/use-invalidate-auth.ts";

export function useSignInMutation() {
    const invalidateAuth = useInvalidateAuth();

    return useMutation({
        mutationFn: async () => {
            return await authClient.signIn.social({
                provider: "github",
                callbackURL: "/guestbook",
            });
        },
        onSuccess: async (response) => {
            if (!response.data) {
                return toast.error("Something went wrong. Please try again later.");
            }

            await invalidateAuth();
            return toast.success("Signed in! Redirecting...");
        },
        onError: (error) => {
            console.error(error);
            return toast.error("Internal server error");
        },
    });
}
