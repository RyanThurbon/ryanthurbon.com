import { createFileRoute } from "@tanstack/react-router";
import { Toolbox } from "@/components/features/toolbox";

export const Route = createFileRoute("/toolbox/")({
    component: ToolboxPage,
});

function ToolboxPage() {
    return (
        <>
            <Toolbox/>
        </>
    );
}
