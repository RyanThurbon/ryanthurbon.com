import { WithLogo, WithTimePeriod, WithTitleDescription, WithURL } from "@/config/types";

export interface CertificationItem extends WithTitleDescription, WithTimePeriod, WithURL, WithLogo {
    domain: string;
    verificationCode: string;
}

export const achievements: CertificationItem[] = [
    {
        title: "Entry-Level Python Programmer",
        description: "Open Education & Development Group",
        domain: "verify.openedg.org",
        url: "https://verify.openedg.org/",
        verificationCode: "FjC4.afZD.sLMK",
        period: "2020 – 2021",
        durationInYears: 1,
        logo: "/pcep-logo.jpg",
    },
    {
        title: "Software Development Fundamentals",
        description: "Microsoft Technology Associate",
        domain: "certiport.com",
        url: "https://www.certiport.com/Portal/Pages/CredentialVerification.aspx",
        verificationCode: "bQeT-s28V",
        period: "2019 – 2020",
        durationInYears: 1,
        logo: "/microsoft-logo.jpg",
    },
];
