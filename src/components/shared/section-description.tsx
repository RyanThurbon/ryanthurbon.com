import { PropsWithChildren } from "react";

export function SectionDescription({ children }: PropsWithChildren) {
    return <p className="text-muted-foreground">{children}</p>;
}
