import { Toolbox } from "@/features/toolbox";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/toolbox/")({
    component: ToolboxPage,
});

function ToolboxPage() {
    return <Toolbox />;
}
