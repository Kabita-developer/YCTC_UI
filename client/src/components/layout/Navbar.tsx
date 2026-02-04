import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/images/logo.png";

export default function Navbar() {
    const [location] = useLocation();

    const navItems = [
        { label: "Home", href: location === "/" ? "#home" : "/" },
        { label: "About", href: "/about", isPage: true },
        { label: "Courses", href: location === "/" ? "#courses" : "/#courses" },
        { label: "Gallery", href: "/gallery", isPage: true },
        { label: "Testimonials", href: location === "/" ? "#testimonials" : "/#testimonials" },
        { label: "Blog", href: location === "/" ? "#blog" : "/#blog" },
        { label: "Contact", href: location === "/" ? "#footer" : "/#footer" },
    ];

    return (
        <header className="bg-hero noise-overlay text-white" data-testid="header-nav">
            <div className="container-pad">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/">
                        <div className="flex cursor-pointer items-center" data-testid="brand-logo">
                            <img src={logoImg} alt="JATIYA YUVA" className="h-10 w-auto" />
                        </div>
                    </Link>

                    <nav className="hidden items-center gap-7 text-sm text-white/85 md:flex" data-testid="nav-links">
                        {navItems.map((item) => (
                            item.isPage ? (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`transition-colors hover:text-white ${location === item.href ? "text-white font-semibold" : ""}`}
                                    data-testid={`link-nav-${item.label.toLowerCase()}`}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="transition-colors hover:text-white"
                                    data-testid={`link-nav-${item.label.toLowerCase()}`}
                                >
                                    {item.label}
                                </a>
                            )
                        ))}
                    </nav>

                    <div className="flex items-center gap-2" data-testid="nav-actions">
                        <Button
                            variant="ghost"
                            className="hidden text-white/85 hover:bg-white/10 hover:text-white md:inline-flex"
                            data-testid="button-login"
                        >
                            Login
                        </Button>
                        <Button
                            className="bg-emerald-500 text-white hover:bg-emerald-400"
                            data-testid="button-register"
                        >
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
