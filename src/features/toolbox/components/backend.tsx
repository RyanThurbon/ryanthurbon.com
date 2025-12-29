import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { siteConfig } from "@/config/siteConfig";
import { ToolboxShowcase } from "@/features/toolbox/components";
import { DatabaseZapIcon } from "lucide-react";

export function Backend() {
    return (
        <Card className="shadow-none bg-secondary">
            <CardHeader className="border-b border-dashed">
                <CardTitle className="flex items-center gap-x-4">
                    <DatabaseZapIcon className="size-5 text-muted-foreground" />
                    Backend development
                </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-x-4 gap-y-10 mt-2">
                {siteConfig.toolbox.backend.map((tool, index) => (
                    <ToolboxShowcase key={index} tool={tool} />
                ))}
            </CardContent>
        </Card>
    );
}
