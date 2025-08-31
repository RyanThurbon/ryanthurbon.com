import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/features/about";

export const Route = createFileRoute("/about/")({
    component: AboutPage,
});

function AboutPage() {
    return (
        <>
            <About/>
        </>
    );
}
