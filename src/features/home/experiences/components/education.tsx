import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EducationItem } from "@/config/education";
import { siteConfig } from "@/config/siteConfig";
import { ExperienceShowcase } from "@/features/home/experiences/components";
import { GraduationCapIcon } from "lucide-react";

export function Education() {
    return (
        <section id="education">
            <div className="flex flex-col gap-y-4 w-full lg:max-w-xl">
                <Card className="shadow-none bg-secondary">
                    <CardHeader className="border-b border-dashed">
                        <CardTitle className="flex items-center gap-x-4">
                            <GraduationCapIcon className="size-5 text-muted-foreground" />
                            Education
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-y-6">
                        {siteConfig.education.map((education: EducationItem, index) => (
                            <ExperienceShowcase
                                key={index}
                                experience={education}
                                description={education.qualification}
                            />
                        ))}
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
