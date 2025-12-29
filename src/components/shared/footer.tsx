import { navItems } from "@/components/shared/navbar";
import { Link } from "@tanstack/react-router";

export function Footer() {
    return (
        <section id="footer">
            <footer className="flex flex-col gap-y-4 sm:flex-row items-center justify-between mt-20 py-10 border-t text-sm ">
                <nav className="flex items-center gap-x-6 gap-y-4 flex-wrap">
                    {navItems.map((item, index) => (
                        <Link
                            to={item.to}
                            key={index}
                            className="hover:text-primary hover:cursor-pointer"
                            activeProps={{
                                className: "text-primary",
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <p className="text-muted-foreground">
                    &copy; <span>{new Date().getFullYear()}</span> Ryan Thurbon. All rights
                    reserved.
                </p>
            </footer>
        </section>
    );
}
