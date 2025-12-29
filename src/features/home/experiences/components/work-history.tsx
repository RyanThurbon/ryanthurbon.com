import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JobItem } from "@/config/jobs";
import { siteConfig } from "@/config/siteConfig";
import { ExperienceShowcase } from "@/features/home/experiences/components";
import { BriefcaseBusinessIcon, DownloadIcon } from "lucide-react";

export function WorkHistory() {
    return (
        <section id="work-history" className="flex-1 lg:pl-20">
            <Card className="shadow-none bg-secondary h-full flex flex-col w-full lg:max-w-xl">
                <CardHeader className="border-b border-dashed">
                    <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-x-4">
                            <BriefcaseBusinessIcon className="size-5 text-muted-foreground" />
                            Work history
                        </div>
                        <a
                            href={siteConfig.cvSrc}
                            target="_blank"
                            aria-label="Download CV"
                            className="group flex items-center gap-x-2 hover:cursor-pointer hover:text-primary transition-colors"
                        >
                            <DownloadIcon className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            CV
                        </a>
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-y-4 flex-1">
                    {siteConfig.jobs.length > 0 ? (
                        siteConfig.jobs.map((job: JobItem, index) => (
                            <ExperienceShowcase
                                key={index}
                                experience={job}
                                description={job.role}
                            />
                        ))
                    ) : (
                        <p className="flex flex-col gap-y-4 text-muted-foreground text-sm italic">
                            No current professional work history.
                        </p>
                    )}
                    <span
                        className={`text-sm animate-bounce italic ${
                            siteConfig.openToWork ? "text-emerald-400" : "text-destructive"
                        }`}
                    >
                        {siteConfig.openToWork ? "*Open to work" : "*Not open to work"}
                    </span>
                </CardContent>
            </Card>
        </section>
    );
}
