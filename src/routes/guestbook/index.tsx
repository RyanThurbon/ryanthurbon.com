import { createFileRoute } from "@tanstack/react-router";
import { Guestbook } from "@/components/features/guestbook";
import { getAuthQueryOptions } from "@/queries/auth/get-auth-query.ts";

export const Route = createFileRoute("/guestbook/")({
    beforeLoad: ({ context }) => {
        const auth = context.queryClient.ensureQueryData(getAuthQueryOptions());

        return {
            auth,
        };
    },
    component: GuestbookPage,
});

function GuestbookPage() {
    return (
        <>
            <Guestbook />
        </>
    );
}
