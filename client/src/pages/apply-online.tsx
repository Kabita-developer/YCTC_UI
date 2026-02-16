import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {
    User,
    Mail,
    MapPin,
    Calendar,
    GraduationCap,
    FileUp,
    Building2,
    ShieldCheck,
    Cpu,
    Users,
    School,
    BookOpen,
    Camera,
    RefreshCw
} from "lucide-react";

export default function ApplyOnline() {
    const states = [
        "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
        "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa",
        "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
        "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
        "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
        "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

    const personalFields = [
        { label: "Contact Person", type: "text", required: true, icon: <User className="h-4 w-4" /> },
        { label: "Email Address", type: "email", required: true, icon: <Mail className="h-4 w-4" /> },
        { label: "Residence Address", type: "text", required: true, icon: <MapPin className="h-4 w-4" /> },
        { label: "City", type: "text", required: false, icon: <Building2 className="h-4 w-4" /> },
        { label: "State", type: "select", required: false, icon: <MapPin className="h-4 w-4" /> },
        { label: "Date Of Birth", type: "date", required: true, icon: <Calendar className="h-4 w-4" /> },
        { label: "Qualification", type: "text", required: true, icon: <GraduationCap className="h-4 w-4" /> },
    ];

    const centerFields = [
        { label: "Center Name", required: true, icon: <Building2 className="h-4 w-4" /> },
        { label: "Center Address", required: true, icon: <MapPin className="h-4 w-4" /> },
        { label: "Center City / Town", required: true, icon: <Building2 className="h-4 w-4" /> },
        { label: "Center State", type: "select", required: true, icon: <MapPin className="h-4 w-4" /> },
        { label: "Center District", type: "select", required: true, icon: <MapPin className="h-4 w-4" /> },
        { label: "Centre Affiliated by", required: true, icon: <ShieldCheck className="h-4 w-4" /> },
        { label: "Ph No. With STD code", required: true, icon: <Cpu className="h-4 w-4" /> },
        { label: "Total Space", required: false, icon: <Layout className="h-4 w-4" /> },
        { label: "Theory Room", required: false, icon: <BookOpen className="h-4 w-4" /> },
        { label: "Practical Room", required: false, icon: <Cpu className="h-4 w-4" /> },
        { label: "Number of Computer", required: true, icon: <Cpu className="h-4 w-4" /> },
        { label: "Number Of Faculties", required: true, icon: <Users className="h-4 w-4" /> },
        { label: "Computer Spec. (Assembled/Branded)", required: true, icon: <Cpu className="h-4 w-4" /> },
        { label: "No. of Colleges", required: false, icon: <School className="h-4 w-4" /> },
        { label: "No. of High Schools", required: false, icon: <School className="h-4 w-4" /> },
    ];

    const documentFields = [
        "Colour Passport Size Photograph of The Head of The Center",
        "Voter Card of The Center Head (Both Side in One Page)",
        "Pan Card of The Center Head",
        "Trade License / Registration Certificate of The Center",
        "Colour Photograph of Theory Room",
        "Colour Photograph of Practical Room",
        "Colour Photograph of Office Room",
        "Colour Photograph of Front Side of The Center"
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <Navbar />

            <main className="py-12 md:py-24">
                <div className="container-pad">
                    {/* Header */}
                    <div className="mb-16 text-center">
                        <h1 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-4">
                            Franchise Application
                        </h1>
                        <p className="text-emerald-600 font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                            <span className="w-8 h-px bg-emerald-200"></span>
                            Partner with JYCSM
                            <span className="w-8 h-px bg-emerald-200"></span>
                        </p>
                    </div>

                    <form className="max-w-5xl mx-auto space-y-12">
                        {/* Section 1: Personal Details */}
                        <Card className="p-8 md:p-12 border-none shadow-xl bg-white rounded-[40px] relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500" />
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600">
                                    <User className="h-6 w-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-display text-slate-900">Personal Details</h2>
                                    <p className="text-slate-500 text-sm">Verification information for the franchise head</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {personalFields.map((field, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <Label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                                            {field.icon} {field.label} {field.required && <span className="text-rose-500">*</span>}
                                        </Label>
                                        {field.type === "select" ? (
                                            <Select>
                                                <SelectTrigger className="h-12 border-slate-200 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500">
                                                    <SelectValue placeholder="Select State" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {states.map(state => (
                                                        <SelectItem key={state} value={state.toLowerCase()}>{state}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        ) : (
                                            <Input
                                                type={field.type}
                                                className="h-12 border-slate-200 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                                                placeholder={`Enter your ${field.label.toLowerCase()}`}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Section 2: Center Details */}
                        <Card className="p-8 md:p-12 border-none shadow-xl bg-white rounded-[40px] relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500" />
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600">
                                    <Building2 className="h-6 w-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-display text-slate-900">Center Information</h2>
                                    <p className="text-slate-500 text-sm">Physical infrastructure and location details</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {centerFields.map((field, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <Label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                                            {field.icon} {field.label} {field.required && <span className="text-rose-500">*</span>}
                                        </Label>
                                        {field.type === "select" ? (
                                            <Select>
                                                <SelectTrigger className="h-12 border-slate-200 rounded-2xl">
                                                    <SelectValue placeholder={`Select ${field.label.split(' ').pop()}`} />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="none">Choose option</SelectItem>
                                                    {field.label.includes("State") && states.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                                </SelectContent>
                                            </Select>
                                        ) : (
                                            <Input
                                                className="h-12 border-slate-200 rounded-2xl focus:ring-emerald-500 transition-all"
                                                placeholder={field.label}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Section 3: Document Uploads */}
                        <Card className="p-8 md:p-12 border-none shadow-xl bg-white rounded-[40px] relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500" />
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600">
                                    <FileUp className="h-6 w-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-display text-slate-900">Document Submission</h2>
                                    <p className="text-slate-500 text-sm">Maximum file size per document: 200KB</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {documentFields.map((field, idx) => (
                                    <div key={idx} className="group p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all">
                                        <Label className="text-sm font-medium text-slate-700 block mb-4 leading-relaxed h-12 overflow-hidden">
                                            {field}
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                type="file"
                                                className="opacity-0 absolute inset-0 w-full h-full cursor-pointer z-10"
                                            />
                                            <div className="h-14 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center gap-3 text-slate-400 group-hover:border-emerald-300 group-hover:text-emerald-500 transition-colors">
                                                <Camera className="h-5 w-5" />
                                                <span className="text-xs font-bold uppercase tracking-wider">Choose File</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Section 4: Submission & Captcha */}
                        <div className="flex flex-col items-center justify-center space-y-8 pb-12">
                            <Card className="p-8 max-w-md w-full border-none shadow-xl bg-slate-900 text-white rounded-[32px] text-center">
                                <h3 className="text-lg font-display mb-4">Security Verification</h3>
                                <div className="bg-white/10 rounded-2xl p-6 mb-6">
                                    <p className="text-4xl font-serif italic tracking-tighter text-emerald-400 select-none blur-[0.4px]">husher</p>
                                </div>
                                <div className="space-y-4">
                                    <Input
                                        placeholder="Type the characters above"
                                        className="h-14 bg-white/5 border-white/10 rounded-2xl text-center text-lg tracking-widest placeholder:text-white/20 focus:ring-emerald-500"
                                    />
                                    <button type="button" className="flex items-center gap-2 mx-auto text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
                                        <RefreshCw className="h-3 w-3" /> NOT READABLE? CHANGE TEXT
                                    </button>
                                </div>
                            </Card>

                            <Button className="h-16 px-16 rounded-[24px] bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xl shadow-lg shadow-emerald-200 hover:scale-105 transition-all">
                                SUBMIT APPLICATION
                            </Button>
                            <p className="text-slate-400 text-sm italic">Upon submission, your application will enter the verification queue.</p>
                        </div>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
}

function Layout(props: { children: React.ReactNode, className?: string }) {
    return <div className={props.className}>{props.children}</div>
}
