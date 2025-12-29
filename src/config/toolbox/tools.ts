import { ToolboxItem } from "@/config/toolbox/types";

export const tools: ToolboxItem[] = [
    {
        title: "Git",
        description: "Distributed version control system",
        url: "https://git-scm.com/",
        svg: "/svgs/git.svg",
        categories: ["Version Control"],
    },
    {
        title: "Github",
        description: "Platform for software development and collaboration",
        url: "https://github.com/",
        svg: "/svgs/github.svg",
        categories: ["Git", "Collaboration"],
    },
    {
        title: "Postman",
        description: "API development and testing platform",
        url: "https://www.postman.com/",
        svg: "/svgs/postman.svg",
        categories: ["API Testing", "Collaboration"],
    },
    {
        title: "ESLint",
        description: "Pluggable linting utility for JavaScript and TypeScript",
        url: "https://eslint.org/",
        svg: "/svgs/eslint.svg",
        categories: ["Code Quality"],
    },
];
