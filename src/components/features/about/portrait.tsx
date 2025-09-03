import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";
import { siteConfig } from "@/lib/site-config.ts";

export function AboutPortrait() {
    return (
        <Avatar className="rounded-2xl size-75 lg:size-105 rotate-3 pointer-events-none select-none">
            <AvatarImage loading="lazy" decoding="async" src={siteConfig.portraitSrc} alt="Portait of Ryan Thurbon" />
            <AvatarFallback className="rounded-2xl">Portrait of Ryan Thurbon</AvatarFallback>
        </Avatar>
    );
}
