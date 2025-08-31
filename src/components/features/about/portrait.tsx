import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";

export function AboutPortrait() {
    return (
        <Avatar
            className="rounded-2xl ml-6 md:ml-0 size-75 lg:size-105 rotate-3 pointer-events-none select-none"
        >
            <AvatarImage loading="lazy" decoding="async" src="/portrait.jpeg" alt="Portait of Ryan Thurbon"/>
            <AvatarFallback>Portrait of Ryan Thurbon</AvatarFallback>
        </Avatar>
    );
}