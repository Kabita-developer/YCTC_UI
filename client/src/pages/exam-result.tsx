import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import {
    FileCheck,
    Monitor,
    Clock,
    Trophy,
    AlertCircle,
    Calendar,
    GraduationCap,
    ExternalLink,
    CheckCircle2,
    BookOpen,
    Layout
} from "lucide-react";

export default function ExamResult() {
    const examTypes = [
        {
            title: "Single Examination System (SES)",
            duration: "Below 6 Months",
            desc: "Designed for short-term courses. A comprehensive single-sitting evaluation of the entire course curriculum.",
            icon: <FileCheck className="h-8 w-8 text-emerald-600" />
        },
        {
            title: "Module wise Examination (MES)",
            duration: "6 Months & Above",
            desc: "For advanced courses. Evaluation takes place sequentially across different modules as detailed at your ASC.",
            icon: <Layout className="h-8 w-8 text-blue-600" />
        }
    ];

    const procedureDetails = [
        { label: "Duration", value: "60 Minutes", icon: <Clock className="h-5 w-5" /> },
        { label: "Pattern", value: "Objective Type", icon: <Layout className="h-5 w-5" /> },
        { label: "Total Marks", value: "100 Marks", icon: <Trophy className="h-5 w-5" /> },
        { label: "Passing Mark", value: "50% Required", icon: <CheckCircle2 className="h-5 w-5" /> },
    ];

    const quarterlyMonths = ["March", "June", "September", "December"];

    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <Navbar />

            <main className="py-12 md:py-20 text-slate-900">
                <div className="container-pad">
                    {/* Hero Section */}
                    <div className="mb-16 text-center max-w-4xl mx-auto">
                        <h1 className="font-display text-4xl tracking-tight sm:text-5xl lg:text-6xl mb-6">
                            Examination & Result
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed font-light">
                            MJYCSM provides a standardized examination system across India, blending online efficiency with rigorous evaluation methods.
                        </p>
                    </div>

                    {/* Examination Overview */}
                    <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto mb-20">
                        <div className="lg:col-span-8">
                            <Card className="p-8 md:p-12 border-none shadow-xl bg-white rounded-[40px] relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-16 -mt-16" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-700">
                                            <Monitor className="h-6 w-6" />
                                        </div>
                                        <h2 className="font-display text-3xl">Evaluation System</h2>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed text-lg mb-10">
                                        MJYCSM has introduced both <strong className="text-slate-900">Online and Offline</strong> examination systems. Enrolled students can apply for the examination at their respective ASC after the completion of the course or specific modules.
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {examTypes.map((type, idx) => (
                                            <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-all group">
                                                <div className="mb-4">{type.icon}</div>
                                                <h3 className="font-bold text-slate-900 mb-1">{type.title}</h3>
                                                <p className="text-emerald-600 text-xs font-bold uppercase tracking-wider mb-3 underline decoration-emerald-200 underline-offset-4">{type.duration}</p>
                                                <p className="text-sm text-slate-500 leading-relaxed">{type.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div className="lg:col-span-4">
                            <Card className="p-8 border-none shadow-2xl bg-slate-900 text-white rounded-[40px] h-full flex flex-col justify-center">
                                <h3 className="font-display text-2xl mb-8">Exam Procedure</h3>
                                <div className="space-y-6">
                                    {procedureDetails.map((item, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                                            <div className="flex items-center gap-3 text-slate-400">
                                                {item.icon}
                                                <span className="text-sm font-medium">{item.label}</span>
                                            </div>
                                            <span className="font-bold text-emerald-400">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 p-5 bg-emerald-500/10 rounded-[28px] border border-emerald-500/20">
                                    <p className="text-xs text-emerald-200 leading-relaxed">
                                        Theory: 25 objective questions (2 marks each, No negative marking). Practical: 50 Marks.
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Re-Examination & Results */}
                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20 md:items-stretch">
                        <Card className="p-8 md:p-12 border-none shadow-xl bg-rose-50 rounded-[40px] relative overflow-hidden flex flex-col">
                            <div className="absolute top-8 right-8 text-rose-200">
                                <AlertCircle className="h-24 w-24 rotate-12" />
                            </div>
                            <div className="relative z-10 flex-grow">
                                <h2 className="font-display text-3xl text-rose-900 mb-6">Re-Examination</h2>
                                <div className="space-y-4 text-rose-800/80 leading-relaxed mb-8">
                                    <p>Students must score at least <span className="font-bold text-rose-950">50%</span> to qualify. Failure to clear in one sitting allows for a re-appear opportunity.</p>
                                    <div className="p-4 bg-white/50 rounded-2xl border border-rose-200">
                                        <p className="text-sm">Re-examination fee: <strong className="text-rose-900 font-bold">₹200/-</strong> via Demand Draft.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-rose-600 mt-auto flex items-center gap-2">
                                <AlertCircle className="h-4 w-4" /> Limited window for re-appear application.
                            </p>
                        </Card>

                        <Card className="p-8 md:p-12 border-none shadow-xl bg-white rounded-[40px] flex flex-col">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                                    <ExternalLink className="h-6 w-6" />
                                </div>
                                <h2 className="font-display text-3xl text-slate-900">Check Results</h2>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Transparent and timely results. View your performance directly on our official portal within <strong className="text-blue-600">30 days</strong> of course completion.
                            </p>
                            <a
                                href="https://www.mjycsm.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-flex items-center justify-center gap-2 w-full py-4 text-blue-600 font-bold bg-blue-50 rounded-2xl hover:bg-blue-100 transition-all border border-blue-100"
                            >
                                Visit Student Portal
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </Card>
                    </div>

                    {/* Certification Timeline */}
                    <div className="max-w-6xl mx-auto">
                        <Card className="p-10 md:p-16 bg-emerald-900 text-white rounded-[40px] border-none shadow-2xl relative overflow-hidden">
                            <div className="absolute left-0 bottom-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(52,211,153,0.1),transparent)]" />
                            <div className="relative z-10">
                                <div className="flex flex-col lg:flex-row gap-12 items-center">
                                    <div className="lg:w-1/2">
                                        <div className="inline-flex p-4 rounded-3xl bg-white/10 text-emerald-400 mb-6">
                                            <GraduationCap className="h-10 w-10" />
                                        </div>
                                        <h2 className="font-display text-4xl mb-6">Certification Cycle</h2>
                                        <p className="text-emerald-100/70 text-lg leading-relaxed mb-8">
                                            Certificates and Mark sheets are processed quarterly. Our standardized awarding system ensures validity for employment all over India.
                                        </p>
                                    </div>
                                    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                                        {quarterlyMonths.map((month) => (
                                            <div key={month} className="p-6 rounded-[32px] bg-white/5 border border-white/10 flex items-center gap-4 group hover:bg-white/10 transition-all">
                                                <Calendar className="h-6 w-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                                                <span className="font-display text-xl">{month}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-12 pt-8 border-t border-white/10 text-center text-emerald-300 font-medium text-sm">
                                    Verified and Validated by Memari Jatiya Yuva Computer Saksharta Mission
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

function ArrowRight(props: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={props.className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
    )
}
