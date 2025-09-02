import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";

export function AboutPortrait() {
    return (
        <Avatar className="rounded-2xl size-75 lg:size-105 rotate-3 pointer-events-none select-none">
            <AvatarImage loading="lazy" decoding="async" src="/portrait-copy.jpg" alt="Portait of Ryan Thurbon" />
            <AvatarFallback>Portrait of Ryan Thurbon</AvatarFallback>
        </Avatar>
    );
}
