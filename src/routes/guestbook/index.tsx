import { createFileRoute } from "@tanstack/react-router";
import { Guestbook } from "@/components/features/guestbook";

export const Route = createFileRoute("/guestbook/")({
    component: GuestbookPage,
});

function GuestbookPage() {
    return (
        <>
            <Guestbook/>
        </>
    );
}

