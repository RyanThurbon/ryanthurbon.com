import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { siteConfig } from "@/config/siteConfig";
import { ToolboxShowcase } from "@/features/toolbox/components";
import { CodeXmlIcon } from "lucide-react";

export function Frontend() {
    return (
        <Card className="shadow-none bg-secondary">
            <CardHeader className="border-b border-dashed">
                <CardTitle className="flex items-center gap-x-4">
                    <CodeXmlIcon className="size-5 text-muted-foreground" />
                    Frontend development
                </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-x-4 gap-y-10 mt-2">
                {siteConfig.toolbox.frontend.map((tool, index) => (
                    <ToolboxShowcase key={index} tool={tool} />
                ))}
            </CardContent>
        </Card>
    );
}
