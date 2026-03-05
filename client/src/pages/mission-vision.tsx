import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Target, Lightbulb, CheckCircle2, Flag, Compass } from "lucide-react";

export default function MissionVision() {
    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <Navbar />

            <main className="py-12 md:py-20 text-slate-700">
                <div className="container-pad">
                    {/* Header */}
                    <div className="mb-16 text-center">
                        <h1 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-4">
                            Mission & Vision
                        </h1>
                        <p className="text-emerald-600 font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                            <span className="w-8 h-px bg-emerald-200"></span>
                            Our Core Values & Purpose
                            <span className="w-8 h-px bg-emerald-200"></span>
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto mb-16">
                        {/* Mission Card */}
                        <Card className="p-8 md:p-12 border-none shadow-xl bg-white rounded-[40px] relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <div className="absolute -right-8 -top-8 h-32 w-32 bg-emerald-50 rounded-full group-hover:scale-110 transition-transform duration-500" />
                            <div className="relative z-10">
                                <div className="inline-flex p-4 rounded-2xl bg-emerald-100 text-emerald-700 mb-6 group-hover:rotate-6 transition-transform">
                                    <Target className="h-8 w-8" />
                                </div>
                                <h2 className="font-display text-3xl text-slate-900 mb-6">Mission</h2>
                                <p className="text-lg leading-relaxed text-slate-600">
                                    To be the single source for quality assurance in computer education among the nation's non-formal institutes. After turning out competent IT professionals in large numbers, MJYCSM reach is now being extended to all regions of the country.
                                </p>
                            </div>
                        </Card>

                        {/* Vision Card */}
                        <Card className="p-8 md:p-12 border-none shadow-xl bg-emerald-900 text-white rounded-[40px] relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <div className="absolute -right-8 -top-8 h-32 w-32 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-500" />
                            <div className="relative z-10">
                                <div className="inline-flex p-4 rounded-2xl bg-white/10 text-emerald-300 mb-6 group-hover:rotate-6 transition-transform">
                                    <Compass className="h-8 w-8" />
                                </div>
                                <h2 className="font-display text-3xl mb-6">Vision</h2>
                                <p className="text-lg leading-relaxed text-emerald-50/80">
                                    To be the leader in the development of industry-oriented quality education and training and be the country's premier Institution for examination and certification in the field of Information Technology Education & Development.
                                </p>
                            </div>
                        </Card>
                    </div>

                    {/* Implementation Journey */}
                    <Card className="max-w-6xl mx-auto p-8 md:p-16 border-none shadow-xl bg-white rounded-[40px] relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500" />

                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            <div className="md:w-1/3">
                                <div className="sticky top-10">
                                    <div className="inline-flex p-4 rounded-2xl bg-amber-100 text-amber-700 mb-6">
                                        <Lightbulb className="h-8 w-8" />
                                    </div>
                                    <h2 className="font-display text-3xl text-slate-900 mb-6 leading-tight">
                                        Vision Implementation Journey
                                    </h2>
                                    <p className="text-slate-500 leading-relaxed font-light">
                                        Our roadmap to transforming the digital landscape of India, one student at a time.
                                    </p>
                                </div>
                            </div>

                            <div className="md:w-2/3">
                                <div className="grid gap-6">
                                    {[
                                        "Identifying the nation's best potential and nurturing them into well groomed professional.",
                                        "To promote Computer Literacy to every nook and corner of the society at nominal fee.",
                                        "To extend financial flexibility in terms of scholarships and stipends to deserving candidates.",
                                        "To bring down Computer Education to the grassroots level.",
                                        "To provide placement assistance to deserving candidates.",
                                        "To eradicate anything, like Computer Phobia.",
                                        "To work out specific courses designed as per current job scenario, in order to provide a well trained workforce to the corporate sector."
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-4 p-6 rounded-[28px] bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all group"
                                        >
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                                                    <CheckCircle2 className="h-4 w-4 text-emerald-600 group-hover:text-white transition-colors" />
                                                </div>
                                            </div>
                                            <p className="text-slate-700 text-lg leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </main>

            <Footer />
        </div>
    );
}
