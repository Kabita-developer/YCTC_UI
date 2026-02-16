import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    UserCheck,
    Hash,
    Calendar,
    ShieldCheck,
    ArrowRight,
    Info
} from "lucide-react";

export default function EnrollmentVerification() {
    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
            <Navbar />

            <main className="flex-grow flex items-center justify-center py-12 md:py-24">
                <div className="container-pad w-full">
                    <div className="max-w-xl mx-auto">
                        {/* Header Branding */}
                        <div className="text-center mb-10">
                            <div className="inline-flex p-4 rounded-3xl bg-emerald-50 text-emerald-600 mb-6 shadow-sm">
                                <UserCheck className="h-8 w-8" />
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl text-slate-900 mb-3 font-bold tracking-tight uppercase">
                                Student Enrollment Verification
                            </h1>
                            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-emerald-200 mx-auto rounded-full mb-6" />
                            <p className="text-slate-500 text-sm max-w-sm mx-auto">
                                Verify your enrollment status and access your official student records.
                            </p>
                        </div>

                        <Card className="p-8 md:p-12 border-none shadow-2xl bg-white rounded-[40px] relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-600 via-emerald-400 to-blue-500" />

                            <form className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <Label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            <Hash className="h-4 w-4 text-emerald-500" /> Enrollment No.
                                        </Label>
                                        <Input
                                            placeholder="e.g. JYCSM/2024/000"
                                            className="h-14 border-slate-200 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium placeholder:text-slate-300"
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <Label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            <Calendar className="h-4 w-4 text-emerald-500" /> Date of Birth
                                        </Label>
                                        <Input
                                            type="date"
                                            className="h-14 border-slate-200 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium text-slate-600"
                                        />
                                    </div>
                                </div>

                                <Button className="w-full h-16 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-100 transition-all flex items-center justify-center gap-2 group text-lg uppercase tracking-wider h-auto">
                                    Verify Enrollment
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>
                        </Card>

                        {/* Help Section */}
                        <div className="mt-10 grid md:grid-cols-2 gap-4">
                            <Card className="p-5 border-none shadow-md bg-white rounded-3xl flex items-start gap-4">
                                <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                                    <Info className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 mb-1">Where is my No?</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        Find your Enrollment Number on your official JYCSM registration card or ID.
                                    </p>
                                </div>
                            </Card>
                            <Card className="p-5 border-none shadow-md bg-white rounded-3xl flex items-start gap-4">
                                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 mb-1">Official Verification</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        This is the authorized portal for employment and academic verification.
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
