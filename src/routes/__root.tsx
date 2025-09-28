import { PageLayout } from "@/components/layouts/page-layout";
import { Footer } from "@/components/shared/footer.tsx";
import { Navbar } from "@/components/shared/navbar";
import { Toaster } from "@/components/ui/sonner.tsx";
import appCss from "@/styles.css?url";
import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ReactNode } from "react";

interface IRouterContext {
    queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<IRouterContext>()({
    head: () => ({
        meta: [
            {
                charSet: "utf-8",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
        ],
        links: [
            {
                rel: "stylesheet",
                href: appCss,
            },
            {
                rel: "preconnect",
                href: "https://fonts.googleapis.com",
                crossOrigin: "anonymous",
            },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossOrigin: "anonymous",
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap",
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Lexend:wght@500&display=swap",
            },
        ],
    }),
    shellComponent: RootDocument,
});

function RootDocument({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Ryan Thurbon</title>
                <HeadContent />
            </head>
            <body className="flex min-h-screen bg-black">
                <PageLayout>
                    <div className="flex flex-col h-full w-full">
                        <main className="flex-1">
                            <Navbar />
                            <div className="mt-24 md:mt-28 gap-y-10">{children}</div>
                        </main>
                        <Footer />
                    </div>
                </PageLayout>
                <Toaster position="bottom-center" duration={3000} richColors />
                <Analytics />
                <SpeedInsights />
                <Scripts />
            </body>
        </html>
    );
}
