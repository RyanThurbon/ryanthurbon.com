import { WithTitleDescription, WithURL } from "@/config/types";

export interface ProjectItem extends WithTitleDescription, WithURL {
    stack: string[];
    source: string;
    preview: string;
}

export const projects: ProjectItem[] = [
    {
        title: "Movify",
        description:
            "A movie and TV show discovery site that lists popular, trending, upcoming, and top-rated movies and shows. Built with the TMDb API.",
        url: "https://movify-three.vercel.app/",
        stack: ["React", "Typescript", "TailwindCSS", "Tanstack"],
        source: "https://github.com/RyanThurbon/movify",
        preview: "/projects/movify.png",
    },
    {
        title: "Free2Play",
        description:
            "A site that helps gamers discover the best free PC and browser games, powered by the FreeToGame API.",
        url: "https://free2play-iota.vercel.app/",
        stack: ["React", "Typescript", "TailwindCSS", "Tanstack"],
        source: "https://github.com/RyanThurbon/free-2-play",
        preview: "/projects/free-2-play.png",
    },
    {
        title: "TechTrove",
        description:
            "A personal Hacker News reader that helps me stay up to date with the latest community news. Built with the HN API.",
        url: "https://techtrove-delta.vercel.app/",
        stack: ["React", "Typescript", "TailwindCSS", "Tanstack"],
        source: "https://github.com/RyanThurbon/tech-trove",
        preview: "/projects/tech-trove.png",
    },
];
