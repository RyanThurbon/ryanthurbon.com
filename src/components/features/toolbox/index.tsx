import { SectionHeading } from "@/components/shared/section-heading.tsx";
import { ToolboxFrontend } from "@/components/features/toolbox/frontend.tsx";
import { ToolboxBackend } from "@/components/features/toolbox/backend.tsx";
import { ToolboxCloud } from "@/components/features/toolbox/cloud.tsx";
import { ToolboxDescription } from "@/components/features/toolbox/description.tsx";
import { ToolboxTools } from "@/components/features/toolbox/tools.tsx";

export function Toolbox() {
    return (
        <section id="toolbox">
            <div className="flex flex-col gap-y-4 max-w-4xl">
                <SectionHeading heading="The tools that power my projects."/>
                <ToolboxDescription/>
                <div className="flex flex-col gap-y-10 mt-4">
                    <ToolboxFrontend/>
                    <ToolboxBackend/>
                    <ToolboxCloud/>
                    <ToolboxTools/>
                </div>
            </div>
        </section>
    );
}