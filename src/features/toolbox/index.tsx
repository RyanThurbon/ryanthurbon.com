import {
    Backend,
    Cloud,
    Frontend,
    ToolboxDescription,
    ToolboxHeading,
    Tools,
} from "@/features/toolbox/components";

export function Toolbox() {
    return (
        <section id="toolbox">
            <div className="flex flex-col gap-y-4 max-w-4xl">
                <ToolboxHeading />
                <ToolboxDescription />
                <div className="flex flex-col gap-y-10 mt-4">
                    <Frontend />
                    <Backend />
                    <Cloud />
                    <Tools />
                </div>
            </div>
        </section>
    );
}
