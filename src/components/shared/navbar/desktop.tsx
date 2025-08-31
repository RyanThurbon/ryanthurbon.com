import { Nav } from "@/components/shared/navbar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

export function DesktopNavbar({ nav }: { nav: Nav[] }) {
    return (
        <div className="hidden md:block">
            {nav.map((item, index) => (
                <Link
                    key={index}
                    to={item.to}
                    className={cn(buttonVariants({ variant: "ghost" }), "hover:text-primary transition-colors")}
                    aria-label={item.label}
                    activeProps={{
                        className: "text-primary",
                    }}
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
}
