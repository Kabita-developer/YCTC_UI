import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import {
    FileText,
    ClipboardCheck,
    Image as ImageIcon,
    GraduationCap,
    BookOpen,
    Award,
    CheckCircle2,
    Calendar,
    Stamp,
    Info
} from "lucide-react";

export default function RegistrationProcess() {
    const enclosures = [
        {
            label: "Photographs",
            desc: "Two recent photographs (one passport size and one stamp size).",
            icon: <ImageIcon className="h-6 w-6 text-emerald-500" />
        },
        {
            label: "Educational Proof",
            desc: "Attested photo copy of your last educational qualification.",
            icon: <GraduationCap className="h-6 w-6 text-emerald-500" />
        },
        {
            label: "Category Certificate",
            desc: "Submit ST/SC/Handicapped certificate for fee relaxation as per JYCSM structure.",
            icon: <FileText className="h-6 w-6 text-emerald-500" />
        },
    ];

    const courseTypes = [
        {
            title: "Certificate Courses",
            icon: <Award className="h-10 w-10 text-emerald-600" />,
            desc: "Designed to meet current IT industry requirements. Specifically for beginners to start their careers in computers with nominal charges for every section of society.",
            color: "bg-emerald-50"
        },
        {
            title: "Diploma / Advance Diploma",
            icon: <BookOpen className="h-10 w-10 text-blue-600" />,
            desc: "Prepares a highly qualified breed of computer professionals. Covers Internet Programming, Advanced Programming, Accountancy, and Desk Top Publishing.",
            color: "bg-blue-50"
        }
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <Navbar />

            <main className="py-12 md:py-20">
                <div className="container-pad">
                    {/* Hero Section */}
                    <div className="mb-16 text-center max-w-4xl mx-auto">
                        <h1 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
                            Registration Process
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed font-light">
                            Your journey towards digital excellence starts here. Follow these guidelines to secure your admission at an Authorized JYCSM Center.
                        </p>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-2 max-w-6xl mx-auto mb-20">
                        {/* How to Register Card */}
                        <Card className="p-8 md:p-12 border-none shadow-xl bg-white rounded-[40px] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-700">
                                        <ClipboardCheck className="h-6 w-6" />
                                    </div>
                                    <h2 className="font-display text-3xl text-slate-900">How to Apply</h2>
                                </div>
                                <div className="space-y-6 text-slate-600 leading-relaxed">
                                    <p>
                                        To get registered, students must fill the application form provided with the Information Brochure. You can purchase the brochure from any <strong className="text-slate-900">Authorized Study Centre (ASC)</strong>.
                                    </p>
                                    <p>
                                        JYCSM offers both regular and University courses (at selected ASCs). Ensure the <strong className="text-emerald-700 underline underline-offset-4">ASC name and code</strong> are correctly mentioned in your application.
                                    </p>
                                    <div className="mt-8 p-6 rounded-3xl bg-slate-900 text-white">
                                        <div className="flex items-start gap-4">
                                            <Info className="h-6 w-6 text-emerald-400 shrink-0" />
                                            <div>
                                                <p className="font-bold text-lg mb-2 text-emerald-400">Payment Details</p>
                                                <p className="text-sm text-slate-300">Total fee payable via Demand Draft favoring:</p>
                                                <p className="font-display text-xl text-white mt-2">"Jatiya Yuva Computer Saksharta Sansthan"</p>
                                                <p className="text-xs text-slate-400 mt-1">Payable at Allahabad</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Enclosures Section */}
                        <div className="flex flex-col gap-6">
                            <h2 className="font-display text-3xl text-slate-900 mb-2">Required Documents</h2>
                            <p className="text-slate-500 mb-4 italic">Please ensure these enclosures are submitted with your application form:</p>
                            <div className="grid gap-4">
                                {enclosures.map((item, idx) => (
                                    <Card key={idx} className="p-6 border-slate-100 bg-white hover:border-emerald-200 hover:shadow-md transition-all rounded-3xl">
                                        <div className="flex gap-5 items-start">
                                            <div className="h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 mb-1">{item.label}</h3>
                                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Course Structure */}
                    <section className="max-w-6xl mx-auto py-12">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl text-slate-900 mb-4">Course Classification</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto">
                                Our courses are strategically classified to cater to both digital beginners and aspiring IT professionals.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {courseTypes.map((type, idx) => (
                                <Card key={idx} className={`p-10 border-none shadow-xl rounded-[40px] flex flex-col items-center text-center transition-all hover:-translate-y-2 ${type.color}`}>
                                    <div className="mb-8 p-6 bg-white rounded-[32px] shadow-sm">
                                        {type.icon}
                                    </div>
                                    <h3 className="font-display text-3xl text-slate-900 mb-4">{type.title}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {type.desc}
                                    </p>
                                    <div className="mt-auto pt-4 flex items-center gap-2 text-slate-900 font-bold uppercase tracking-wider text-xs">
                                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                        Industry Validated Curriculum
                                    </div>
                                </Card>
                            ))}
                        </div>

                        <div className="mt-20 p-8 md:p-12 bg-white rounded-[40px] border-none shadow-xl text-center">
                            <h4 className="font-display text-2xl text-slate-900 mb-4">Professional Expertise</h4>
                            <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
                                To prepare a new highly qualified breed of computer professionals, our diploma courses include
                                <span className="font-bold text-slate-900"> Internet Programming, Advanced Programming, Accountancy, and Desk Top Publishing</span>.
                                Our well-premeditated curriculum matches modern industry needs and helps you emerge as a well-skilled IT professional.
                            </p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
