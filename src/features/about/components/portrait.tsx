import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";
import { siteConfig } from "@/config/siteConfig";

export function Portrait() {
    return (
        <Avatar className="rounded-2xl size-75 lg:size-105 rotate-3 pointer-events-none select-none">
            <AvatarImage decoding="async" src={siteConfig.portraitSrc} />
            <AvatarFallback className="rounded-2xl">Portrait of Ryan Thurbon</AvatarFallback>
        </Avatar>
    );
}
