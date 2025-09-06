import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/features/projects";

export const Route = createFileRoute("/projects/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <Projects />
        </>
    );
}
