import { NavItem } from "@/components/shared/navbar";
import { buttonVariants } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ChevronDownIcon } from "lucide-react";

export function MobileNavbar({ navItems }: { navItems: NavItem[] }) {
    return (
        <Sheet>
            <SheetTrigger
                className="flex items-center gap-x-2 text-sm md:hidden p-1"
                aria-label="Open menu"
            >
                Menu
                <ChevronDownIcon className="size-3 text-muted-foreground" />
            </SheetTrigger>
            <SheetContent side="bottom" className="py-2">
                <SheetHeader>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <SheetDescription>ryanthurbon.com</SheetDescription>
                </SheetHeader>
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.to}
                        className={cn(buttonVariants({ variant: "ghost" }), "inline-block")}
                        aria-label={item.label}
                        activeProps={{
                            className: "text-primary",
                        }}
                    >
                        {item.label}
                    </Link>
                ))}
            </SheetContent>
        </Sheet>
    );
}
