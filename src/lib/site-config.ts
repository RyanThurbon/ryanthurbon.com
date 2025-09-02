export type SocialsConfig = {
    github: string;
    linkedIn: string;
    gmail: string;
};

export type AchievementConfig = {
    name: string;
    description: string;
    domain: string;
    url: string;
    verificationCode: string;
    duration: string;
    durationInYears: number;
    logo: string;
};

export type EducationConfig = {
    name: string;
    url: string;
    qualification: string;
    duration: string;
    durationInYears: number;
    logo: string;
};

export type JobConfig = {
    name: string;
    url: string;
    role: string;
    duration: string;
    durationInYears: number;
    logo: string;
};

export type ToolboxConfig = {
    name: string;
    href: string;
    description: string;
    stackCategory: string[];
    svg: string;
};

export const siteConfig = {
    openToWork: true,
    location: "Cape Town, South Africa",
    portraitSrc: "/portrait.jpg",
    githubProfileImage: "/github.png",
    siteSource: "https://github.com/RyanThurbon/ryanthurbon.com",
    socials: {
        github: "https://github.com/RyanThurbon",
        gmail: "ryanthurbon3@gmail.com",
        linkedIn: "https://linkedin.com/in/ryan-thurbon",
    } satisfies SocialsConfig,
    achievements: [
        {
            name: "Software Development Fundamentals",
            description: "Microsoft Technology Associate",
            domain: "certiport.com",
            url: "https://www.certiport.com/Portal/Pages/CredentialVerification.aspx",
            verificationCode: "bQeT-s28V",
            duration: "2019 - 2020",
            durationInYears: 1,
            logo: "/microsoft-logo.jpg",
        },
        {
            name: "Entry-Level python developer",
            description: "Open Education & Development Group",
            domain: "verify.openedg.org",
            url: "https://verify.openedg.org/",
            verificationCode: "FjC4.afZD.sLMK",
            duration: "2020 - 2021",
            durationInYears: 1,
            logo: "/pcep-logo.jpg",
        },
    ] satisfies AchievementConfig[],
    education: [
        {
            name: "Belgium Campus ITversity",
            url: "https://www.belgiumcampus.ac.za/",
            qualification: "Bachelor of Information Technology",
            duration: "2023 - 2025",
            durationInYears: 3,
            logo: "/bc-logo.png",
        },
        {
            name: "Sutherland High School",
            url: "https://www.sutherlandhs.co.za/",
            qualification: "Matric Diploma",
            duration: "2018 - 2022",
            durationInYears: 5,
            logo: "/shs-logo.jpg",
        },
    ] satisfies EducationConfig[],
    jobs: [] satisfies JobConfig[],
    toolbox: {
        frontend: [
            {
                name: "React",
                href: "https://react.dev/",
                svg: "/svgs/react.svg",
                description: "Library for building user interfaces",
                stackCategory: ["UI", "Components"],
            },
            {
                name: "Next.js",
                href: "https://nextjs.org/",
                svg: "/svgs/nextjs.svg",
                description: "React framework for production-grade applications",
                stackCategory: ["React", "SSR", "Typescript"],
            },
            {
                name: "Typescript",
                href: "https://www.typescriptlang.org/",
                svg: "/svgs/typescript.svg",
                description: "Strongly typed programming language for JavaScript",
                stackCategory: ["Language", "Javascript"],
            },
            {
                name: "Shadcn/ui",
                href: "https://ui.shadcn.com/",
                svg: "/svgs/shadcn.svg",
                description: "Re-usable components built with Radix UI and Tailwind",
                stackCategory: ["Components", "UI", "Tailwind"],
            },
            {
                name: "Tanstack",
                href: "https://tanstack.com/",
                svg: "/svgs/tanstack.svg",
                description: "Open-source software for web developers",
                stackCategory: ["React", "Typescript", "Routing"],
            },
            {
                name: "Tailwind",
                href: "https://tailwindcss.com/",
                svg: "/svgs/tailwind.svg",
                description: "Utility-first CSS framework",
                stackCategory: ["CSS", "Styling"],
            },
        ] satisfies ToolboxConfig[],
        backend: [
            {
                name: "Prisma",
                href: "https://www.prisma.io/",
                svg: "/svgs/prisma.svg",
                description: "Next-generation ORM for Node.js and TypeScript",
                stackCategory: ["ORM", "Database"],
            },
            {
                name: "Drizzle",
                href: "https://orm.drizzle.team/",
                svg: "/svgs/drizzle.svg",
                description: "Modern and fast ORM for TypeScript and JavaScript",
                stackCategory: ["ORM", "Database"],
            },
            {
                name: "MongoDB",
                href: "https://www.mongodb.com/",
                svg: "/svgs/mongo.svg",
                description: "Document-oriented NoSQL database",
                stackCategory: ["Database", "NoSQL"],
            },
            {
                name: "PostgreSQL",
                href: "https://www.postgresql.org/",
                svg: "/svgs/postgres.svg",
                description: "Advanced open-source database",
                stackCategory: ["Database", "SQL"],
            },
            {
                name: "Hono",
                href: "https://hono.dev/",
                svg: "/svgs/hono.svg",
                description: "Ultrafast web framework for Cloudflare Workers and edge apps",
                stackCategory: ["Web Framework", "Edge"],
            },
            {
                name: "Better Auth",
                href: "https://www.better-auth.com/",
                svg: "/svgs/betterauth.svg",
                description: "The most comprehensive authentication framework for TypeScript.",
                stackCategory: ["Auth", "Security"],
            },
            {
                name: "NodeJS",
                href: "https://nodejs.org/en",
                svg: "/svgs/node.svg",
                description: "Opens-source JavaScript runtime",
                stackCategory: ["Runtime", "Package Manager"],
            },
            {
                name: "Express.js",
                href: "https://expressjs.com/",
                svg: "/svgs/express.svg",
                description: "Backend web framework for building with Node.js",
                stackCategory: ["Node.js", "Web Framework"],
            },
        ] satisfies ToolboxConfig[],
        cloud: [
            {
                name: "Docker",
                href: "https://docker.com/",
                svg: "/svgs/docker.svg",
                description: "Platform for building, shipping, and running applications",
                stackCategory: ["Containers", "DevOps"],
            },
            {
                name: "Cloudflare",
                href: "https://cloudflare.com/",
                svg: "/svgs/cloudflare.svg",
                description: "CDN, DNS, and security platform for fast and secure websites",
                stackCategory: ["Hosting", "Security", "CDN"],
            },
            {
                name: "Netlify",
                href: "https://netlify.com/",
                svg: "/svgs/netlify.svg",
                description: "Platform for automating builds and deploying web projects",
                stackCategory: ["Hosting", "Deployment", "CI/CD"],
            },
            {
                name: "Vercel",
                href: "https://vercel.org/",
                svg: "/svgs/vercel.svg",
                description: "Platform for frontend frameworks and static sites",
                stackCategory: ["Hosting", "Deployment"],
            },
        ] satisfies ToolboxConfig[],
        tools: [
            {
                name: "Git",
                href: "https://git-scm.com/",
                svg: "/svgs/git.svg",
                description: "Distributed version control system",
                stackCategory: ["Version Control"],
            },
            {
                name: "Github",
                href: "https://github.com/",
                svg: "/svgs/github.svg",
                description: "Platform for software development and collaboration",
                stackCategory: ["Git", "Collaboration"],
            },
            {
                name: "Postman",
                href: "https://www.postman.com/",
                svg: "/svgs/postman.svg",
                description: "API development and testing platform",
                stackCategory: ["API Testing", "Collaboration"],
            },
            {
                name: "ESLint",
                href: "https://eslint.org/",
                svg: "/svgs/eslint.svg",
                description: "Pluggable linting utility for JavaScript and TypeScript",
                stackCategory: ["Code Quality"],
            },
        ] satisfies ToolboxConfig[],
    },
};
