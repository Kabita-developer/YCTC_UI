import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
    const [location] = useLocation();
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setActiveSubmenu(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navItems = [
        { label: "Home", href: location === "/" ? "#home" : "/" },
        {
            label: "About",
            href: "/about",
            isPage: true,
            submenu: [
                { label: "About MJYCSM", href: "/about#about-jycsm" },
                { label: "Chairman Message", href: "/chairman-message" },
                { label: "Mission & Vision", href: "/mission-vision" },
                { label: "Affiliation", href: "/about#affiliation" },
                { label: "Bank Details", href: "/bank-details" },
            ]
        },
        {
            label: "Courses",
            href: "/courses/graduate",
            isPage: true,
            submenu: [
                { label: "Computer Advance Diploma Courses", href: "/courses/graduate" },
                { label: "Computer Certificate Courses", href: "/courses/certificate" },
                { label: "Computer Diploma Courses", href: "/courses/diploma" },
                { label: "Abacus", href: "/courses/Abacus" },
                { label: "School Course", href: "/courses/school" },
                { label: "Spoken English", href: "/courses/spoken-english" },

            ]
        },
        { label: "Gallery", href: "/gallery", isPage: true },
        {
            label: "Franchise",
            href: "/franchise",
            isPage: true,
            submenu: [
                { label: "Why MJYCSM", href: "/franchise/why-jycsm" },
                { label: "Affiliation Process", href: "/franchise/affiliation" },
                { label: "Apply Online", href: "/franchise/apply-online" },
                { label: "Authorized Centers", href: "/franchise/centers" },
                { label: "Center Login", href: "/franchise/center-login" },
                { label: "Partner Login", href: "/franchise/partner-login" },
            ]
        },
        { label: "Centers", href: "/centers", isPage: true },
        { label: "Downloads", href: "/downloads", isPage: true },
        {
            label: "Student",
            href: "/student",
            isPage: true,
            submenu: [
                { label: "Registration Process", href: "/student/registration" },
                { label: "Examination & Result", href: "/student/result" },
                { label: "Enrollment Verification", href: "/student/verify" },
                { label: "Student ID Card", href: "/student/id-card" },
                { label: "Admission Enquiry", href: "/student/enquiry" },
                { label: "Online Examination", href: "/student/online-exam" },
                { label: "Online Result", href: "/student/online-result" },
                { label: "Online Admit", href: "/student/online-admit" },
                { label: "Study Material", href: "/student/study-material" },
                { label: "Student's Support Center", href: "/student/support" },
                { label: "Online Scholarship Examination", href: "/student/scholarship-exam" },
                { label: "Online Scholarshipship Admit", href: "/student/scholarship-admit" },
                { label: "E Shiksha Enrollment Verification", href: "/student/eshiksha-verify" },
                { label: "E Shiksha Online Result", href: "/student/eshiksha-result" },
            ]
        },
        { label: "Contact", href: "/contact", isPage: true },
    ];

    interface NavItem {
        label: string;
        href: string;
        isPage?: boolean;
        submenu?: { label: string; href: string }[];
    }

    const toggleSubmenu = (label: string) => {
        setActiveSubmenu(activeSubmenu === label ? null : label);
    };

    return (
        <header className="bg-hero noise-overlay text-white" data-testid="header-nav">
            <div className="container-pad">
                <div className="flex h-12 items-center justify-between">
                    <Link href="/">
                        <div className="flex cursor-pointer items-center" data-testid="brand-logo">
                            <img src="/keiy4h9eh0dlJYCSM_Skill_Logo-removebg-preview.png" alt="JYCSM Skill Development" className="h-10 w-auto" />
                        </div>
                    </Link>

                    <nav ref={navRef} className="hidden items-center gap-7 text-sm text-white/85 md:flex" data-testid="nav-links">
                        {(navItems as NavItem[]).map((item) => (
                            <div key={item.label} className="relative h-full flex items-center">
                                {item.submenu ? (
                                    <button
                                        onClick={() => toggleSubmenu(item.label)}
                                        className={`flex items-center gap-1 transition-colors hover:text-white py-4 ${activeSubmenu === item.label ? "text-white font-semibold" : ""}`}
                                        data-testid={`link-nav-${item.label.toLowerCase()}`}
                                    >
                                        {item.label}
                                        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeSubmenu === item.label ? "rotate-180" : ""}`} />
                                    </button>
                                ) : (
                                    item.isPage ? (
                                        <Link
                                            href={item.href}
                                            className={`transition-colors hover:text-white py-4 ${location === item.href ? "text-white font-semibold" : ""}`}
                                            data-testid={`link-nav-${item.label.toLowerCase()}`}
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className="transition-colors hover:text-white py-4"
                                            data-testid={`link-nav-${item.label.toLowerCase()}`}
                                        >
                                            {item.label}
                                        </a>
                                    )
                                )}

                                {item.submenu && activeSubmenu === item.label && (
                                    <div className="absolute top-full left-0 mt-0 w-64 bg-white text-slate-800 shadow-xl rounded-xl py-2 z-50 transform origin-top border border-slate-100 ring-1 ring-black/5 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                                        {item.submenu.map((sub) => (
                                            <Link
                                                key={sub.label}
                                                href={sub.href}
                                                onClick={() => setActiveSubmenu(null)}
                                                className="block px-4 py-2.5 hover:bg-emerald-50 hover:text-emerald-700 transition-colors text-xs font-semibold"
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2" data-testid="nav-actions">
                    </div>
                </div>
            </div>

            {/* Marquee */}
            <div className="bg-black/20 border-t border-white/5 py-2 overflow-hidden whitespace-nowrap">
                <div className="animate-marquee hover:[animation-play-state:paused] text-[10px] md:text-[11px] font-medium tracking-widest text-emerald-50/70">
                    QRA ACCREDITED AN ISO 9001 : 2018 CERTIFIED AUTONOMOUS BODY | A NATIONAL PROGRAMME OF INFORMATION TECHNOLOGY EDUCATION & DEVELOPMENT.
                </div>
            </div>
        </header>
    );
}
