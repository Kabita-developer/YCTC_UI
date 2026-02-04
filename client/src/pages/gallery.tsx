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
        title: "Modern Campus Library",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dee402?auto=format&fit=crop&w=900&q=70",
    },
    {
        id: "g2",
        category: "Classes",
        title: "Interactive Coding Workshop",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=70",
    },
    {
        id: "g3",
        category: "Events",
        title: "Annual Convocation 2025",
        image: "https://images.unsplash.com/photo-1523050335102-c325064dd921?auto=format&fit=crop&w=900&q=70",
    },
    {
        id: "g4",
        category: "Campus",
        title: "Students at the Plaza",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=70",
    },
    {
        id: "g5",
        category: "Classes",
        title: "Design Thinking Seminar",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=70",
    },
    {
        id: "g6",
        category: "Events",
        title: "Tech Innovation Summit",
        image: "https://images.unsplash.com/photo-1540575861501-7c00117f2404?auto=format&fit=crop&w=900&q=70",
    },
    {
        id: "g7",
        category: "Campus",
        title: "Advanced Research Lab",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=70",
    },
    {
        id: "g8",
        category: "Classes",
        title: "Business Strategy Group",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=70",
    },
    {
        id: "g9",
        category: "Events",
        title: "Cultural Festival Night",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=70",
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
