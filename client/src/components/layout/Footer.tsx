import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer id="footer" className="bg-hero noise-overlay text-white" data-testid="footer">
            <div className="container-pad py-14">
                <div className="grid gap-10 md:grid-cols-4">
                    <div data-testid="footer-brand">
                        <div className="flex items-center gap-2">
                            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-500/20 ring-1 ring-emerald-300/25">
                                <GraduationCap className="h-5 w-5 text-emerald-200" strokeWidth={2.2} />
                            </div>
                            <div>
                                <div className="font-display text-lg">MJYCSM</div>
                                <div className="text-xs text-white/70">Skill Development Mission</div>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-white/75" data-testid="text-footer-desc">
                            Memari Jatiya Yuva Computer Shaksharta Mission (MJYCSM) is an autonomous organization dedicated to spreading computer literacy and skill development across the nation.
                        </p>
                        <div className="mt-5 flex items-center gap-2" data-testid="footer-social">
                            {[
                                { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/memarijycsm" },
                                { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/memarijycsm" },
                                { name: "YouTube", icon: Youtube, href: "https://youtube.com/@jycsm" }
                            ].map((s) => (
                                <a
                                    key={s.name}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 transition hover:bg-white/15"
                                    data-testid={`link-social-${s.name.toLowerCase()}`}
                                >
                                    <s.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div data-testid="footer-links">
                        <div className="text-sm font-semibold" data-testid="text-footer-links-title">Quick Links</div>
                        <div className="mt-4 grid gap-2 text-sm text-white/80">
                            {[
                                { name: "Home", href: "/#home" },
                                { name: "About MJYCSM", href: "/about#about-jycsm" },
                                { name: "Chairman Message", href: "/chairman-message" },
                                { name: "Mission & Vision", href: "/mission-vision" },
                                { name: "Contact Us", href: "/contact" },
                            ].map((l, i) => (
                                <a
                                    key={l.name}
                                    href={l.href}
                                    className="transition hover:text-white"
                                    data-testid={`link-footer-quick-${i}`}
                                >
                                    {l.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div data-testid="footer-courses">
                        <div className="text-sm font-semibold" data-testid="text-footer-courses-title">Popular Courses</div>
                        <div className="mt-4 grid gap-2 text-sm text-white/80">
                            {[
                                "Product Strategy",
                                "Data Analytics",
                                "UI/UX Design",
                                "Digital Marketing",
                                "Computer Science",
                            ].map((l, i) => (
                                <a
                                    key={l}
                                    href="#"
                                    className="transition hover:text-white"
                                    data-testid={`link-footer-course-${i}`}
                                >
                                    {l}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div data-testid="footer-contact">
                        <div className="text-sm font-semibold" data-testid="text-footer-contact-title">Contact</div>
                        <div className="mt-4 grid gap-3 text-sm text-white/80">
                            <div className="flex items-start gap-3" data-testid="row-footer-address">
                                <MapPin className="mt-0.5 h-4 w-4 text-emerald-200" strokeWidth={2.2} />
                                <span data-testid="text-footer-address">Memari, West Bengal 713146</span>
                            </div>
                            <div className="flex items-start gap-3" data-testid="row-footer-phone">
                                <Phone className="mt-0.5 h-4 w-4 text-emerald-200" strokeWidth={2.2} />
                                <span data-testid="text-footer-phone">8629978490</span>
                            </div>
                            <div className="flex items-start gap-3" data-testid="row-footer-email">
                                <Mail className="mt-0.5 h-4 w-4 text-emerald-200" strokeWidth={2.2} />
                                <span data-testid="text-footer-email">memarijycsm@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/70 md:flex-row" data-testid="footer-bottom">
                    <div data-testid="text-footer-copyright">© {new Date().getFullYear()} MJYCSM. All rights reserved.</div>
                    <div className="flex items-center gap-4" data-testid="footer-legal">
                        <a href="#" className="hover:text-white" data-testid="link-privacy">Privacy</a>
                        <a href="#" className="hover:text-white" data-testid="link-terms">Terms</a>
                        <a href="#" className="hover:text-white" data-testid="link-cookies">Cookies</a>
                    </div>
                </div>
                <div className="mt-4 text-center text-xs text-white/60" data-testid="footer-developed-by">
                    Developed By cripcocode Technologies Pvt Ltd
                </div>
            </div>
        </footer>
    );
}
