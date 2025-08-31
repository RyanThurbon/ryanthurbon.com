import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";

export type ExperienceShowcaseProps = {
    name: string,
    url: string,
    description: string,
    duration: string,
    durationInYears: number,
    logo: string,
}

export function ExperienceShowcase(props: ExperienceShowcaseProps) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-4">
                <Avatar className="size-10">
                    <AvatarImage src={props.logo} alt={props.name}/>
                    <AvatarFallback>
                        {props.name[0]}
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-y-1">
                    <a
                        href={props.url}
                        target="_blank"
                        className="font-medium hover:text-primary transition-colors"
                        aria-label={props.name}
                    >
                        {props.name}
                    </a>
                    <span className="text-muted-foreground text-sm">
                        {props.description}
                    </span>
                </div>
            </div>
            <div className="text-muted-foreground text-sm hidden md:block">
                {props.duration}
            </div>
        </div>
    );
}
