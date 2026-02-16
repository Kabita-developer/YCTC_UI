import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Mail,
    User,
    Phone,
    MapPin,
    ArrowRight,
    RefreshCw,
    ShieldCheck,
} from "lucide-react";

const SAMPLE_STATES = [
    "Andhra Pradesh",
    "Bihar",
    "Delhi",
    "Gujarat",
    "Karnataka",
    "Maharashtra",
    "Tamil Nadu",
    "Uttar Pradesh",
    "West Bengal",
];

const SAMPLE_DISTRICTS = [
    "District A",
    "District B",
    "District C",
];

const SAMPLE_COURSES = [
    "Abacus",
    "Computer Certificate",
    "Computer Diploma",
    "Computer Advance Diploma",
    "Spoken English",
    "Vocational",
];

export default function AdmissionEnquiry() {
    const [captchaKey, setCaptchaKey] = useState(0);

    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
            <Navbar />

            <main className="flex-grow py-12 md:py-24">
                <div className="container-pad w-full">
                    <div className="max-w-3xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-10">
                            <div className="inline-flex p-4 rounded-3xl bg-emerald-50 text-emerald-600 mb-6 shadow-sm">
                                <Mail className="h-8 w-8" />
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl text-slate-900 mb-3 font-bold tracking-tight uppercase">
                                <span className="text-emerald-700">Admission</span>{" "}
                                <span className="text-slate-600">Enquiry</span>
                            </h1>
                            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400 mx-auto rounded-full mb-6" />
                            <p className="text-slate-500 text-sm max-w-md mx-auto">
                                Submit your details and we will get back to you regarding course admission.
                            </p>
                        </div>

                        <Card className="p-8 md:p-12 border-none shadow-2xl bg-white rounded-[40px] relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-600 via-emerald-400 to-amber-500" />

                            <form className="space-y-8">
                                {/* Row 1: Name, Mobile, Alternate Mobile */}
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="space-y-3">
                                        <Label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            <User className="h-4 w-4 text-emerald-500" /> Your Name <span className="text-rose-500">*</span>
                                        </Label>
                                        <Input
                                            placeholder="Your Name"
                                            required
                                            className="h-14 border-slate-200 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium placeholder:text-slate-300"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <Label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            <Phone className="h-4 w-4 text-emerald-500" /> Mobile <span className="text-rose-500">*</span>
                                        </Label>
                                        <Input
                                            type="tel"
                                            placeholder="Mobile"
                                            required
                                            className="h-14 border-slate-200 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium placeholder:text-slate-300"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <Label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            <Phone className="h-4 w-4 text-slate-400" /> Alternate Mobile
                                        </Label>
                                        <Input
                                            type="tel"
                                            placeholder="Alternate Mobile"
                                            className="h-14 border-slate-200 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium placeholder:text-slate-300"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Full Address, Pincode, State */}
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="space-y-3 md:col-span-1">
                                        <Label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            <MapPin className="h-4 w-4 text-emerald-500" /> Full Address <span className="text-rose-500">*</span>
                                        </Label>
                                        <Textarea
                                            placeholder="Full Address"
                                            required
                                            rows={3}
                                            className="min-h-[88px] border-slate-200 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium placeholder:text-slate-300 resize-none"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <Label className="text-sm font-bold text-slate-700">
                                            Pincode <span className="text-rose-500">*</span>
                                        </Label>
                                        <Input
                                            placeholder="Pincode"
                                            required
                                            className="h-14 border-slate-200 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium placeholder:text-slate-300"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <Label className="text-sm font-bold text-slate-700">Select State</Label>
                                        <Select>
                                            <SelectTrigger className="h-14 border-slate-200 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 font-medium text-slate-600 data-[placeholder]:text-slate-300">
                                                <SelectValue placeholder="Select State" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {SAMPLE_STATES.map((state) => (
                                                    <SelectItem key={state} value={state} className="rounded-xl">
                                                        {state}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                {/* Row 3: District, Course */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <Label className="text-sm font-bold text-slate-700">Select District</Label>
                                        <Select>
                                            <SelectTrigger className="h-14 border-slate-200 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 font-medium text-slate-600 data-[placeholder]:text-slate-300">
                                                <SelectValue placeholder="Select District" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {SAMPLE_DISTRICTS.map((d) => (
                                                    <SelectItem key={d} value={d} className="rounded-xl">
                                                        {d}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-3">
                                        <Label className="text-sm font-bold text-slate-700">Select Course</Label>
                                        <Select>
                                            <SelectTrigger className="h-14 border-slate-200 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 font-medium text-slate-600 data-[placeholder]:text-slate-300">
                                                <SelectValue placeholder="Select Course" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {SAMPLE_COURSES.map((course) => (
                                                    <SelectItem key={course} value={course} className="rounded-xl">
                                                        {course}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                {/* Captcha */}
                                <div className="pt-4 border-t border-slate-100">
                                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
                                        <div className="space-y-3 flex-1">
                                            <p className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                                <ShieldCheck className="h-4 w-4 text-emerald-500" /> Word verification
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                Type the characters you see in the picture below.
                                            </p>
                                            <div
                                                key={captchaKey}
                                                className="inline-flex items-center justify-center w-40 h-12 rounded-xl bg-slate-100 border border-slate-200 text-lg font-mono font-bold tracking-widest text-emerald-700 select-none"
                                                style={{ letterSpacing: "0.25em" }}
                                            >
                                                hushaby
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setCaptchaKey((k) => k + 1)}
                                                className="text-xs text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center gap-1"
                                            >
                                                <RefreshCw className="h-3.5 w-3.5" /> Not readable? Change text.
                                            </button>
                                            <p className="text-xs text-slate-500">Letters are not case sensitive.</p>
                                        </div>
                                        <div className="space-y-3 w-full sm:w-48">
                                            <Label className="text-sm font-bold text-slate-700">
                                                Captcha <span className="text-rose-500">*</span>
                                            </Label>
                                            <Input
                                                placeholder="Enter captcha"
                                                required
                                                className="h-14 border-slate-200 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 font-medium placeholder:text-slate-300"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full md:w-auto h-14 px-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-100 transition-all flex items-center justify-center gap-2 group text-base uppercase tracking-wider"
                                >
                                    Submit
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
