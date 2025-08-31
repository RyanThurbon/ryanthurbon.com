import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EducationConfig, siteConfig } from "@/lib/site-config";
import { ExperienceShowcase } from "@/components/shared/experience-showcase.tsx";
import { GraduationCapIcon } from "lucide-react";

export function Education() {
    return (
        <section id="education">
            <div className="flex flex-col gap-y-4 w-full lg:max-w-xl">
                <Card className="shadow-none bg-secondary">
                    <CardHeader className="border-b border-dashed">
                        <CardTitle className="flex items-center gap-x-4">
                            <GraduationCapIcon className="size-5 text-muted-foreground"/>
                            Education
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-y-6">
                        {siteConfig.education.map((education: EducationConfig, index) => (
                            <ExperienceShowcase
                                key={index}
                                name={education.name}
                                url={education.url}
                                description={education.qualification}
                                duration={education.duration}
                                durationInYears={education.durationInYears}
                                logo={education.logo}
                            />
                        ))}
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
