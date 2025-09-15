import { Introduction } from "@/components/features/introduction";
import { createFileRoute } from "@tanstack/react-router";
import { Experiences } from "@/components/features/experiences";

export const Route = createFileRoute("/")({
    component: HomePage,
});

function HomePage() {
    return (
        <div className="flex flex-col gap-y-10">
            <Introduction />
            <Experiences />
        </div>
    );
}
