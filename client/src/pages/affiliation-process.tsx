import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import {
    FileText,
    Monitor,
    Layout,
    Home,
    Library,
    CheckCircle2,
    ArrowRight,
    CreditCard,
    Globe,
    Package,
    ShieldCheck,
    Navigation,
    BookOpen
} from "lucide-react";
import { Link } from "wouter";

export default function AffiliationProcess() {
    const infrastructure = [
        { label: "Computers", value: "5-10 Systems in Lab", icon: <Monitor className="h-6 w-6" /> },
        { label: "Total Area", value: "200-500 Sq. feet (approx.)", icon: <Layout className="h-6 w-6" /> },
        { label: "Rooms", value: "Theory, Practical, Reception, Office", icon: <Home className="h-6 w-6" /> },
        { label: "Library", value: "Library with minimum 50 books", icon: <Library className="h-6 w-6" /> },
    ];

    const deliverables = [
        "Agreement Paper (Legal Contract)",
        "MJYCSM Authorized ASC Certificate",
        "Information Brochure and Registration form",
        "Institute details on official MJYCSM.COM website",
        "Website login for management (exams, registrations)",
        "ALC Branded Flex Banner (6x3 feet)",
        "Sample Mark sheet, Certificate, and I-Card Book"
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <Navbar />

            <main className="py-12 md:py-20">
                <div className="container-pad">
                    {/* Header Section */}
                    <div className="mb-16 text-center max-w-4xl mx-auto">
                        <h1 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
                            Affiliation Process
                        </h1>
                        <p className="text-emerald-600 font-semibold uppercase tracking-wider text-sm mb-4">
                            Guidelines For Authorized Learning Center / Franchise
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed font-light italic">
                            "No great mission can be fulfilled without the participation of the maximum number of people. No captain can win alone without his team."
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto mb-20">
                        {/* Mission Card */}
                        <Card className="p-8 md:p-12 border-none shadow-xl bg-white rounded-[40px] relative overflow-hidden flex flex-col justify-center">
                            <div className="absolute -right-8 -top-8 h-32 w-32 bg-emerald-50 rounded-full" />
                            <div className="relative z-10">
                                <h2 className="font-display text-3xl text-slate-900 mb-6">Our Shared Mission</h2>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Memari Jatiya Yuva Computer Saksharta Mission is a movement to literate the masses in computer education. We appreciate your kind interest in joining our mission. Whether you are in a District, City, or Village, we welcome you to become a pillar of digital literacy in India.
                                </p>
                            </div>
                        </Card>

                        {/* Infrastructure Card */}
                        <Card className="p-8 md:p-12 border-none shadow-2xl bg-slate-900 text-white rounded-[40px] relative overflow-hidden">
                            <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
                            <div className="relative z-10">
                                <h2 className="font-display text-3xl mb-8">Infrastructure Needs</h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {infrastructure.map((item, idx) => (
                                        <div key={idx} className="p-4 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                            <div className="text-emerald-400 mb-3 group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                                            <p className="font-medium text-slate-100">{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* How to Apply */}
                    <Card className="max-w-6xl mx-auto p-8 md:p-16 border-none shadow-xl bg-white rounded-[40px] mb-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500" />
                        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
                            <div>
                                <div className="inline-flex p-4 rounded-3xl bg-amber-50 text-amber-600 mb-6">
                                    <Navigation className="h-8 w-8" />
                                </div>
                                <h2 className="font-display text-3xl text-slate-900 mb-6">How to Apply</h2>
                                <div className="space-y-6 text-slate-600">
                                    <p className="text-lg">
                                        To get affiliation, Institutes should submit the application form along with the authorization fees.
                                    </p>
                                    <div className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100">
                                        <ShieldCheck className="h-6 w-6 text-emerald-500 mt-1 shrink-0" />
                                        <div>
                                            <p className="font-bold text-slate-900 mb-1">Authorization Fee</p>
                                            <p className="text-2xl font-display text-emerald-600">₹15,000/-</p>
                                            <p className="text-sm text-slate-500 mt-2">Payable via Online or Demand Draft in favor of <span className="text-slate-900 font-semibold">"Memari Jatiya Yuva Computer Saksharta Mission"</span> payable at Kalyani.</p>
                                        </div>
                                    </div>
                                    <p className="text-sm italic text-amber-600">Note: Franchise registration fees are non-refundable.</p>
                                </div>
                            </div>
                            <div className="bg-emerald-50 p-8 rounded-[40px] border border-emerald-100 text-center">
                                <FileText className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Start Your Application</h3>
                                <p className="text-slate-600 text-sm mb-8">Submit your application online to begin the verification process.</p>
                                <a
                                    href="http://jycsm.com/apply-online.php"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200"
                                >
                                    Apply Online Now
                                    <ArrowRight className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </Card>

                    {/* Deliverables Section */}
                    <div className="max-w-6xl mx-auto">
                        <Card className="p-8 md:p-16 bg-emerald-600 text-white rounded-[40px] border-none shadow-2xl relative overflow-hidden">
                            <Package className="absolute -right-12 -bottom-12 h-64 w-64 text-white/10" />
                            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="font-display text-4xl mb-6">What You Will Get?</h2>
                                    <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
                                        Upon successful affiliation, MJYCSM provides complete branding and administrative support to help your center flourish.
                                    </p>
                                    <div className="inline-flex items-center gap-2 p-3 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                                        <Globe className="h-5 w-5 text-emerald-200" />
                                        <span className="text-sm font-medium">Global Digital Presence Recognized</span>
                                    </div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md rounded-[32px] p-8 border border-white/20">
                                    <div className="space-y-4">
                                        {deliverables.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                                                <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                                                </div>
                                                <p className="text-sm md:text-base font-medium text-slate-50">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
