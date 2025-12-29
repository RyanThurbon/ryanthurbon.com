import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";
import { ToolboxItem } from "@/config/toolbox/types";
import { ExternalLinkIcon } from "lucide-react";

export function ToolboxShowcase({ tool }: { tool: ToolboxItem }) {
    return (
        <a
            href={tool.url}
            target="_blank"
            className="flex items-center gap-x-4 group"
            aria-label={`Go to ${tool.title}`}
        >
            <Avatar className="size-5 md:size-8">
                <AvatarImage loading="lazy" decoding="async" src={tool.svg} />
                <AvatarFallback>{tool.title[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-y-1">
                <div className="group-hover:text-primary transition-colors flex items-center gap-x-2">
                    {tool.title}
                    <ExternalLinkIcon className="opacity-0 group-hover:opacity-100 transition-opacity size-3" />
                </div>
                <p className="text-muted-foreground text-sm">{tool.description}</p>
            </div>
        </a>
    );
}
