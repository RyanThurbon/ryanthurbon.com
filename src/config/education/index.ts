import { WithLogo, WithTimePeriod, WithTitle, WithURL } from "@/config/types";

export interface EducationItem extends WithTitle, WithTimePeriod, WithURL, WithLogo {
    qualification: string;
}

export const education: EducationItem[] = [
    {
        title: "Belgium Campus ITversity",
        url: "https://www.belgiumcampus.ac.za/",
        qualification: "Bachelor of Information Technology",
        period: "2023 – 2025",
        durationInYears: 3,
        logo: "/bc-logo.png",
    },
    {
        title: "Sutherland High School",
        url: "https://www.sutherlandhs.co.za/",
        qualification: "National Senior Certificate",
        period: "2018 – 2022",
        durationInYears: 5,
        logo: "/shs-logo.jpg",
    },
];
