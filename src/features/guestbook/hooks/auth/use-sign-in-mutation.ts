import { useInvalidateAuth } from "@/features/guestbook/hooks";
import { authClient } from "@/lib/auth/client.ts";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

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
                console.error("[SIGN_IN_MUTATION]:", response.error);
                return toast.error("Something went wrong. Please try again later.");
            }

            await invalidateAuth();
            return toast.success("Signed in! Redirecting...");
        },
        onError: (error) => {
            console.error("[SIGN_IN_MUTATION]:", error);
            return toast.error("Internal Server Error");
        },
    });
}
