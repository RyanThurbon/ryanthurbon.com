import { SectionHeading } from "@/components/shared/section-heading.tsx";
import { AboutIntro } from "@/components/features/about/intro.tsx";
import { AboutSideProjects } from "@/components/features/about/side-projects.tsx";
import { AboutGameDevModding } from "@/components/features/about/game-dev-modding.tsx";
import { AboutPhilosophy } from "@/components/features/about/philosophy.tsx";
import { AboutContactMe } from "@/components/features/about/contact-me.tsx";

export function About() {
    return (
        <section id="about">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="flex flex-col gap-y-8">
                    <SectionHeading heading="Hi! I'm Ryan Thurbon."/>
                    <AboutIntro/>
                    <AboutSideProjects/>
                    <AboutGameDevModding/>
                    <AboutPhilosophy/>
                </div>
                <AboutContactMe/>
            </div>
        </section>
    );
}
