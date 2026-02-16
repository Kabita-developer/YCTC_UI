import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    User,
    Lock,
    Eye,
    EyeOff,
    Home,
    ArrowRight,
    ShieldCheck
} from "lucide-react";
import { Link } from "wouter";

export default function CenterLogin() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col">
            <Navbar />

            <main className="flex-grow flex items-center justify-center py-12 md:py-24">
                <div className="container-pad">
                    <div className="max-w-md mx-auto">
                        {/* Header Branding */}
                        <div className="text-center mb-10">
                            <div className="inline-flex p-4 rounded-3xl bg-emerald-50 text-emerald-600 mb-6 shadow-sm">
                                <Home className="h-8 w-8" />
                            </div>
                            <h1 className="font-display text-3xl text-slate-900 mb-2">Center Login</h1>
                            <p className="text-slate-500 text-sm">Welcome back! Please enter your credentials.</p>
                        </div>

                        <Card className="p-8 md:p-10 border-none shadow-2xl bg-white rounded-[40px] relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500" />

                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <Label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                                        <User className="h-4 w-4 text-slate-400" /> Username
                                    </Label>
                                    <Input
                                        type="text"
                                        placeholder="Enter center ID or username"
                                        className="h-12 border-slate-200 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                                            <Lock className="h-4 w-4 text-slate-400" /> Password
                                        </Label>
                                        <Link href="/forgot-password">
                                            <span className="text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:underline cursor-pointer">
                                                Forgot Password?
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="relative">
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            className="h-12 border-slate-200 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 transition-all pr-12"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                        >
                                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                        </button>
                                    </div>
                                </div>

                                <Button className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-2 group">
                                    Login to Portal
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>
                        </Card>

                        {/* Additional Info */}
                        <div className="mt-8 text-center space-y-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                <ShieldCheck className="h-3 w-3" /> Secure Administrator Access
                            </div>
                            <p className="text-xs text-slate-400">
                                Protected by industry standard encryption. Authorized access only.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
