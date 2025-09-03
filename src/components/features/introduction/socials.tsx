import { Icons } from "@/components/shared/icons";
import { siteConfig } from "@/lib/site-config";
import { MailIcon } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

type Social = {
    name: string;
    href: string;
    icon: ReactNode;
    ariaLabel: string;
};

const socials: Social[] = [
    {
        name: "gmail",
        href: `mailto:${siteConfig.socials.gmail}`,
        icon: <MailIcon className="size-5" />,
        ariaLabel: "Send email",
    },
    {
        name: "github",
        href: siteConfig.socials.github,
        icon: <Icons.github />,
        ariaLabel: "GitHub profile",
    },
    {
        name: "linkedIn",
        href: siteConfig.socials.linkedIn,
        icon: <Icons.linkedIn />,
        ariaLabel: "LinkedIn profile",
    },
];

export function IntroSocials() {
    return (
        <div className="flex items-center gap-x-6 text-muted-foreground">
            {socials.map((social, index) => (
                <Link
                    key={index}
                    to={social.href}
                    target="_blank"
                    aria-label={social.ariaLabel}
                    className="hover:text-foreground transition-colors"
                >
                    {social.icon}
                </Link>
            ))}
        </div>
    );
}
