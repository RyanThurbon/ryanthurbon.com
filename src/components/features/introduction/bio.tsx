import { siteConfig } from "@/lib/site-config";
import { SectionDescription } from "@/components/shared/section-description.tsx";

export function IntroBio() {
    return (
        <SectionDescription>
            Hey there! I'm Ryan, a junior software developer based in {siteConfig.location}, with a deep passion for creating
            software that makes a difference. My focus is on writing clean, maintainable code to build innovative solutions that
            enhance productivity. I’m driven to empower both developers and end-users through thoughtful, efficient, and impactful
            software.
        </SectionDescription>
    );
}
