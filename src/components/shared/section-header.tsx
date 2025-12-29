import { PropsWithChildren } from "react";

export function SectionHeading({ children }: PropsWithChildren) {
    return (
        <h1 className="text-4xl sm:text-5xl font-bold lexend-bold tracking-tight leading-snug">
            {children}
        </h1>
    );
}
