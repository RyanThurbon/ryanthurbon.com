import { PageLayout } from "@/components/layouts/page-layout";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { Toaster } from "@/components/ui/sonner";
import type { QueryClient } from "@tanstack/react-query";
import { HeadContent, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import appCss from "../styles.css?url";

interface AppContext {
    queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<AppContext>()({
    head: () => ({
        meta: [
            {
                charSet: "utf-8",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                title: "Ryan Thurbon",
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

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body className="flex min-h-screen bg-black">
                <PageLayout>
                    <main className="flex-1">
                        <Navbar />
                        <div className="mt-24 md:mt-28 gap-y-10">{children}</div>
                    </main>
                    <Footer />
                </PageLayout>
                <Toaster position="bottom-center" duration={5000} richColors />
                <Scripts />
            </body>
        </html>
    );
}
