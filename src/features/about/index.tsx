import { AboutDescription, AboutHeading, Contact } from "@/features/about/components";

export function About() {
    return (
        <section id="about">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="flex flex-col gap-y-8">
                    <AboutHeading />
                    <AboutDescription />
                </div>
                <Contact />
            </div>
        </section>
    );
}
