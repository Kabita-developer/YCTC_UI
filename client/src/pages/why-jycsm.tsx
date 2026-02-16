import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import {
    CheckCircle2,
    XCircle,
    ShieldCheck,
    Users,
    Globe,
    Award,
    BookOpen,
    Headphones,
    BadgeCheck,
    FileCheck,
    TrendingUp,
    Zap,
    Scale
} from "lucide-react";

export default function WhyJYCSM() {
    const feeBenefits = [
        { label: "Franchise Fees", status: "NO", icon: <XCircle className="h-5 w-5 text-rose-500" /> },
        { label: "Royalty Fees", status: "NO", icon: <XCircle className="h-5 w-5 text-rose-500" /> },
        { label: "Inspection Fees", status: "NO", icon: <XCircle className="h-5 w-5 text-rose-500" /> },
        { label: "Hidden Fees", status: "NO", icon: <XCircle className="h-5 w-5 text-rose-500" /> },
    ];

    const instituteFeatures = [
        "Online record Maintenance/Login.",
        "Student registration Online Verification.",
        "24*7 Online/Phone Support.",
        "Best Fees Structure.",
        "Legally Document Supported.",
        "SMS Marketing support.",
        "Email Marketing Support.",
        "Media Advertising Support.",
        "Other's Advertising Support.",
        "Online Exam/Result.",
        "A Globally Famous Organization.",
        "All India Valid Certificate.",
        "Lowest course fees.",
        "Training Support for your Faculty, counsellor and marketing team.",
        "Automated tools for tracking your business.",
        "Placement assistance."
    ];

    const affiliations = [
        "Registered as Autonomous Body, Under Govt. Of West Bengal",
        "Empaneled under NPS - Planning Commission, Govt. Of India",
        "Empaneled Under CSW, Govt. Of India",
        "Registered Under Trade Mark Registry Act, 1999",
        "Registered Under MHRD (CR Act), Govt. Of India",
        "JAS-ANZ accredited An ISO 9001:2008 & 2015",
        "Computer Society Of India",
        "GOVT of India-Labour & Employment Ministry",
        "Registered Under Department Of Labour GOVT of NCT(Delhi)",
        "Registered Under MSME, Govt. Of India",
        "Affiliated by Quality Council of India",
        "Affiliated by SKU University",
        "Affiliated by Ministry Of Corporate Affairs - Govt. of India"
    ];

    const studentBenefits = [
        "Quality education at very affordable charge.",
        "Online and Offline exam at your ASC.",
        "Globally accepted Certificate.",
        "Personality development & Multilanguage learning.",
        "Free Live Project Training for Scholars.",
        "Free placement assistance."
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <Navbar />

            <main className="py-12 md:py-20">
                <div className="container-pad">
                    {/* Hero Section */}
                    <div className="mb-16 text-center max-w-4xl mx-auto">
                        <h1 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
                            Why JYCSM?
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed font-light">
                            JYCSM provides a single source for quality assurance in computer education among the nation's non-formal institutes. Our mission is to provide maximum benefits to our Authorized Learning Centers (ALC) and Students through high-standard education and innovative support.
                        </p>
                    </div>

                    {/* Franchise Scheme Highlight */}
                    <div className="grid gap-8 lg:grid-cols-12 max-w-6xl mx-auto mb-20">
                        <div className="lg:col-span-4">
                            <Card className="h-full p-8 bg-emerald-900 text-white rounded-[40px] border-none shadow-2xl relative overflow-hidden group">
                                <Scale className="absolute -right-8 -top-8 h-48 w-48 text-white/5 transition-transform duration-500 group-hover:scale-110" />
                                <div className="relative z-10">
                                    <h2 className="font-display text-3xl mb-8">Franchise Scheme</h2>
                                    <div className="space-y-6">
                                        {feeBenefits.map((item, idx) => (
                                            <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                                                <div className="flex items-center gap-3">
                                                    {item.icon}
                                                    <span className="font-medium">{item.label}</span>
                                                </div>
                                                <span className="font-bold text-rose-400">{item.status}</span>
                                            </div>
                                        ))}
                                        <div className="mt-8 p-6 rounded-3xl bg-emerald-800 border border-emerald-700">
                                            <p className="text-emerald-300 text-sm mb-1 uppercase tracking-wider font-bold">One-Time Registration</p>
                                            <p className="text-3xl font-display text-white">₹15,000/-</p>
                                            <p className="text-emerald-400/60 text-xs mt-2 italic">* Non-refundable</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div className="lg:col-span-8">
                            <Card className="h-full p-8 md:p-12 bg-white rounded-[40px] border-none shadow-xl">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-700">
                                        <TrendingUp className="h-6 w-6" />
                                    </div>
                                    <h2 className="font-display text-3xl text-slate-900">Institute Benefits</h2>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {instituteFeatures.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                                            <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 shrink-0 transition-transform group-hover:scale-110" />
                                            <span className="text-slate-600 text-sm leading-relaxed">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Affiliations */}
                    <section className="mb-20 max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex p-3 rounded-2xl bg-amber-100 text-amber-700 mb-4">
                                <Award className="h-6 w-6" />
                            </div>
                            <h2 className="font-display text-3xl text-slate-900">Our Affiliations</h2>
                            <p className="text-slate-500 mt-2">Recognized and accredited by leading national and international bodies.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {affiliations.map((item, idx) => (
                                <Card key={idx} className="p-5 border-slate-100 bg-white hover:border-emerald-200 hover:shadow-md transition-all rounded-3xl group">
                                    <div className="flex items-start gap-4">
                                        <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 transition-colors">
                                            <BadgeCheck className="h-5 w-5 text-slate-400 group-hover:text-emerald-500" />
                                        </div>
                                        <p className="text-slate-700 text-sm font-medium leading-snug">{item}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Student Benefits */}
                    <div className="max-w-6xl mx-auto">
                        <Card className="p-8 md:p-12 bg-slate-900 text-white rounded-[40px] border-none shadow-2xl relative overflow-hidden">
                            <div className="absolute right-0 bottom-0 w-96 h-96 bg-emerald-500/10 rounded-full -mr-48 -mb-48" />
                            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="inline-flex p-4 rounded-2xl bg-white/10 text-emerald-400 mb-6 font-bold">
                                        <Users className="h-8 w-8" />
                                    </div>
                                    <h2 className="font-display text-3xl mb-6">Student Benefits</h2>
                                    <p className="text-slate-400 leading-relaxed mb-8">
                                        We ensure that every student under the JYCSM umbrella receives top-tier computer education and globally recognized certification at an affordable cost.
                                    </p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {studentBenefits.map((benefit, idx) => (
                                        <div key={idx} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                            <Zap className="h-6 w-6 text-amber-400 mb-4" />
                                            <p className="font-medium text-slate-100">{benefit}</p>
                                        </div>
                                    ))}
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
