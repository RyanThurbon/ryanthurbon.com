import { IntroBio } from "@/components/features/introduction/bio";
import { IntroProfilePicture } from "@/components/features/introduction/profile-picture";
import { IntroTagline } from "@/components/features/introduction/tagline";
import { IntroSocials } from "@/components/features/introduction/socials.tsx";

export function Introduction() {
    return (
        <section id="introduction">
            <div className="flex flex-col gap-y-6">
                <IntroProfilePicture/>
                <IntroTagline/>
                <IntroBio/>
                <IntroSocials/>
            </div>
        </section>
    );
}
