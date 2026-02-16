import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Building2, Landmark, User, CreditCard, MapPin, Hash, QrCode, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import qrImg from "@/assets/images/qr-bank.jpg";

export default function BankDetails() {
    const { toast } = useToast();
    const [copiedField, setCopiedField] = useState<string | null>(null);

    const bankInfo = [
        { label: "Name of The Bank", value: "ALLAHABAD / INDIAN BANK", icon: <Landmark className="h-5 w-5" /> },
        { label: "A/C Name", value: "Jatiya Yuva Computer Shaksharta Mission", icon: <User className="h-5 w-5" /> },
        { label: "A/C No", value: "50287164980", icon: <CreditCard className="h-5 w-5" /> },
        { label: "Branch Name", value: "Chanduria", icon: <MapPin className="h-5 w-5" /> },
        { label: "Branch Code", value: "3277", icon: <Hash className="h-5 w-5" /> },
        { label: "MICR Code", value: "741019208", icon: <QrCode className="h-5 w-5" /> },
        { label: "IFSC Code", value: "IDIB000S703", icon: <Hash className="h-5 w-5" /> },
    ];

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(label);
        toast({
            title: "Copied!",
            description: `${label} copied to clipboard`,
        });
        setTimeout(() => setCopiedField(null), 2000);
    };

    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <Navbar />

            <main className="py-12 md:py-20">
                <div className="container-pad">
                    {/* Header */}
                    <div className="mb-16 text-center">
                        <h1 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-4">
                            Bank Details
                        </h1>
                        <p className="text-emerald-600 font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                            <span className="w-8 h-px bg-emerald-200"></span>
                            Official Payment Information
                            <span className="w-8 h-px bg-emerald-200"></span>
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <Card className="p-8 md:p-12 border-none shadow-2xl bg-white rounded-[40px] relative overflow-hidden">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -mr-32 -mt-32 z-0" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-50 rounded-full -ml-24 -mb-24 z-0" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="p-4 rounded-2xl bg-emerald-600 text-white shadow-lg">
                                        <Building2 className="h-8 w-8" />
                                    </div>
                                    <div>
                                        <h2 className="font-display text-2xl text-slate-900">Official Bank Account</h2>
                                        <p className="text-slate-500 text-sm">For all official transactions and fee payments</p>
                                    </div>
                                </div>

                                <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
                                    <div className="grid gap-4">
                                        {bankInfo.map((item, index) => (
                                            <div
                                                key={index}
                                                className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-md border border-slate-100 hover:border-emerald-200 transition-all duration-300"
                                            >
                                                <div className="flex items-center gap-4 mb-2 md:mb-0">
                                                    <div className="text-emerald-500 group-hover:scale-110 transition-transform">
                                                        {item.icon}
                                                    </div>
                                                    <span className="text-slate-500 font-medium text-sm md:text-base">{item.label}</span>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <span className="text-slate-900 font-bold text-lg pointer-events-none">
                                                        {item.value}
                                                    </span>
                                                    <button
                                                        onClick={() => copyToClipboard(item.value, item.label)}
                                                        className={`p-2 rounded-xl transition-all ${copiedField === item.label
                                                            ? "bg-emerald-100 text-emerald-600"
                                                            : "bg-slate-200/50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-500"
                                                            }`}
                                                        title={`Copy ${item.label}`}
                                                    >
                                                        {copiedField === item.label ? (
                                                            <CheckCircle2 className="h-4 w-4" />
                                                        ) : (
                                                            <Copy className="h-4 w-4" />
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* QR Code Section */}
                                    <div className="flex flex-col items-center">
                                        <div className="relative group">
                                            <div className="absolute -inset-4 bg-emerald-100 rounded-[40px] blur-xl opacity-50 group-hover:opacity-100 transition duration-500" />
                                            <Card className="relative overflow-hidden border-4 border-white shadow-xl rounded-[32px] bg-white p-2">
                                                <img
                                                    src={qrImg}
                                                    alt="Scan to Pay"
                                                    className="w-full max-w-[280px] h-auto rounded-[24px]"
                                                />
                                            </Card>
                                        </div>
                                        <div className="mt-8 text-center md:text-left">
                                            <p className="font-display text-xl text-slate-900 mb-2">Scan to Pay</p>
                                            <div className="flex items-center gap-2 justify-center md:justify-start text-emerald-600 text-sm font-semibold">
                                                <CheckCircle2 className="h-4 w-4" />
                                                Verified Merchant
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 p-8 rounded-[32px] bg-amber-50 border border-amber-100 flex flex-col md:flex-row items-center gap-6">
                                    <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                                        <Landmark className="h-6 w-6" />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h4 className="font-bold text-amber-900 mb-1">Important Note</h4>
                                        <p className="text-amber-800/70 text-sm leading-relaxed">
                                            Please double-check the account number and IFSC code before making any payment. Always keep a copy of the transaction receipt for verification.
                                        </p>
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
