import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Ticket, ArrowRight } from "lucide-react";

export default function StudentScholarshipAdmit() {
    const [enrollmentNo, setEnrollmentNo] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: wire to scholarship admit card API
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col">
            <Navbar />

            <main className="flex-grow flex items-center justify-center py-12 md:py-24">
                <div className="container-pad">
                    <div className="max-w-lg mx-auto">
                        {/* Title Section */}
                        <div className="text-center mb-10">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 ring-2 ring-emerald-200">
                                    <Ticket className="h-6 w-6" strokeWidth={2.2} />
                                </div>
                                <h1 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                                    Online Scholarship Admit Card
                                </h1>
                            </div>
                            <div
                                className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-emerald-500 to-amber-400"
                                aria-hidden
                            />
                        </div>

                        <Card className="p-8 md:p-10 border-none shadow-xl bg-white rounded-[32px] relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500" />

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="enrollment" className="text-sm font-semibold text-slate-700">
                                            Enrollment No.
                                        </Label>
                                        <Input
                                            id="enrollment"
                                            type="text"
                                            placeholder="Enrollment No."
                                            value={enrollmentNo}
                                            onChange={(e) => setEnrollmentNo(e.target.value)}
                                            className="h-12 border-slate-200 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 transition-all placeholder:text-slate-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="dob" className="text-sm font-semibold text-slate-700">
                                            Date of Birth
                                        </Label>
                                        <Input
                                            id="dob"
                                            type="date"
                                            value={dateOfBirth}
                                            onChange={(e) => setDateOfBirth(e.target.value)}
                                            className="h-12 border-slate-200 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 transition-all text-slate-700"
                                        />
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <Button
                                        type="submit"
                                        className="w-full sm:w-auto h-12 px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-200/50 transition-all flex items-center justify-center gap-2 group"
                                    >
                                        Login
                                        <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                                    </Button>
                                </div>
                            </form>
                        </Card>

                        <p className="mt-6 text-center text-sm text-slate-500">
                            Enter your enrollment number and date of birth to download your scholarship admit card.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
