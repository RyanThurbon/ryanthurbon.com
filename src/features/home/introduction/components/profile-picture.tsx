import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/siteConfig";
import { Link } from "@tanstack/react-router";

export function ProfilePicture() {
    return (
        <div className="inline-block w-fit">
            <Link to="/" aria-label="Home">
                <Avatar className="size-20">
                    <AvatarImage src={siteConfig.githubProfileImage} />
                    <AvatarFallback>RT</AvatarFallback>
                </Avatar>
            </Link>
        </div>
    );
}
