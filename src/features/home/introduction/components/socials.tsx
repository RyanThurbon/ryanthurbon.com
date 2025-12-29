import { Icons } from "@/components/shared/icons";
import { siteConfig } from "@/config/siteConfig";
import { Link } from "@tanstack/react-router";
import { MailIcon } from "lucide-react";
import { ReactNode } from "react";

interface SocialItem {
    name: string;
    url: string;
    icon: ReactNode;
}

const socials: SocialItem[] = [
    {
        name: "gmail",
        url: `mailto:${siteConfig.socials.gmail}`,
        icon: <MailIcon className="size-5" />,
    },
    {
        name: "github",
        url: siteConfig.socials.github,
        icon: <Icons.github className="size-5" />,
    },
    {
        name: "linkedIn",
        url: siteConfig.socials.linkedIn,
        icon: <Icons.linkedIn className="size-5" />,
    },
];

export function Socials() {
    return (
        <div className="flex items-center gap-x-6 text-muted-foreground">
            {socials.map((social, index) => (
                <Link
                    key={index}
                    to={social.url}
                    target="_blank"
                    aria-label={`Follow on ${social.name}`}
                    className="hover:text-foreground transition-colors"
                >
                    {social.icon}
                </Link>
            ))}
        </div>
    );
}
