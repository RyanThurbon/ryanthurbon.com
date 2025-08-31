import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "@tanstack/react-router";

export function IntroProfilePicture() {
    return (
        <div className="inline-block w-fit">
            <Link to="/" aria-label="Home">
                <Avatar className="size-16">
                    <AvatarImage src="/github.png" alt="Ryan's GitHub profile picture"/>
                    <AvatarFallback>RT</AvatarFallback>
                </Avatar>
            </Link>
        </div>
    );
}