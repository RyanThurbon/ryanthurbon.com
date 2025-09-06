import { SectionHeading } from "@/components/shared/section-heading.tsx";
import { ProjectsDescription } from "@/components/features/projects/description.tsx";
import { siteConfig } from "@/lib/site-config.ts";
import { ProjectShowcaseCard } from "@/components/features/projects/showcase-card.tsx";

export function Projects() {
    return (
        <section id="projects">
            <div className="flex flex-col gap-y-4 max-w-5xl">
                <SectionHeading heading="Some of the things I've built." />
                <ProjectsDescription />
                <div className="flex flex-col gap-y-10 mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {siteConfig.projects.map((project, index) => (
                            <ProjectShowcaseCard project={project} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
