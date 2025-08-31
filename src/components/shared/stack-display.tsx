import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";
import { ExternalLinkIcon } from "lucide-react";

type StackDisplayProps = {
    name: string,
    href: string,
    description: string,
    stackCategory: string[],
    svg: string,
}

export function StackDisplay(props: StackDisplayProps) {
    return (
        <a href={props.href} target="_blank" className="flex items-center gap-x-4 group" aria-label={`Link to ${props.name}`}>
            <Avatar className="size-5 md:size-8">
                <AvatarImage loading="lazy" decoding="async" src={props.svg}/>
                <AvatarFallback>{props.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-y-1">
                <div
                    className="group-hover:text-primary transition-colors flex items-center gap-x-2"
                >
                    {props.name}
                    <ExternalLinkIcon className="opacity-0 group-hover:opacity-100 transition-opacity size-3"/>
                </div>
                <p className="text-muted-foreground text-sm">
                    {props.description}
                </p>
                {/*<div className="flex flex-wrap items-center gap-x-1 py-1">*/}
                {/*    {props.stackCategory.map((category, index) => (*/}
                {/*        <Badge variant="outline" key={index}>*/}
                {/*            {category}*/}
                {/*        </Badge>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
        </a>
    );
}