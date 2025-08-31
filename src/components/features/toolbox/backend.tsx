import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { DatabaseZapIcon } from "lucide-react";
import { siteConfig } from "@/lib/site-config.ts";
import { StackDisplay } from "@/components/shared/stack-display.tsx";

export function ToolboxBackend() {
    return (
        <Card className="shadow-none bg-secondary">
            <CardHeader className="border-b border-dashed">
                <CardTitle className="flex items-center gap-x-4">
                    <DatabaseZapIcon className="size-5 text-muted-foreground"/>
                    Backend development
                </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-x-4 gap-y-10 mt-2">
                {siteConfig.toolbox.backend.map((stack, index) => (
                    <StackDisplay
                        key={index}
                        name={stack.name}
                        href={stack.href}
                        description={stack.description}
                        stackCategory={stack.stackCategory}
                        svg={stack.svg}
                    />
                ))}
            </CardContent>
        </Card>
    );
}