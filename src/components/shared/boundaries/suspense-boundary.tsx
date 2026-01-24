import { PendingFallback } from "@/components/shared/fallbacks/pending-fallback.tsx";
import { PropsWithChildren, Suspense } from "react";

export function SuspenseBoundary({ children }: PropsWithChildren) {
    return (
        <Suspense fallback={<PendingFallback />}>
            {children}
        </Suspense>
    );
}