import { NavItem } from "@/components/shared/navbar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

export function DesktopNavbar({ navItems }: { navItems: NavItem[] }) {
    return (
        <div className="hidden md:block">
            {navItems.map((item, index) => (
                <Link
                    key={index}
                    to={item.to}
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "hover:text-primary transition-colors",
                    )}
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
