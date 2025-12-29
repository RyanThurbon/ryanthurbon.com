import { DesktopNavbar } from "@/components/shared/navbar/desktop";
import { MobileNavbar } from "@/components/shared/navbar/mobile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/siteConfig";
import { Link, LinkOptions, useRouterState } from "@tanstack/react-router";

export interface NavItem {
    label: string;
    to: LinkOptions["to"];
}

export const navItems: NavItem[] = [
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
        <header
            id="navbar"
            className="flex items-center justify-end md:justify-center w-full relative"
        >
            {!isHomePage && (
                <Link to="/" aria-label="Home" className="absolute left-0">
                    <Avatar className="size-10">
                        <AvatarImage src={siteConfig.githubProfileImage} />
                        <AvatarFallback>RT</AvatarFallback>
                    </Avatar>
                </Link>
            )}
            <nav className="px-3 py-1 rounded-full border bg-secondary">
                <DesktopNavbar navItems={navItems} />
                <MobileNavbar navItems={navItems} />
            </nav>
        </header>
    );
}
