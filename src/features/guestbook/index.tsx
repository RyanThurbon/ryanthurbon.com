import { GuestbookAuth, GuestbookDescription, GuestbookEntriesList, GuestbookHeading } from "@/features/guestbook/components";
import { SuspenseBoundary } from "@/components/shared/boundaries/suspense-boundary.tsx";

export function Guestbook() {
    return (
        <section id="guestbook">
            <div className="flex flex-col gap-y-4">
                <GuestbookHeading />
                <GuestbookDescription />
                <SuspenseBoundary>
                    <GuestbookAuth />
                    <GuestbookEntriesList />
                </SuspenseBoundary>
            </div>
        </section>
    );
}
