import { Icons } from "@/components/shared/icons.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useSignInMutation } from "@/features/guestbook/hooks";

export function SignIn() {
    const signInMutation = useSignInMutation();

    return (
        <div className="max-w-fit">
            <Button
                variant="secondary"
                aria-label="Sign in with GitHub"
                onClick={() => signInMutation.mutate()}
                disabled={signInMutation.isPending}
            >
                {signInMutation.isPending ? (
                    <Icons.spinner className="size-4 animate-spin" />
                ) : (
                    <Icons.github className="size-4" />
                )}
                Sign in with GitHub
            </Button>
        </div>
    );
}
