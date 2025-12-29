import { ToolboxItem } from "@/config/toolbox/types";

export const cloud: ToolboxItem[] = [
    {
        title: "Docker",
        description: "Platform for building, shipping, and running applications",
        url: "https://docker.com/",
        svg: "/svgs/docker.svg",
        categories: ["Containers", "DevOps"],
    },
    {
        title: "Cloudflare",
        description: "CDN, DNS, and security platform for fast and secure websites",
        url: "https://cloudflare.com/",
        svg: "/svgs/cloudflare.svg",
        categories: ["Hosting", "Security", "CDN"],
    },
    {
        title: "Netlify",
        description: "Platform for automating builds and deploying web projects",
        url: "https://netlify.com/",
        svg: "/svgs/netlify.svg",
        categories: ["Hosting", "Deployment", "CI/CD"],
    },
    {
        title: "Vercel",
        description: "Platform for frontend frameworks and static sites",
        url: "https://vercel.org/",
        svg: "/svgs/vercel.svg",
        categories: ["Hosting", "Deployment"],
    },
];
