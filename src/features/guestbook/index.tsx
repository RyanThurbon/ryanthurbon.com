import { PendingFallback } from "@/components/shared/fallbacks/pending-fallback.tsx";
import {
    GuestbookAuth,
    GuestbookDescription,
    GuestbookEntriesList,
    GuestbookHeading,
} from "@/features/guestbook/components";
import { Suspense } from "react";

export function Guestbook() {
    return (
        <section id="guestbook">
            <div className="flex flex-col gap-y-4">
                <GuestbookHeading />
                <GuestbookDescription />
                <Suspense fallback={<PendingFallback />}>
                    <GuestbookAuth />
                    <GuestbookEntriesList />
                </Suspense>
            </div>
        </section>
    );
}
