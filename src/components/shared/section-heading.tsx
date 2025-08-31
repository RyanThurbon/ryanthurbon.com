type SectionHeadingProps = {
    heading: string;
}

export function SectionHeading({ heading }: SectionHeadingProps) {
    return (
        <h1 className="text-4xl sm:text-5xl font-bold lexend-bold tracking-tight leading-snug">
            {heading}
        </h1>
    );
}