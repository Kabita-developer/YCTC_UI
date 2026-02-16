import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Star, ArrowRight, Award, Brain, Sparkles } from "lucide-react";

type Course = {
    id: string;
    title: string;
    image: string;
    rating: number;
    reviews: number;
    totalFeesDisplay: string;
    level: string;
    ageGroup: string;
    duration: string;
    monthlyFee: string;
    admissionFee: string;
    atATimeOffer: string;
};

const abacusCourses: Course[] = [
    {
        id: "ab1",
        title: "Abacus – Foundation (Level 1–4)",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=70",
        rating: 4.8,
        reviews: 1240,
        totalFeesDisplay: "₹4200",
        level: "Beginner",
        ageGroup: "5–12 years",
        duration: "6 Months",
        monthlyFee: "₹600 × 6",
        admissionFee: "₹600",
        atATimeOffer: "₹3900",
    },
    {
        id: "ab2",
        title: "Abacus – Intermediate (Level 5–8)",
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=70",
        rating: 4.9,
        reviews: 892,
        totalFeesDisplay: "₹5400",
        level: "Intermediate",
        ageGroup: "6–14 years",
        duration: "8 Months",
        monthlyFee: "₹600 × 8",
        admissionFee: "₹600",
        atATimeOffer: "₹5100",
    },
    {
        id: "ab3",
        title: "Abacus – Advanced (Level 9–12)",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=70",
        rating: 4.9,
        reviews: 756,
        totalFeesDisplay: "₹6600",
        level: "Advanced",
        ageGroup: "7–15 years",
        duration: "10 Months",
        monthlyFee: "₹600 × 10",
        admissionFee: "₹600",
        atATimeOffer: "10% Off",
    },
];

function RatingStars({ rating }: { rating: number }) {
    const full = Math.floor(rating);
    const hasHalf = rating - full >= 0.5;
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
                <Star
                    key={i}
                    className={`h-4 w-4 ${i <= full ? "fill-amber-400 text-amber-400" : i === full + 1 && hasHalf ? "fill-amber-400/70 text-amber-400" : "fill-slate-200 text-slate-200"}`}
                    strokeWidth={1.5}
                />
            ))}
        </div>
    );
}

export default function AbacusCourses() {
    return (
        <div className="min-h-screen bg-slate-50/50">
            <Navbar />

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />
                <div className="container-pad relative z-10 py-20 md:py-28">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm text-white ring-1 ring-white/20">
                            <Calculator className="h-7 w-7" strokeWidth={2} />
                        </div>
                        <span className="rounded-full bg-amber-400/20 px-4 py-1.5 text-sm font-semibold text-amber-200 ring-1 ring-amber-400/30">
                            Mental Math & Brain Development
                        </span>
                    </div>
                    <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl max-w-3xl">
                        Abacus Courses
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg text-emerald-100/90 leading-relaxed">
                        Build concentration, memory and speed in arithmetic with our structured Abacus program. Ideal for school-going children to excel in math and logical thinking.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-8">
                        <div className="flex items-center gap-3 text-white/90">
                            <Brain className="h-5 w-5 text-amber-400" />
                            <span className="text-sm font-medium">Brain Development</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/90">
                            <Sparkles className="h-5 w-5 text-emerald-300" />
                            <span className="text-sm font-medium">Level-Based Curriculum</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/90">
                            <Award className="h-5 w-5 text-emerald-300" />
                            <span className="text-sm font-medium">JYCSM Certified</span>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50/50 to-transparent" />
            </section>

            {/* Courses Grid */}
            <section className="relative -mt-12 z-10 pb-20 md:pb-28">
                <div className="container-pad">
                    <div className="grid gap-8 md:grid-cols-3">
                        {abacusCourses.map((c) => (
                            <Card
                                key={c.id}
                                className="group overflow-hidden rounded-3xl border-0 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,.25)] transition-all duration-300 hover:shadow-[0_28px_80px_-35px_rgba(15,23,42,.35)] hover:-translate-y-1"
                            >
                                <div className="relative">
                                    <img
                                        src={c.image}
                                        alt={c.title}
                                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                    <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                                        <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-emerald-700 shadow-lg backdrop-blur-sm">
                                            {c.level}
                                        </span>
                                        <span className="rounded-full bg-emerald-600/90 px-4 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-sm">
                                            {c.ageGroup}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h2 className="font-display text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                                        {c.title}
                                    </h2>
                                    <div className="mt-3 flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <RatingStars rating={c.rating} />
                                            <span className="text-sm font-semibold text-slate-700">{c.rating}</span>
                                        </div>
                                        <span className="text-sm text-slate-500">
                                            ({c.reviews.toLocaleString()} reviews)
                                        </span>
                                    </div>

                                    <div className="mt-5 grid grid-cols-2 gap-2">
                                        {[
                                            { k: "Duration", v: c.duration },
                                            { k: "Monthly Fee", v: c.monthlyFee },
                                            { k: "Admission", v: c.admissionFee },
                                            { k: "At a Time", v: c.atATimeOffer },
                                        ].map((m) => (
                                            <div
                                                key={m.k}
                                                className="rounded-xl bg-slate-50 px-3 py-2.5 ring-1 ring-slate-100"
                                            >
                                                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                                                    {m.k}
                                                </div>
                                                <div className="mt-0.5 font-semibold text-slate-800 text-sm">{m.v || "—"}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex flex-col gap-4">
                                        <div>
                                            <div className="text-xs font-medium text-slate-500">Total Fees</div>
                                            <div className="font-display text-xl font-bold text-emerald-700">
                                                {c.totalFeesDisplay}
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <Button
                                                variant="outline"
                                                className="rounded-xl border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300"
                                            >
                                                Details
                                            </Button>
                                            <Button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500">
                                                Enroll Now
                                                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-16 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-8 md:p-12 text-center shadow-xl">
                        <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                            Give your child the Abacus advantage
                        </h3>
                        <p className="mt-3 max-w-xl mx-auto text-emerald-100">
                            Join JYCSM Abacus and watch confidence and speed in math grow. Enquire today for a demo or admission.
                        </p>
                        <Button
                            asChild
                            className="mt-6 rounded-xl bg-white px-8 py-3 font-semibold text-emerald-700 hover:bg-emerald-50"
                        >
                            <Link href="/contact">
                                Contact Us
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
