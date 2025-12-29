import { ToolboxItem } from "@/config/toolbox/types";

export const frontend: ToolboxItem[] = [
    {
        title: "React",
        description: "Library for building user interfaces",
        url: "https://react.dev/",
        svg: "/svgs/react.svg",
        categories: ["UI", "Components"],
    },
    {
        title: "Next.js",
        description: "React framework for production-grade applications",
        url: "https://nextjs.org/",
        svg: "/svgs/nextjs.svg",
        categories: ["React", "SSR", "Typescript"],
    },
    {
        title: "Typescript",
        description: "Strongly typed programming language for JavaScript",
        url: "https://www.typescriptlang.org/",
        svg: "/svgs/typescript.svg",
        categories: ["Language", "Javascript"],
    },
    {
        title: "Shadcn/ui",
        description: "Re-usable components built with Radix UI and Tailwind",
        url: "https://ui.shadcn.com/",
        svg: "/svgs/shadcn.svg",
        categories: ["Components", "UI", "Tailwind"],
    },
    {
        title: "Tanstack",
        description: "Open-source software for web developers",
        url: "https://tanstack.com/",
        svg: "/svgs/tanstack.svg",
        categories: ["React", "Typescript", "Routing"],
    },
    {
        title: "Tailwind",
        description: "Utility-first CSS framework",
        url: "https://tailwindcss.com/",
        svg: "/svgs/tailwind.svg",
        categories: ["CSS", "Styling"],
    },
];
