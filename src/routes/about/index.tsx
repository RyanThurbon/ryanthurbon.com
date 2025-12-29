import { About } from "@/features/about";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/")({
    component: AboutPage,
});

function AboutPage() {
    return <About />;
}
