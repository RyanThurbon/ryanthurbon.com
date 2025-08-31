import { Card } from "@/components/ui/card";
import { PropsWithChildren } from "react";

export function PageLayout({ children }: PropsWithChildren) {
    return (
        <Card className="container mx-auto flex-1 w-full max-w-7xl rounded-t-none flex flex-col min-h-screen rounded-b-none">
            <div className="px-4 sm:px-6 lg:px-20 flex-1 flex flex-col">
                <div className="flex-1 flex flex-col">
                    {children}
                </div>
            </div>
        </Card>
    );
}
