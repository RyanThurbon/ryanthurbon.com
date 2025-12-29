import { WithLogo, WithTimePeriod, WithTitle, WithURL } from "@/config/types";

export interface JobItem extends WithTitle, WithTimePeriod, WithURL, WithLogo {
    role: string;
}

export const jobs: JobItem[] = [];
