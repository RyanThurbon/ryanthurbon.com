import { Card } from "@/components/ui/card.tsx";
import { Icons } from "@/components/shared/icons.tsx";
import { siteConfig } from "@/lib/site-config.ts";
import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator.tsx";
import { CodeIcon, MailIcon } from "lucide-react";
import { AboutPortrait } from "@/components/features/about/portrait.tsx";

type Contact = {
    name: string;
    href: string;
    icon: ReactNode;
    ariaLabel: string;
};

const contacts: Contact[] = [
    {
        name: "GitHub",
        href: siteConfig.socials.github,
        icon: <Icons.github className="size-5 text-muted-foreground group-hover:text-primary transition-colors"/>,
        ariaLabel: "GitHub profile",
    },
    {
        name: "LinkedIn",
        href: siteConfig.socials.linkedIn,
        icon: <Icons.linkedIn className="size-5 text-muted-foreground group-hover:text-primary transition-colors"/>,
        ariaLabel: "LinkedIn profile",
    },
];

export function AboutContactMe() {
    return (
        <div className="flex flex-col gap-y-20 lg:pl-32">
            <AboutPortrait/>
            <Card className="border-none shadow-none py-0 flex flex-col gap-y-6 text-sm">
                {contacts.map((contact, index) => (
                    <a
                        href={contact.href}
                        key={index}
                        target="_blank"
                        aria-label={contact.ariaLabel}
                        className="group flex items-center gap-x-6 hover:cursor-pointer"
                    >
                        {contact.icon}
                        <span className="transition-colors group-hover:text-primary">
                        Follow on {contact.name}
                    </span>
                    </a>
                ))}
                <Separator className="my-1"/>
                <a
                    href={siteConfig.siteSource}
                    target="_blank"
                    aria-label="Send email"
                    className="group flex items-center gap-x-6 cursor-pointer"
                >
                    <CodeIcon className="size-5 text-muted-foreground group-hover:text-primary transition-colors"/>
                    <span className="transition-colors group-hover:text-primary">Site source code</span>
                </a>
                <a
                    href={`mailto:${siteConfig.socials.gmail}`}
                    target="_blank"
                    aria-label="Send email"
                    className="group flex items-center gap-x-6 cursor-pointer"
                >
                    <MailIcon className="size-5 text-muted-foreground group-hover:text-primary transition-colors"/>
                    <span className="transition-colors group-hover:text-primary">{siteConfig.socials.gmail}</span>
                </a>
            </Card>
        </div>
    );
}
