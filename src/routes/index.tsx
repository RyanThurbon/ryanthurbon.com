import { Experiences, Introduction } from "@/features/home";
import { createFileRoute } from "@tanstack/react-router";

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
