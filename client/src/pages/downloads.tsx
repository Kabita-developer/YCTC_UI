import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

const downloadItems = [
    { title: "MJYCSM Admission Form", href: "/3m93zh2582quFORM 1 (1).pdf", downloadFilename: "MJYCSM-Admission-Form.pdf" },
    { title: "MJYCSM Exam Form", href: "/hxycok8vs13zJYCSM_Exam_Form.pdf", downloadFilename: "MJYCSM-Exam-Form.pdf" },
    { title: "MJYCSM Prospectus", href: "/mbo3nhtpr8jmjycsm-prospectus-new-5.pdf", downloadFilename: "MJYCSM-Prospectus.pdf" },
    { title: "MJYCSM Sample Certificate", href: "/0twq1hoq6hudSAMPLE.jpg", downloadFilename: "MJYCSM-Sample-Certificate.jpg" },
    { title: "MJYCSM Mark Sheet Sample", href: "/5k1mpxwdilcdSC.jpg", downloadFilename: "MJYCSM-Mark-Sheet-Sample.jpg" },
    { title: "MJYCSM Half Logo", href: "/q4kgpjz3wz3bJYCSM Half logo.jpg", downloadFilename: "MJYCSM-Half-Logo.jpg" },
    { title: "MJYCSM Skill Development Logo", href: "/keiy4h9eh0dlJYCSM Skill Logo.jpg", downloadFilename: "MJYCSM-Skill-Development-Logo.jpg" },
    { title: "MJYCSM Logo PNG", href: "/8dp3hxdvd0hrFull English Logo PNG.png", downloadFilename: "MJYCSM-Logo.png" },
    { title: "Best Center List 2024", href: "#" },
    { title: "MJYCSM Bengali Logo", href: "/d13w0d0e67lqbengali logo 1.jpg", downloadFilename: "MJYCSM-Bengali-Logo.jpg" },
    { title: "MJYCSM Assamese Logo", href: "/xpyka7ap9j1sASSAM JYCSM.png", downloadFilename: "MJYCSM-Assamese-Logo.png" },
];

export default function Downloads() {
    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col">
            <Navbar />

            <main className="flex-grow py-12 md:py-20">
                <div className="container-pad">
                    {/* Header */}
                    <div className="flex flex-col items-end mb-12">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 ring-2 ring-emerald-200">
                                <Download className="h-6 w-6" strokeWidth={2.2} />
                            </div>
                            <h1 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl uppercase">
                                Downloads
                            </h1>
                        </div>
                        <div
                            className="h-1 w-24 mt-3 rounded-full bg-gradient-to-r from-emerald-500 to-amber-400"
                            aria-hidden
                        />
                    </div>

                    {/* Download list */}
                    <div className="max-w-2xl space-y-3">
                        {downloadItems.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                download={"downloadFilename" in item ? item.downloadFilename : true}
                                className="block group"
                            >
                                <Card className="flex items-center gap-4 p-4 rounded-2xl border-none bg-emerald-600 text-white shadow-lg shadow-emerald-200/50 transition-all hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-300/40 group-hover:scale-[1.01]">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20">
                                        <FileText className="h-6 w-6" strokeWidth={2.2} />
                                    </div>
                                    <span className="font-semibold text-sm uppercase tracking-wide">
                                        {item.title}
                                    </span>
                                </Card>
                            </a>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
