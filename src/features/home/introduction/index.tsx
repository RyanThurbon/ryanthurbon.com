import { Bio, ProfilePicture, Socials, Tagline } from "@/features/home/introduction/components";

export function Introduction() {
    return (
        <section id="introduction">
            <div className="flex flex-col gap-y-6">
                <ProfilePicture />
                <Tagline />
                <Bio />
                <Socials />
            </div>
        </section>
    );
}
