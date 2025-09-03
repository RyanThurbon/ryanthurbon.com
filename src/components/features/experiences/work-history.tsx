import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JobConfig, siteConfig } from "@/lib/site-config.ts";
import { ExperienceShowcase } from "@/components/shared/experience-showcase.tsx";
import { BriefcaseBusinessIcon, DownloadIcon } from "lucide-react";

export function WorkHistory() {
    return (
        <div className="lg:pl-20 flex-1">
            <Card className="shadow-none bg-secondary h-full flex flex-col w-full lg:max-w-xl">
                <CardHeader className="border-b border-dashed">
                    <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-x-4">
                            <BriefcaseBusinessIcon className="size-5 text-muted-foreground" />
                            Work history
                        </div>
                        <a
                            href={siteConfig.CVSrc}
                            target="_blank"
                            className="flex items-center gap-x-2 hover:cursor-pointer hover:text-primary transition-colors"
                        >
                            <DownloadIcon className="size-4" />
                            CV
                        </a>
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-y-4 flex-1">
                    {siteConfig.jobs.length > 0 ? (
                        siteConfig.jobs.map((job: JobConfig, index) => (
                            <ExperienceShowcase
                                key={index}
                                name={job.name}
                                url={job.url}
                                description={job.role}
                                duration={job.duration}
                                durationInYears={job.durationInYears}
                                logo={job.logo}
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
        </div>
    );
}
