import { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

type GalleryCategory = "All" | "Events" | "Classes" | "Campus";

type GalleryItem = {
    id: string;
    category: GalleryCategory;
    title: string;
    image: string;
};

const galleryItems: GalleryItem[] = [
    {
        id: "g1",
        category: "Campus",
        title: "Certified Students – Proud Achievers",
        image: "/4a0ef5b5-17db-4ca0-aa0e-34066918d7fe.jpg",
    },
    {
        id: "g2",
        category: "Classes",
        title: "Hands-On Computer Training in Action",
        image: "2023-03-02-Picsart-AiImageEnhancer.webp",
    },
    {
        id: "g3",
        category: "Events",
        title: "Annual Convocation 2025",
        image: "/b3999d9d-54be-47b4-828c-26a483d74f9e-Picsart-AiImageEnhancer.jpg",
    },
    {
        id: "g4",
        category: "Campus",
        title: "Empowering Young Minds Through Skill & Education",
        image: "/88829294-72df-4cc2-8d98-590c78092518.jpg",
    },
    {
        id: "g5",
        category: "Classes",
        title: "Building Digital Skills Every Day",
        image: "/2023-03-03-Picsart-AiImageEnhancer.webp",
    },
    {
        id: "g6",
        category: "Events",
        title: "A Proud Moment of National Honor",
        image: "/cc64f976-4545-4705-8ca6-6c2949fa5f79-Picsart-AiImageEnhancer.jpg",
    },
    {
        id: "g7",
        category: "Campus",
        title: "A Classroom Full of Future Achievers",
        image: "/a57c98f3-aed8-4634-a5fe-a3ff74ad2d9d.jpg",
    },
    {
        id: "g8",
        category: "Classes",
        title: "Practical Learning for Real-World Skills",
        image: "/unnamed-Picsart-AiImageEnhancer.webp",
    },
    {
        id: "g9",
        category: "Events",
        title: "Honored at All India NBCE Awards 2026",
        image: "/d6c86202-e45b-4a02-b1d7-8dcece0d3013-Picsart-AiImageEnhancer.jpg",
    },
];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");

    const filteredItems = useMemo(() => {
        if (activeCategory === "All") return galleryItems;
        return galleryItems.filter((item) => item.category === activeCategory);
    }, [activeCategory]);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="bg-hero noise-overlay py-16 text-white md:py-24">
                    <div className="container-pad text-center">
                        <h1 className="font-display text-4xl leading-tight tracking-tight sm:text-6xl">
                            Campus <span className="text-emerald-400">Gallery</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
                            Explore our vibrant campus life, modern facilities, and the moments that define our university experience.
                        </p>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-16 md:py-24">
                    <div className="container-pad">
                        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                            <div>
                                <h2 className="font-display text-3xl tracking-tight text-foreground">Explore Moments</h2>
                                <p className="mt-2 text-muted-foreground">Filter by category to see specific aspects of our campus.</p>
                            </div>

                            <Tabs
                                value={activeCategory}
                                onValueChange={(v) => setActiveCategory(v as GalleryCategory)}
                                className="w-full md:w-auto"
                            >
                                <TabsList className="grid h-auto w-full grid-cols-2 gap-2 bg-secondary/50 p-1 sm:grid-cols-4">
                                    {["All", "Events", "Classes", "Campus"].map((cat) => (
                                        <TabsTrigger
                                            key={cat}
                                            value={cat}
                                            className="rounded-xl px-6 py-2.5 text-sm font-semibold transition-all data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-md"
                                        >
                                            {cat}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </Tabs>
                        </div>

                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredItems.map((item) => (
                                <Card
                                    key={item.id}
                                    className="group lift relative overflow-hidden rounded-3xl border-none bg-transparent"
                                >
                                    <div className="relative h-[300px] w-full overflow-hidden rounded-3xl">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-all duration-300 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100">
                                            <span className="mb-2 inline-block w-fit rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
                                                {item.category}
                                            </span>
                                            <h3 className="font-display text-xl text-white">{item.title}</h3>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        {filteredItems.length === 0 && (
                            <div className="py-20 text-center">
                                <p className="text-xl text-muted-foreground">No images found in this category.</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />

            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg ring-1 ring-emerald-500/30 transition hover:bg-emerald-500"
                aria-label="Back to top"
            >
                <ChevronRight className="h-5 w-5 rotate-[-90deg]" strokeWidth={2.2} />
            </a>
        </div>
    );
}
