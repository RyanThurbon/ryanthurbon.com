import { Icons } from "@/components/shared/icons.tsx";
import { Card } from "@/components/ui/card.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { siteConfig } from "@/config/siteConfig";
import { Portrait } from "@/features/about/components";
import { CodeIcon, MailIcon } from "lucide-react";
import { ReactNode } from "react";

interface ContactItem {
    name: string;
    href: string;
    icon: ReactNode;
}

const contacts: ContactItem[] = [
    {
        name: "GitHub",
        href: siteConfig.socials.github,
        icon: (
            <Icons.github className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
        ),
    },
    {
        name: "LinkedIn",
        href: siteConfig.socials.linkedIn,
        icon: (
            <Icons.linkedIn className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
        ),
    },
];

export function Contact() {
    return (
        <div className="flex flex-col gap-y-20 lg:pl-32">
            <Portrait />
            <Card className="border-none shadow-none py-0 flex flex-col gap-y-6 text-sm">
                {contacts.map((contact, index) => (
                    <a
                        href={contact.href}
                        key={index}
                        target="_blank"
                        aria-label={`${contact.name} profile`}
                        className="group flex items-center gap-x-6 hover:cursor-pointer"
                    >
                        {contact.icon}
                        <span className="transition-colors group-hover:text-primary">
                            Follow on {contact.name}
                        </span>
                    </a>
                ))}
                <Separator className="my-1" />
                <a
                    href={siteConfig.siteSource}
                    target="_blank"
                    aria-label="Send email"
                    className="group flex items-center gap-x-6 cursor-pointer"
                >
                    <CodeIcon className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="transition-colors group-hover:text-primary">
                        Site source code
                    </span>
                </a>
                <a
                    href={`mailto:${siteConfig.socials.gmail}`}
                    target="_blank"
                    aria-label="Send email"
                    className="group flex items-center gap-x-6 cursor-pointer"
                >
                    <MailIcon className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="transition-colors group-hover:text-primary">
                        {siteConfig.socials.gmail}
                    </span>
                </a>
            </Card>
        </div>
    );
}
