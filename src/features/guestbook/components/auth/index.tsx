import { PostGuestbookMessageForm, SignIn } from "@/features/guestbook/components";
import { UserProvider } from "@/features/guestbook/providers";
import { getSessionQueryOptions } from "@/features/guestbook/queries";
import { useSuspenseQuery } from "@tanstack/react-query";

export function GuestbookAuth() {
    const { data: auth } = useSuspenseQuery(getSessionQueryOptions());

    if (!auth) {
        return <SignIn />;
    }

    return (
        <UserProvider user={auth.user}>
            <PostGuestbookMessageForm />
        </UserProvider>
    );
}
