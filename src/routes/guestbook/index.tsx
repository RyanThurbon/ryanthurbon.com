import { Guestbook } from "@/features/guestbook";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/guestbook/")({
    component: GuestbookPage,
});

function GuestbookPage() {
    return <Guestbook />;
}
