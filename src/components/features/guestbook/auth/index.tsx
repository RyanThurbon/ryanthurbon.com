import { GuestbookSignIn } from "@/components/features/guestbook/auth/sign-in.tsx";
import { UserProvider } from "@/providers/user-provider.tsx";
import { GuestbookPostMessageForm } from "@/components/features/guestbook/post-message-form.tsx";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getAuthQueryOptions } from "@/queries/auth/get-auth-query.ts";

export function GuestbookAuth() {
    const { data: auth } = useSuspenseQuery(getAuthQueryOptions());

    if (!auth) {
        return <GuestbookSignIn/>;
    }

    return (
        <UserProvider user={auth.user}>
            <GuestbookPostMessageForm/>
        </UserProvider>
    );
}
