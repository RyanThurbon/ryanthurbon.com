import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/lib/site-config.ts";

export function IntroProfilePicture() {
    return (
        <div className="inline-block w-fit">
            <Link to="/" aria-label="Home">
                <Avatar className="size-20">
                    <AvatarImage src={siteConfig.githubProfileImage} alt="Ryan's github profile image" />
                    <AvatarFallback>RT</AvatarFallback>
                </Avatar>
            </Link>
        </div>
    );
}
