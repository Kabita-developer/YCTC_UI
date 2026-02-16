import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

import chairmanImg from "@/assets/images/chairman.jpg";

export default function ChairmanMessage() {
    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <Navbar />

            <main className="py-12 md:py-20">
                <div className="container-pad">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <h1 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-4">
                            Chairman Message
                        </h1>
                        <p className="text-emerald-600 font-semibold uppercase tracking-wider text-sm">
                            Message from the Chairman
                        </p>
                    </div>

                    {/* Content Card */}
                    <Card className="max-w-6xl mx-auto py-8 px-[14px] md:py-16 md:px-[14px] border-none shadow-xl bg-white rounded-[40px] relative overflow-hidden">
                        <Quote className="absolute -top-6 -left-6 h-32 w-32 text-emerald-50/50 -z-0" />

                        <div className="relative z-10">
                            {/* Chairman Image Section */}
                            <div className="mb-8 md:float-left md:mr-8 md:mb-4 lg:mr-12">
                                <div className="relative w-full max-w-[280px] mx-auto md:mx-0">
                                    <div className="absolute -inset-2 bg-emerald-100 rounded-[32px] -z-10" />
                                    <img
                                        src={chairmanImg}
                                        alt="Mr. Anup Sarkar"
                                        className="w-full aspect-[4/5] object-cover rounded-[28px] shadow-lg ring-4 ring-white"
                                    />
                                    <div className="mt-4 text-center md:text-left md:hidden px-4">
                                        <p className="font-display text-xl text-foreground">Mr. Anup Sarkar</p>
                                        <p className="text-emerald-600 font-bold text-sm">Chairman, JYCSM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8 text-slate-700 leading-relaxed text-lg text-justify">
                                <p>
                                    Information Technology has become a fastest growing Industry in today's scenario which is providing thousands of job to well trained professionals. India has achieved a terrific growth in this field and is being considered as a potential I.T Super Power in the world. Information Technology is providing the upcoming future that will change every face of human existence.
                                </p>

                                <p>
                                    In order to produce Information Technology Professionals, I.T education requires a high quality competence and infrastructure. Today, new packages, newer versions of current software and new technological tools are being adopted by the trade and industry periodically. The education therefore, must catch up with these developments well in time so that I.T students do not face the problem of obsolescence. Jatiya Yuva Computer Saksharta Mission feels the underlying concepts of new technology and tools along with reasonable skills be delivered to the students before they go out in the industry.
                                </p>

                                <p>
                                    Thus in a very fast changing technical scenario, concept and practical based education becomes quite important as against tool based education. Technological changes also demand that institutions must consider the market scenario, and adjust the contents and delivery of education matching the expectations of the business houses.
                                </p>

                                <p>
                                    Education, situation and adaptation these three subjects are integrally involved with human life. The only mission of education is to adapt people in changing society. Only education can help people to achieve their certain target in moving society.
                                </p>

                                <p>
                                    I am sure our students can meet any demand & challenges that the employer may have on them. I wish them great success in all their Endeavour’s and quest for a better tomorrow.
                                </p>

                                <div className="pt-12 flex justify-end">
                                    <div className="text-right">
                                        <p className="font-display text-2xl text-foreground">Chairman</p>
                                        <p className="text-emerald-700 font-bold text-xl mt-1">Mr. Anup Sarkar</p>
                                        <p className="text-slate-500 text-sm">(MBA in Marketing)</p>
                                    </div>
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
