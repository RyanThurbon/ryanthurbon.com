import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AchievementConfig, siteConfig } from "@/lib/site-config.ts";
import { ExperienceShowcase } from "@/components/shared/experience-showcase.tsx";
import { AwardIcon } from "lucide-react";

export function Certifications() {
    return (
        <section id="certifications">
            <div className="flex flex-col gap-y-4 w-full lg:max-w-xl">
                <Card className="shadow-none bg-secondary">
                    <CardHeader className="border-b border-dashed">
                        <CardTitle className="flex items-center gap-x-4">
                            <AwardIcon className="size-5 text-muted-foreground"/>
                            Certifications
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-y-6">
                        {siteConfig.achievements.map((achievement: AchievementConfig, index) => (
                            <ExperienceShowcase
                                key={index}
                                name={achievement.name}
                                url={achievement.url}
                                description={`Verification code: ${achievement.verificationCode}`}
                                duration={achievement.duration}
                                durationInYears={achievement.durationInYears}
                                logo={achievement.logo}/>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
