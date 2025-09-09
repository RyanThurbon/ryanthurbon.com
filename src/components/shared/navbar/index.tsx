import { DesktopNavbar } from "@/components/shared/navbar/desktop";
import { MobileNavbar } from "@/components/shared/navbar/mobile";
import { Link, LinkOptions, useRouterState } from "@tanstack/react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";
import { siteConfig } from "@/lib/site-config.ts";

export type Nav = {
    label: string;
    to: LinkOptions["to"];
};

export const nav: Nav[] = [
    {
        label: "Projects",
        to: "/projects",
    },
    {
        label: "Toolbox",
        to: "/toolbox",
    },
    {
        label: "Guestbook",
        to: "/guestbook",
    },
    {
        label: "About",
        to: "/about",
    },
];

export function Navbar() {
    const location = useRouterState({
        select: (state) => state.location,
    });

    const isHomePage = location.pathname === "/";

    return (
        <header id="navbar" className="flex items-center justify-end md:justify-center w-full relative">
            {!isHomePage && (
                <Link to="/" aria-label="Home" className="absolute left-0">
                    <Avatar className="size-10">
                        <AvatarImage src={siteConfig.githubProfileImage} />
                        <AvatarFallback>RT</AvatarFallback>
                    </Avatar>
                </Link>
            )}
            <nav className="px-3 py-1 rounded-full border bg-secondary">
                <DesktopNavbar nav={nav} />
                <MobileNavbar nav={nav} />
            </nav>
        </header>
    );
}
