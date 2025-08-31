import { WorkHistory } from "@/components/features/experiences/work-history.tsx";
import { Education } from "@/components/features/experiences/education.tsx";
import { Certifications } from "@/components/features/experiences/certifications.tsx";

export function Experiences() {
    return (
        <section id="experiences">
            <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="flex flex-col gap-y-10">
                    <Education/>
                    <Certifications/>
                </div>
                <WorkHistory/>
            </div>
        </section>
    );
}
