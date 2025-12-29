import { Projects } from "@/features/projects";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
    component: ProjectsPage,
});

function ProjectsPage() {
    return <Projects />;
}
