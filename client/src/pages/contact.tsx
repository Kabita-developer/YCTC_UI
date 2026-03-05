import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Building2, MapPin } from "lucide-react";

const officeDetails = [
    { line: "MJYCSM Skill Development Pvt. Ltd." },
    { line: "Memari Jatiya Yuva Computer Shaksharta Mission." },
    { line: "Memari Jatiya Yuva Computer." },
    { line: "Memari, West Bengal 713146" },
    { line: "Contact No : Helpline No: 9735414141" },
    { line: "Mail ID: memarijycsm@gmail.com" },
];

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: wire to enquiry API
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col">
            <Navbar />

            <main className="flex-grow py-12 md:py-20">
                <div className="container-pad">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 ring-2 ring-emerald-200">
                                <Mail className="h-6 w-6" strokeWidth={2.2} />
                            </div>
                            <h1 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                                Contact Us
                            </h1>
                        </div>
                        <div
                            className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-emerald-500 to-amber-400"
                            aria-hidden
                        />
                    </div>

                    <div className="grid gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
                        {/* Left - Office Address */}
                        <Card className="p-8 md:p-10 border-none shadow-xl bg-white rounded-[32px] h-fit">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                                    <Building2 className="h-5 w-5" strokeWidth={2.2} />
                                </div>
                                <h2 className="font-display text-xl text-emerald-800">Office Address</h2>
                            </div>
                            <div className="space-y-2 text-slate-700 text-sm leading-relaxed">
                                {officeDetails.map((item, i) => (
                                    <p key={i}>{item.line}</p>
                                ))}
                            </div>
                        </Card>

                        {/* Right - Enquiry Form */}
                        <Card className="p-8 md:p-10 border-none shadow-xl bg-white rounded-[32px] relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500" />
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                                    <Mail className="h-5 w-5" strokeWidth={2.2} />
                                </div>
                                <h2 className="font-display text-xl text-slate-900">Submit your Enquiry</h2>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid gap-5 sm:grid-cols-3">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-sm font-semibold text-slate-700">Name</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="h-11 border-slate-200 rounded-xl focus:ring-emerald-500 focus:border-emerald-500"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="h-11 border-slate-200 rounded-xl focus:ring-emerald-500 focus:border-emerald-500"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="Phone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="h-11 border-slate-200 rounded-xl focus:ring-emerald-500 focus:border-emerald-500"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Enquiry"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows={4}
                                        className="resize-none border-slate-200 rounded-xl focus:ring-emerald-500 focus:border-emerald-500"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full sm:w-auto h-12 px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-200/50"
                                >
                                    Submit
                                </Button>
                            </form>
                        </Card>
                    </div>

                    {/* Map Section */}
                    <section className="mt-14 max-w-6xl mx-auto" aria-label="Office location map">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                                <MapPin className="h-5 w-5" strokeWidth={2.2} />
                            </div>
                            <h2 className="font-display text-xl text-slate-900">Office Location</h2>
                        </div>
                        <Card className="max-w-md p-5 mb-4 border border-slate-100 shadow-md rounded-2xl bg-white">
                            <p className="font-display text-xl font-bold text-slate-900 mb-1">Memari Jatiya Yuva Computer</p>
                            <p className="text-slate-600 text-sm">Memari, West Bengal 713146</p>
                            <div className="mt-2 flex flex-wrap items-center gap-4">
                                <a
                                    href="https://www.google.com/maps/place/Memari+Jatiya+Yuva+Computer,+Memari,+West+Bengal+713146"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                                >
                                    Directions
                                </a>
                                <a
                                    href="https://www.google.com/maps/place/Memari+Jatiya+Yuva+Computer,+Memari,+West+Bengal+713146"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                                >
                                    View larger map
                                </a>
                            </div>
                        </Card>
                        <Card className="overflow-hidden border-none shadow-xl rounded-[32px] bg-white">
                            <div className="relative w-full aspect-[4/3] min-h-[280px] sm:min-h-[360px]">
                                <iframe
                                    title="JYCSM Office Location - Memari Jatiya Yuva Computer, Memari"
                                    src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d4369.2298395609305!2d88.09140790736315!3d23.180821172891374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d23.183693299999998!2d88.09423389999999!4m5!1s0x39f859fdc9d8d43b%3A0x793594f1e1749d3!2sMemari%20Jatiya%20Yuva%20Computer%2C%20Memari%2C%20West%20Bengal%20713146!3m2!1d23.177868699999998!2d88.0960793!5e0!3m2!1sen!2sin!4v1770976364378!5m2!1sen!2sin"
                                    className="absolute inset-0 w-full h-full border-0"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </Card>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
