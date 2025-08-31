import { SectionHeading } from "@/components/shared/section-heading.tsx";
import { GuestbookPrompt } from "@/components/features/guestbook/prompt.tsx";
import { GuestbookAuth } from "@/components/features/guestbook/auth/index.tsx";
import { GuestbookMessageList } from "@/components/features/guestbook/message-list.tsx";
import { Suspense } from "react";
import { PendingFallback } from "@/components/shared/fallbacks/pending-fallback.tsx";

export function Guestbook() {
    return (
        <section id="guestbook">
            <div className="flex flex-col gap-y-4">
                <SectionHeading heading="A place to share all your thoughts!"/>
                <GuestbookPrompt/>
                <Suspense fallback={<PendingFallback/>}>
                    <GuestbookAuth/>
                    <GuestbookMessageList/>
                </Suspense>
            </div>
        </section>
    );
}
