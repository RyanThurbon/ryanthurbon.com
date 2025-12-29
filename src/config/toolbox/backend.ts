import { ToolboxItem } from "@/config/toolbox/types";

export const backend: ToolboxItem[] = [
    {
        title: "Prisma",
        description: "Next-generation ORM for Node.js and TypeScript",
        url: "https://www.prisma.io/",
        svg: "/svgs/prisma.svg",
        categories: ["ORM", "Database"],
    },
    {
        title: "Drizzle",
        description: "Modern and fast ORM for TypeScript and JavaScript",
        url: "https://orm.drizzle.team/",
        svg: "/svgs/drizzle.svg",
        categories: ["ORM", "Database"],
    },
    {
        title: "MongoDB",
        description: "Document-oriented NoSQL database",
        url: "https://www.mongodb.com/",
        svg: "/svgs/mongo.svg",
        categories: ["Database", "NoSQL"],
    },
    {
        title: "PostgreSQL",
        description: "Advanced open-source database",
        url: "https://www.postgresql.org/",
        svg: "/svgs/postgres.svg",
        categories: ["Database", "SQL"],
    },
    {
        title: "Hono",
        description: "Ultrafast web framework for Cloudflare Workers and edge apps",
        url: "https://hono.dev/",
        svg: "/svgs/hono.svg",
        categories: ["Web Framework", "Edge"],
    },
    {
        title: "Better Auth",
        description: "The most comprehensive authentication framework for TypeScript.",
        url: "https://www.better-auth.com/",
        svg: "/svgs/betterauth.svg",
        categories: ["Auth", "Security"],
    },
    {
        title: "NodeJS",
        description: "Opens-source JavaScript runtime",
        url: "https://nodejs.org/en",
        svg: "/svgs/node.svg",
        categories: ["Runtime", "Package Manager"],
    },
    {
        title: "Express.js",
        description: "Backend web framework for building with Node.js",
        url: "https://expressjs.com/",
        svg: "/svgs/express.svg",
        categories: ["Node.js", "Web Framework"],
    },
];
