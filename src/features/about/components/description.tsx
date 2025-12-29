import { SectionDescription } from "@/components/shared/section-description";

const aboutSections = [
    `The coding journey started back in high school with Delphi, sparking a lasting love
  	for learning and building. Free time often means exploring new languages and
  	frameworks — these days, it’s mostly React and modern web tech. Every dive into
  	something new adds to the excitement of creating software that matters.`,

    `Building tools that make life easier has always been the goal, but overplanning used
  	to get in the way. Now, the focus is on a “just ship it” approach — launch, learn,
  	improve. Every project, finished or not, brings valuable experience.`,

    `Game development was an early interest, but going solo without art skills had its
  	limits. Modding games with C# became the perfect middle ground — expanding existing
  	worlds while leveling up technical skills. It’s a mix of creativity and
  	problem-solving that keeps learning fun and practical.`,

    `Curiosity and persistence drive every line of code, turning challenges into opportunities. Clean, maintainable systems and simple, effective solutions are always the aim. When usability comes first, both developers and users benefit — and that’s what makes building software so rewarding.`,
];

export function AboutDescription() {
    return (
        <div className="flex flex-col gap-y-8">
            {aboutSections.map((section, index) => (
                <SectionDescription key={index}>{section}</SectionDescription>
            ))}
        </div>
    );
}
