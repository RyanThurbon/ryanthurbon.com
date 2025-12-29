import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";
import { CertificationItem } from "@/config/certifications";
import { EducationItem } from "@/config/education";
import { JobItem } from "@/config/jobs";

type ExperienceItem = CertificationItem | JobItem | EducationItem;

export function ExperienceShowcase({
    experience,
    description,
}: {
    experience: ExperienceItem;
    description: string;
}) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-4">
                <Avatar className="size-10">
                    <AvatarImage src={experience.logo} alt={experience.title} />
                    <AvatarFallback>{experience.title[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-y-1">
                    <a
                        href={experience.url}
                        target="_blank"
                        className="font-medium hover:text-primary transition-colors"
                        aria-label={experience.title}
                    >
                        {experience.title}
                    </a>
                    <span className="text-muted-foreground text-sm">{description}</span>
                </div>
            </div>
            <div className="text-muted-foreground text-sm hidden md:block">{experience.period}</div>
        </div>
    );
}
