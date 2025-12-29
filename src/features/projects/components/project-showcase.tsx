import { Icons } from "@/components/shared/icons.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardFooter } from "@/components/ui/card.tsx";
import { ProjectItem } from "@/config/projects";
import { GlobeIcon } from "lucide-react";

export function ProjectShowcase({ project }: { project: ProjectItem }) {
    return (
        <Card className="py-2 bg-secondary gap-2 border-none">
            <CardContent className="px-2 py-2 flex flex-col gap-y-4">
                <a href={project.url} className="hover:cursor-pointer" target="_blank">
                    <img
                        src={project.preview}
                        className="rounded-sm aspect-16/10"
                        alt={`${project.title} preview`}
                        decoding="async"
                    />
                </a>
                <div className="flex flex-col gap-y-1 border-t">
                    <h2 className="lexend-bold mt-2">{project.title}</h2>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                    <div className="flex items-center gap-1 flex-wrap mt-2">
                        {project.stack.map((stack, index) => (
                            <Badge key={index} variant="outline">
                                {stack}
                            </Badge>
                        ))}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="px-2 flex items-center gap-x-2">
                <a href={project.url} target="_blank">
                    <Button
                        size="sm"
                        className="text-xs flex items-center gap-x-2 bg-primary/25 hover:bg-primary/50"
                    >
                        <GlobeIcon className="size-3" />
                        Website
                    </Button>
                </a>
                <a href={project.source} target="_blank">
                    <Button
                        size="sm"
                        className="text-xs flex items-center gap-x-2 bg-primary/25 hover:bg-primary/50"
                    >
                        <Icons.github className="size-3" />
                        Source
                    </Button>
                </a>
            </CardFooter>
        </Card>
    );
}
