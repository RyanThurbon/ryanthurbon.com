import { Card, CardContent, CardFooter } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ProjectsConfig } from "@/lib/site-config.ts";
import { GlobeIcon } from "lucide-react";
import { Icons } from "@/components/shared/icons.tsx";

type ProjectShowcaseCardProps = {
    project: ProjectsConfig;
};

export function ProjectShowcaseCard(props: ProjectShowcaseCardProps) {
    return (
        <Card className="py-0 pb-2 bg-secondary gap-2 border-none">
            <a href={props.project.href} className="hover:cursor-pointer" target="_blank">
                <img
                    src={props.project.preview}
                    className="rounded-sm rounded-b-none aspect-[16/10]"
                    alt={`${props.project.name} preview`}
                    decoding="async"
                />
            </a>
            <CardContent className="px-2 py-2 flex flex-col gap-y-1">
                <h2 className="lexend-bold">{props.project.name}</h2>
                <p className="text-muted-foreground text-sm">{props.project.description}</p>
                <div className="flex items-center gap-1 flex-wrap mt-2">
                    {props.project.stackCategory.map((stack, index) => (
                        <Badge key={index} variant="outline">
                            {stack}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="px-2 flex items-center gap-x-2">
                <a href={props.project.href} target="_blank">
                    <Button size="sm" className="text-xs flex items-center gap-x-2 bg-primary/25 hover:bg-primary/50">
                        <GlobeIcon className="size-3" />
                        Website
                    </Button>
                </a>
                <a href={props.project.source} target="_blank">
                    <Button size="sm" className="text-xs flex items-center gap-x-2 bg-primary/25 hover:bg-primary/50">
                        <Icons.github className="size-3" />
                        Source
                    </Button>
                </a>
            </CardFooter>
        </Card>
    );
}
