import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    ChevronRight,
    Info,
    ShieldCheck,
    Target,
    Users,
    Library,
    Laptop,
    Building2,
    Lightbulb,
    BookOpen,
    ClipboardList,
    Briefcase,
    CheckCircle2
} from "lucide-react";
import aboutBanner from "@/assets/images/about-banner.jpg";
import { Card } from "@/components/ui/card";

export default function About() {
    const sections = [
        { id: "about-jycsm", label: "About JYCSM", icon: <Info className="h-5 w-5" /> },
        { id: "registration", label: "Registration & Certification", icon: <ShieldCheck className="h-5 w-5" /> },
        { id: "objective", label: "Program Objective", icon: <Target className="h-5 w-5" /> },
        { id: "faculty", label: "Our Faculty", icon: <Users className="h-5 w-5" /> },
        { id: "infrastructure", label: "Infrastructure", icon: <Building2 className="h-5 w-5" /> },
        { id: "methodology", label: "Teaching Methodology", icon: <BookOpen className="h-5 w-5" /> },
        { id: "placement", label: "Placement Cell", icon: <Briefcase className="h-5 w-5" /> },
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="relative overflow-hidden py-24 text-white md:py-32">
                    <div className="absolute inset-0 -z-10">
                        <img
                            src={aboutBanner}
                            alt="About Banner"
                            className="h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-emerald-950/75 backdrop-blur-[2px]" />
                    </div>
                    <div className="container-pad relative z-10">
                        <div className="max-w-3xl">
                            <h1 className="font-display text-4xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                                Experience Excellence in <span className="text-emerald-400 font-semibold underline decoration-emerald-400/30 underline-offset-8">Computer Education</span>
                            </h1>
                            <p className="mt-8 text-xl text-white/90 leading-relaxed font-light">
                                Jatiya Yuva Computer Saksharta Mission (JYCSM) is a national initiative dedicated to empowering India's youth through digital literacy and technical proficiency.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Breadcrumbs / Quick Nav */}
                <div className="bg-white border-b sticky top-16 z-30 hidden md:block">
                    <div className="container-pad">
                        <div className="flex items-center gap-8 overflow-x-auto py-4 no-scrollbar">
                            {sections.map((s) => (
                                <a
                                    key={s.id}
                                    href={`#${s.id}`}
                                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-emerald-600 whitespace-nowrap"
                                >
                                    <span className="text-emerald-500/80">{s.icon}</span>
                                    {s.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <section className="py-16 md:py-24">
                    <div className="container-pad">
                        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
                            <div className="space-y-20">
                                {/* About JYCSM */}
                                <section id="about-jycsm" className="scroll-mt-32">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-700">
                                            <Info className="h-6 w-6" />
                                        </div>
                                        <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">About JYCSM</h2>
                                    </div>
                                    <div className="prose prose-emerald max-w-none text-muted-foreground leading-relaxed text-lg space-y-6">
                                        <p>
                                            Jatiya Yuva Computer Saksharta Mission (JYCSM) is a national programme of information technology education and development. A unit of Jatiya Yuva Computer Saksharta Mission, Registered as Autonomous Body, Under Govt. Of West Bengal based on Central Govt. TR Act, 1882, Govt. Of India (Registration No- IV-06888). JYCSM is also registered Empanelled under NPS - Planning Commission, Govt. Of India (Registration No –WB/2014/0083736) & Empanelled Under CSW, Govt. Of India. Registered Under Trade Mark Registry Act, 1999, Govt. Of India, Registered Under MHRD (CR Act), Govt. Of India.
                                        </p>
                                        <p>
                                            Jatiya Yuva Computer Saksharta Mission is the new lighting of computer education in India. The great scholars realized to make each Indian's life fulfilled with prosperity and improvement, progress through computer education. Jatiya Yuva Computer Shaksharta Mission is pioneer of making their attempt real. On the golden highway of the twenty-first century to unite people for the formation of new India, JYCSM stands at your doorstep.
                                        </p>
                                    </div>
                                </section>

                                {/* Registration & Certification */}
                                <section id="registration" className="scroll-mt-32">
                                    <Card className="p-8 border-none bg-emerald-900 text-white overflow-hidden relative group">
                                        <ShieldCheck className="absolute -right-12 -top-12 h-64 w-64 text-white/5 transition-transform duration-500 group-hover:scale-110" />
                                        <div className="relative z-10">
                                            <h2 className="font-display text-3xl mb-6">Registration & Certification</h2>
                                            <p className="text-emerald-50 text-xl leading-relaxed font-light">
                                                Jatiya Yuva Computer Saksharta Mission is an ISO 9001:2008 Certified Organization by Joint Accreditation System Australia & New Zealand (JAS-ANZ) for Quality Management System. The Institute has also filled application (Word mark JYCSM Application No. 2832137 Class 41) for Name & Logo registration under Ministry of Commerce & Industry, Department of Industrial Policy & Promotion, Controller General of Patents Designs and Trade Marks, Govt. of India.
                                            </p>
                                        </div>
                                    </Card>
                                </section>

                                {/* Objective of the Programme */}
                                <section id="objective" className="scroll-mt-32">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3 rounded-2xl bg-amber-100 text-amber-700">
                                            <Target className="h-6 w-6" />
                                        </div>
                                        <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">Objective of the Programme</h2>
                                    </div>
                                    <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                                        <p className="text-muted-foreground text-xl leading-relaxed">
                                            In present time, some big institutions run their certificate/diploma programmes at very high charges, which lower and middle-class families cannot afford. JYCSM was established to provide better higher technical education in computers for every section of society at affordable charges all over India.
                                        </p>
                                    </div>
                                </section>

                                {/* JYCSM Faculty */}
                                <section id="faculty" className="scroll-mt-32">
                                    <div className="grid gap-8 md:grid-cols-2">
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 rounded-2xl bg-blue-100 text-blue-700">
                                                    <Users className="h-6 w-6" />
                                                </div>
                                                <h2 className="font-display text-3xl text-foreground">Our Expert Faculty</h2>
                                            </div>
                                            <p className="text-muted-foreground text-lg leading-relaxed">
                                                JYCSM faculty are full-time, qualified, and friendly professionals. They are trained to understand student psychology and simplify complex concepts. Training is equally divided into theory and practical sessions, with unlimited machine time to boost creativity and confidence.
                                            </p>
                                        </div>
                                        <div className="relative rounded-[32px] overflow-hidden aspect-video shadow-2xl">
                                            <img
                                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                                                alt="Faculty"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </section>

                                {/* Infrastructure */}
                                <section id="infrastructure" className="scroll-mt-32">
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="p-3 rounded-2xl bg-indigo-100 text-indigo-700">
                                            <Building2 className="h-6 w-6" />
                                        </div>
                                        <h2 className="font-display text-3xl text-foreground">Infrastructure & Facilities</h2>
                                    </div>
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        {[
                                            { icon: <Library />, title: "Library Infrastructure", text: "Centres have well-stocked libraries with 600+ volumes covering Programming, DBMS, Networks, and more. Subscribes to journals." },
                                            { icon: <Laptop />, title: "Computer Lab", text: "High-configuration labs with network connectivity and Wi-Fi zones for seamless learning." },
                                            { icon: <CheckCircle2 />, title: "Modern Classrooms", text: "Excellent classrooms with audio-visual teaching aids support overall development." },
                                            { icon: <Lightbulb />, title: "Learning Environment", text: "Interactive environment encouraging innovation, self-achievement, and exploration under expert guidance." },
                                        ].map((item, idx) => (
                                            <Card key={idx} className="p-6 border-none shadow-sm bg-white hover:shadow-md transition-shadow">
                                                <div className="text-emerald-600 mb-4">{item.icon}</div>
                                                <h3 className="font-display text-xl mb-2">{item.title}</h3>
                                                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                                            </Card>
                                        ))}
                                    </div>
                                </section>

                                {/* Teaching Methodology */}
                                <section id="methodology" className="scroll-mt-32">
                                    <div className="bg-emerald-50 rounded-[40px] p-10 md:p-14">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="p-3 rounded-2xl bg-white text-emerald-700 shadow-sm">
                                                <BookOpen className="h-6 w-6" />
                                            </div>
                                            <h2 className="font-display text-3xl text-foreground">Teaching Methodology</h2>
                                        </div>
                                        <div className="grid gap-8 md:grid-cols-2">
                                            <ul className="space-y-4">
                                                {[
                                                    "Personalized teaching methodology",
                                                    "Extensive hands-on approach",
                                                    "Video & audio learning system",
                                                    "Career orientation and self-development"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-lg text-emerald-900/80 font-medium">
                                                        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="p-6 bg-white rounded-3xl shadow-sm border border-emerald-100">
                                                <div className="flex items-center gap-3 mb-4 text-emerald-700">
                                                    <ClipboardList className="h-5 w-5" />
                                                    <h4 className="font-semibold">Assessment & Academic Planning</h4>
                                                </div>
                                                <p className="text-muted-foreground text-sm leading-relaxed">
                                                    After each module, students are evaluated through regular tests. Lectures are updated periodically to match technological advancements and job market needs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Placement */}
                                <section id="placement" className="scroll-mt-32">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3 rounded-2xl bg-rose-100 text-rose-700">
                                            <Briefcase className="h-6 w-6" />
                                        </div>
                                        <h2 className="font-display text-3xl text-foreground">Placement Cell</h2>
                                    </div>
                                    <Card className="p-8 border-none shadow-xl bg-white relative overflow-hidden">
                                        <div className="absolute right-0 top-0 w-2 h-full bg-rose-500" />
                                        <div className="grid gap-8 md:grid-cols-2">
                                            <div>
                                                <h4 className="font-semibold text-rose-900 mb-2 underline decoration-rose-500/30 underline-offset-4">Cell Function</h4>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    The placement cell coordinates placement activities under faculty guidance, ensuring every student has industry exposure.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-rose-900 mb-2 underline decoration-rose-500/30 underline-offset-4">Placement Procedure</h4>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    Companies may conduct pre-placement talks, written tests, or interviews. All job offers are routed through the placement coordinator. Off-campus recruitment may include travelling allowances.
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                </section>
                            </div>

                            {/* Sticky Sidebar */}
                            <aside className="hidden lg:block">
                                <div className="sticky top-40 space-y-6">
                                    <Card className="p-6 border-none shadow-sm bg-white">
                                        <h3 className="font-display text-lg mb-4">On this page</h3>
                                        <nav className="space-y-1">
                                            {sections.map((s) => (
                                                <a
                                                    key={s.id}
                                                    href={`#${s.id}`}
                                                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-muted-foreground rounded-xl transition-all hover:bg-emerald-50 hover:text-emerald-700 group"
                                                >
                                                    <span className="text-emerald-500/50 group-hover:text-emerald-600">{s.icon}</span>
                                                    {s.label}
                                                </a>
                                            ))}
                                        </nav>
                                    </Card>

                                    <Card className="p-6 border-none bg-emerald-600 text-white text-center">
                                        <h4 className="font-display text-xl mb-2">Ready to Start?</h4>
                                        <p className="text-white/80 text-xs mb-4">Join India's leading computer literacy mission today.</p>
                                        <a hrerf="/#footer" className="inline-block w-full py-2.5 bg-white text-emerald-700 rounded-xl text-sm font-bold transition-transform hover:scale-105">
                                            Join JYCSM
                                        </a>
                                    </Card>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg ring-1 ring-emerald-500/30 transition hover:bg-emerald-500"
                aria-label="Back to top"
            >
                <ChevronRight className="h-5 w-5 rotate-[-90deg]" strokeWidth={2.2} />
            </a>
        </div>
    );
}
