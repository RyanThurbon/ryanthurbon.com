import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CertificationItem } from "@/config/certifications";
import { siteConfig } from "@/config/siteConfig";
import { ExperienceShowcase } from "@/features/home/experiences/components";
import { AwardIcon } from "lucide-react";

export function Certifications() {
    return (
        <section id="certifications">
            <div className="flex flex-col gap-y-4 w-full lg:max-w-xl">
                <Card className="shadow-none bg-secondary">
                    <CardHeader className="border-b border-dashed">
                        <CardTitle className="flex items-center gap-x-4">
                            <AwardIcon className="size-5 text-muted-foreground" />
                            Certifications
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-y-6">
                        {siteConfig.achievements.map((certification: CertificationItem, index) => (
                            <ExperienceShowcase
                                key={index}
                                experience={certification}
                                description={`Verification code: ${certification.verificationCode}`}
                            />
                        ))}
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
