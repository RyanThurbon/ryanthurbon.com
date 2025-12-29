import { siteConfig } from "@/config/siteConfig";
import {
    ProjectsDescription,
    ProjectsHeading,
    ProjectShowcase,
} from "@/features/projects/components";

export function Projects() {
    return (
        <section id="projects">
            <div className="flex flex-col gap-y-4 max-w-5xl">
                <ProjectsHeading />
                <ProjectsDescription />
                <div className="flex flex-col gap-y-10 mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {siteConfig.projects.map((project, index) => (
                            <ProjectShowcase key={index} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
