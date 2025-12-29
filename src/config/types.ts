export interface WithTitle {
    title: string;
}

export interface WithDescription {
    description: string;
}

export interface WithTitleDescription extends WithTitle, WithDescription {}

export interface WithTimePeriod {
    period: string;
    durationInYears: number;
}

export interface WithLogo {
    logo: string;
}

export interface WithURL {
    url: string;
}
