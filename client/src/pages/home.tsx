import { useMemo, useState, useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  GraduationCap,
  Laptop,
  LayoutGrid,
  Library,
  Mail,
  MapPin,
  Phone,
  Quote,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImg from "@/assets/images/hero-new.jpg";
import patternDots from "@/assets/images/pattern-dots.png";
import gradientBlob from "@/assets/images/gradient-blob.png";
import carousel1 from "@/assets/images/carousel-1.jpg";
import carousel2 from "@/assets/images/carousel-2.jpg";
import carousel3 from "@/assets/images/carousel-3.jpg";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type CourseCategory = "Graduate" | "Undergraduate" | "Online" | "Scholarship";

type Course = {
  id: string;
  category: CourseCategory;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  totalFeesDisplay?: string;
  level: string;
  duration: string;
  lessons: number;
  monthlyFee: string;
  admissionFee: string;
  atATimeOffer: string;
};

type Testimonial = {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
};

type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
};

function RatingStars({ rating, testId }: { rating: number; testId: string }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const total = 5;

  return (
    <div className="flex items-center gap-1" data-testid={testId}>
      {Array.from({ length: total }).map((_, i) => {
        const isFull = i < full;
        const isHalf = i === full && half;
        return (
          <span
            key={i}
            className="relative inline-flex h-4 w-4"
            aria-hidden="true"
          >
            <Star
              className="h-4 w-4 text-emerald-200/35"
              strokeWidth={2.2}
              fill="currentColor"
            />
            {(isFull || isHalf) && (
              <span
                className={
                  "absolute inset-0 overflow-hidden" +
                  (isHalf ? " w-1/2" : " w-full")
                }
              >
                <Star
                  className="h-4 w-4 text-emerald-500"
                  strokeWidth={2.2}
                  fill="currentColor"
                />
              </span>
            )}
          </span>
        );
      })}
      <span className="ml-1 text-xs text-muted-foreground">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function Pill({ icon, label, testId }: { icon: React.ReactNode; label: string; testId: string }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 ring-1 ring-white/15 backdrop-blur"
      data-testid={testId}
    >
      <span className="text-emerald-200">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function SectionHeading({
  kicker,
  title,
  desc,
  align = "center",
  testId,
}: {
  kicker: string;
  title: string;
  desc?: string;
  align?: "center" | "left";
  testId: string;
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
      data-testid={testId}
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        <span>{kicker}</span>
      </div>
      <h2 className="font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {desc ? (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const [category, setCategory] = useState<CourseCategory>("Graduate");
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = useMemo(() => [carousel1, carousel2, carousel3], []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const courses = useMemo<Course[]>(
    () => [
      {
        id: "c1",
        category: "Graduate",
        title: "ADCA (Advanced Diploma in Computer Applications)",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=70",
        rating: 4.8,
        reviews: 1534,
        price: 7200,
        totalFeesDisplay: "₹7200",
        level: "Advanced",
        duration: "1 Year",
        lessons: 24,
        monthlyFee: "₹600 × 10 ",
        admissionFee: "₹1200",
        atATimeOffer: "",
      },
      {
        id: "c2",
        category: "Graduate",
        title: "DCA (Diploma in Computer Applications)",
        image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=900&q=70",
        rating: 4.6,
        reviews: 928,
        price: 5150,
        totalFeesDisplay: "₹5150",
        level: "Intermediate",
        duration: "1 Year ",
        lessons: 18,
        monthlyFee: "₹500 * 8",
        admissionFee: "₹1150",
        atATimeOffer: "4750",
      },
      {
        id: "c3",
        category: "Undergraduate",
        title: "Spoken English",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=70",
        rating: 4.7,
        reviews: 2041,
        price: 2000,
        totalFeesDisplay: "₹2000",
        level: "Beginner",
        duration: "6 Months",
        lessons: 32,
        monthlyFee: "₹500 * 2",
        admissionFee: "₹1000",
        atATimeOffer: "",
      },
      {
        id: "c4",
        category: "Undergraduate",
        title: "English Typing",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=70",
        rating: 4.5,
        reviews: 1120,
        price: 160,
        totalFeesDisplay: "₹1150",
        level: "Beginner",
        duration: "3 Months",
        lessons: 16,
        monthlyFee: "",
        admissionFee: "₹1150",
        atATimeOffer: "",
      },
      {
        id: "c5",
        category: "Online",
        title: "UI/UX Design: From Wireframes to High-Fidelity",
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=70",
        rating: 4.9,
        reviews: 1650,
        price: 240,
        level: "All Levels",
        duration: "7 weeks",
        lessons: 22,
        monthlyFee: "₹400",
        admissionFee: "₹800",
        atATimeOffer: "12% Off",
      },
      {
        id: "c6",
        category: "Online",
        title: "Data Analytics with Excel & Power BI",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=70",
        rating: 4.6,
        reviews: 876,
        price: 210,
        level: "Intermediate",
        duration: "6 weeks",
        lessons: 19,
        monthlyFee: "₹380",
        admissionFee: "₹750",
        atATimeOffer: "10% Off",
      },
      {
        id: "c7",
        category: "Scholarship",
        title: "STEM Scholarship Program: Coding Bootcamp",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=70",
        rating: 4.8,
        reviews: 641,
        price: 0,
        level: "Beginner",
        duration: "12 weeks",
        lessons: 40,
        monthlyFee: "Free",
        admissionFee: "Free",
        atATimeOffer: "Full Scholarship",
      },
      {
        id: "c8",
        category: "Scholarship",
        title: "Women in Tech: Leadership & Career Growth",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=70",
        rating: 4.7,
        reviews: 502,
        price: 0,
        level: "All Levels",
        duration: "4 weeks",
        lessons: 12,
        monthlyFee: "Free",
        admissionFee: "Free",
        atATimeOffer: "Full Scholarship",
      },
    ],
    [],
  );

  const testimonials = useMemo<Testimonial[]>(
    () => [
      {
        id: "t1",
        name: "Amina Saeed",
        role: "MBA Student",
        rating: 5,
        quote:
          "The course structure is incredibly clear. I loved the practical projects and the mentor feedback — it felt like a premium campus experience, online.",
      },
      {
        id: "t2",
        name: "Daniel Pereira",
        role: "Software Engineer",
        rating: 4.5,
        quote:
          "Beautifully paced lessons and real-world assignments. The community discussions helped me stay consistent and actually finish what I started.",
      },
      {
        id: "t3",
        name: "Noura Al-Hassan",
        role: "Undergraduate",
        rating: 4.8,
        quote:
          "Support is fast, instructors are excellent, and the platform design is so smooth. I enrolled in a second program within a month.",
      },
    ],
    [],
  );

  const posts = useMemo<Post[]>(
    () => [
      {
        id: "p1",
        title: "How to build a study plan you can actually follow",
        excerpt:
          "A practical guide to setting weekly goals, staying motivated, and turning small habits into long-term progress.",
        date: "Jan 18, 2026",
        tag: "Productivity",
      },
      {
        id: "p2",
        title: "Top skills employers look for in 2026 (and how to learn them)",
        excerpt:
          "From communication to analytics, here’s what hiring teams value — plus course paths to get you there.",
        date: "Dec 29, 2025",
        tag: "Careers",
      },
      {
        id: "p3",
        title: "Choosing the right online program: 7 questions to ask",
        excerpt:
          "Understand curriculum depth, instructor support, portfolio outcomes, and community before you enroll.",
        date: "Dec 11, 2025",
        tag: "Guides",
      },
    ],
    [],
  );

  const filteredCourses = courses.filter((c) => c.category === category).slice(0, 4);

  return (
    <div className="min-h-screen bg-background" data-testid="page-home">
      <Navbar />

      <main>
        <section
          id="home"
          className="bg-hero noise-overlay relative overflow-hidden text-white"
          data-testid="section-hero"
        >
          <div className="absolute inset-0 opacity-25" aria-hidden="true">
            <img
              src={patternDots}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="container-pad relative">
            <div className="grid items-center gap-10 py-12 md:grid-cols-2 md:py-16">
              <div className="max-w-xl" data-testid="hero-left">
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <Pill
                    icon={<Users className="h-4 w-4" strokeWidth={2.2} />}
                    label="45k+ learners"
                    testId="pill-learners"
                  />
                  <Pill
                    icon={<BookOpen className="h-4 w-4" strokeWidth={2.2} />}
                    label="120+ programs"
                    testId="pill-programs"
                  />
                </div>

                <h1
                  className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl"
                  data-testid="text-hero-title"
                >
                  Welcome to <span className="text-emerald-200">JYCSM</span>
                  <span className="block">Skill Development Mission</span>
                </h1>

                <p
                  className="mt-5 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base"
                  data-testid="text-hero-subtitle"
                >
                  Learn from industry mentors, graduate with a portfolio, and join a community built
                  for consistency — from first lesson to final outcome.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row" data-testid="hero-ctas">
                  <Button
                    className="shine bg-emerald-500 text-white hover:bg-emerald-400"
                    data-testid="button-get-started"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    className="bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15"
                    data-testid="button-find-course"
                  >
                    Find Course
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg" data-testid="hero-stats">
                  {[{ k: "98%", v: "Satisfaction" }, { k: "24/7", v: "Support" }, { k: "1:1", v: "Mentoring" }].map(
                    (s) => (
                      <div key={s.v} className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur">
                        <div className="font-display text-xl">{s.k}</div>
                        <div className="text-xs text-white/70">{s.v}</div>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="relative" data-testid="hero-right">
                <div className="absolute -inset-8 -z-10 opacity-70" aria-hidden="true">
                  <img src={gradientBlob} alt="" className="h-full w-full object-contain" />
                </div>

                <div className="relative overflow-hidden rounded-[28px] ring-1 ring-white/15 shadow-[0_30px_90px_-60px_rgba(0,0,0,.9)]">
                  <img
                    src={heroImg}
                    alt="JYCSM Award Ceremony"
                    className="h-[320px] w-full object-cover sm:h-[380px]"
                    data-testid="img-hero"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-emerald-400/15" />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3" data-testid="hero-badges">
                  <Card className="bg-white/7 text-white ring-1 ring-white/12 backdrop-blur">
                    <div className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-300/20">
                          <Laptop className="h-5 w-5 text-emerald-200" strokeWidth={2.2} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold" data-testid="text-badge-1-title">Learn Anywhere</div>
                          <div className="text-xs text-white/70" data-testid="text-badge-1-sub">Mobile-first lessons</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <Card className="bg-white/7 text-white ring-1 ring-white/12 backdrop-blur">
                    <div className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-300/20">
                          <LayoutGrid className="h-5 w-5 text-emerald-200" strokeWidth={2.2} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold" data-testid="text-badge-2-title">Structured Paths</div>
                          <div className="text-xs text-white/70" data-testid="text-badge-2-sub">Programs that finish</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white" data-testid="section-features">
          <div className="container-pad py-12">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: <GraduationCap className="h-5 w-5" strokeWidth={2.2} />,
                  title: "Scholarship Facility",
                  desc: "Merit-based support with guided applications and mentor reviews.",
                },
                {
                  icon: <Library className="h-5 w-5" strokeWidth={2.2} />,
                  title: "Book & Library Store",
                  desc: "Curated resources, summaries, and reading lists for every program.",
                },
                {
                  icon: <Laptop className="h-5 w-5" strokeWidth={2.2} />,
                  title: "Easily Online Learning",
                  desc: "Bite-sized lessons, projects, and progress tracking across devices.",
                },
              ].map((f, idx) => (
                <Card
                  key={f.title}
                  className="lift rounded-3xl border bg-white shadow-[0_10px_40px_-28px_rgba(16,24,40,.25)]"
                  data-testid={`card-feature-${idx}`}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                        {f.icon}
                      </div>
                      <div>
                        <div className="text-base font-semibold" data-testid={`text-feature-title-${idx}`}>{f.title}</div>
                        <div className="mt-1 text-sm text-muted-foreground" data-testid={`text-feature-desc-${idx}`}>{f.desc}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-secondary/40" data-testid="section-about">
          <div className="container-pad py-14">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="relative" data-testid="about-left">
                <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_20px_70px_-45px_rgba(15,23,42,.55)] ring-1 ring-emerald-100">
                  <div className="relative h-[360px] w-full">
                    {carouselImages.map((img, idx) => (
                      <img
                        key={img}
                        src={img}
                        alt={`JYCSM Achievement ${idx + 1}`}
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${idx === currentSlide ? "opacity-100" : "opacity-0"
                          }`}
                        data-testid={`img-about-slide-${idx}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-7 left-6 rounded-3xl bg-white px-5 py-4 shadow-[0_18px_55px_-35px_rgba(15,23,42,.45)] ring-1 ring-emerald-100" data-testid="card-experience">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                      <Quote className="h-5 w-5" strokeWidth={2.2} />
                    </div>
                    <div>
                      <div className="font-display text-2xl leading-none text-foreground" data-testid="text-experience-years">
                        16+
                      </div>
                      <div className="text-xs text-muted-foreground" data-testid="text-experience-label">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>

              <div data-testid="about-right">
                <SectionHeading
                  kicker="About Us"
                  title="Empowering Youth Through Skill Development"
                  desc="Jatiya Yuva Computer Saksharta Mission (JYCSM) is a national initiative dedicated to providing affordable and quality computer education across India. Our mission is to empower youth with practical IT skills and digital knowledge for a better future."
                  align="left"
                  testId="heading-about"
                />

                <div className="mt-6 space-y-3 text-sm text-muted-foreground" data-testid="about-bullets">
                  {[
                    "Personalized and student-friendly teaching methodology",
                    "Extensive hands-on practical training",
                    "Video & audio-based learning system",
                    "Career orientation and self-development sessions",
                    "Regular assessments and performance monitoring",
                  ].map(
                    (b, i) => (
                      <div key={b} className="flex items-start gap-3" data-testid={`row-about-bullet-${i}`}>
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
                          <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        <span>{b}</span>
                      </div>
                    ),
                  )}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row" data-testid="about-actions">
                  <Link href="/about">
                    <Button className="h-auto bg-emerald-600 px-10 py-5 text-white hover:bg-emerald-500 rounded-2xl" data-testid="button-more-about">
                      More About Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <div className="inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-emerald-100" data-testid="about-contact">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                      <Phone className="h-5 w-5" strokeWidth={2.2} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground" data-testid="text-about-call">Call us anytime</div>
                      <div className="text-sm font-semibold" data-testid="text-about-phone">8629978490</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="courses" className="bg-white" data-testid="section-courses">
          <div className="container-pad py-14">
            <SectionHeading
              kicker="Academic Programs"
              title="Our Courses — Comprehensive Programs"
              desc="Choose a track and start learning with project-based courses designed for career outcomes."
              testId="heading-courses"
            />

            <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
              <Card className="rounded-3xl border bg-secondary/40 shadow-none" data-testid="card-course-categories">
                <div className="p-5">
                  <div className="text-sm font-semibold" data-testid="text-categories-title">Categories</div>
                  <Tabs value={category} onValueChange={(v) => setCategory(v as CourseCategory)}>
                    <TabsList className="mt-4 grid h-auto w-full grid-cols-1 gap-2 bg-transparent p-0" data-testid="tabs-categories">
                      {([
                        { k: "Graduate", icon: <GraduationCap className="h-4 w-4" /> },
                        { k: "Undergraduate", icon: <BookOpen className="h-4 w-4" /> },
                        { k: "Online", icon: <Laptop className="h-4 w-4" /> },
                        { k: "Scholarship", icon: <Users className="h-4 w-4" /> },
                      ] as const).map((t) => (
                        <TabsTrigger
                          key={t.k}
                          value={t.k}
                          className="justify-start rounded-2xl border border-transparent bg-white/70 px-4 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:bg-white data-[state=active]:border-emerald-200 data-[state=active]:bg-white data-[state=active]:shadow"
                          data-testid={`tab-category-${t.k.toLowerCase()}`}
                        >
                          <span className="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                            {t.icon}
                          </span>
                          {t.k}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>

                  <div className="mt-5 rounded-2xl bg-white px-4 py-4 ring-1 ring-emerald-100" data-testid="card-categories-note">
                    <div className="text-xs font-semibold text-emerald-700" data-testid="text-note-title">Need guidance?</div>
                    <div className="mt-1 text-xs text-muted-foreground" data-testid="text-note-desc">
                      Take a 2-minute quiz to get a recommended learning path.
                    </div>
                    <Button
                      size="sm"
                      className="mt-3 w-full bg-emerald-600 text-white hover:bg-emerald-500"
                      data-testid="button-take-quiz"
                    >
                      Take Quiz
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>

              <div className="grid gap-6 md:grid-cols-2" data-testid="grid-courses">
                {filteredCourses.map((c) => (
                  <Card
                    key={c.id}
                    className="lift overflow-hidden rounded-3xl border bg-white shadow-[0_14px_55px_-40px_rgba(16,24,40,.35)]"
                    data-testid={`card-course-${c.id}`}
                  >
                    <div className="relative">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="h-44 w-full object-cover"
                        loading="lazy"
                        data-testid={`img-course-${c.id}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-emerald-400/10" />
                      <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100" data-testid={`badge-course-level-${c.id}`}>
                        {c.level}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-base font-semibold leading-snug" data-testid={`text-course-title-${c.id}`}>{c.title}</div>
                          <div className="mt-2 flex items-center gap-3">
                            <RatingStars rating={c.rating} testId={`rating-course-${c.id}`} />
                            <span className="text-xs text-muted-foreground" data-testid={`text-course-reviews-${c.id}`}>
                              ({c.reviews.toLocaleString()} reviews)
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground" data-testid={`text-course-price-label-${c.id}`}>Total Fees</div>
                          <div className="font-display text-2xl text-foreground" data-testid={`text-course-price-${c.id}`}>
                            {c.totalFeesDisplay ?? (c.price === 0 ? "Free" : `$${c.price}`)}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-4 gap-2 text-xs" data-testid={`row-course-meta-${c.id}`}>
                        {[{ k: "Duration", v: c.duration }, { k: "Monthly Fee", v: c.monthlyFee }, { k: "Admission Fee", v: c.admissionFee }, { k: "At a Time Offer", v: c.atATimeOffer }].map(
                          (m) => (
                            <div key={m.k} className="rounded-2xl bg-secondary/50 px-3 py-2 ring-1 ring-emerald-100/60">
                              <div className="text-[10px] font-semibold text-emerald-700/80">{m.k}</div>
                              <div className="mt-0.5 font-semibold text-foreground/90">{m.v}</div>
                            </div>
                          ),
                        )}
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                        <Button
                          variant="secondary"
                          className="bg-emerald-50 text-emerald-800 ring-1 ring-emerald-100 hover:bg-emerald-100"
                          data-testid={`button-course-details-${c.id}`}
                        >
                          Details
                        </Button>
                        <Button
                          className="bg-emerald-600 text-white hover:bg-emerald-500"
                          data-testid={`button-course-enroll-${c.id}`}
                        >
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-secondary/40" data-testid="section-testimonials">
          <div className="container-pad py-14">
            <SectionHeading
              kicker="Testimonials"
              title="Student feedback that feels real"
              desc="A few highlights from learners who shipped projects, earned promotions, and built confidence."
              testId="heading-testimonials"
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3" data-testid="grid-testimonials">
              {testimonials.map((t) => (
                <Card
                  key={t.id}
                  className="lift rounded-3xl border bg-white shadow-[0_14px_55px_-40px_rgba(16,24,40,.28)]"
                  data-testid={`card-testimonial-${t.id}`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm font-semibold" data-testid={`text-testimonial-name-${t.id}`}>{t.name}</div>
                        <div className="text-xs text-muted-foreground" data-testid={`text-testimonial-role-${t.id}`}>{t.role}</div>
                      </div>
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                        <Quote className="h-5 w-5" strokeWidth={2.2} />
                      </div>
                    </div>

                    <div className="mt-4">
                      <RatingStars rating={t.rating} testId={`rating-testimonial-${t.id}`} />
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground" data-testid={`text-testimonial-quote-${t.id}`}>
                        “{t.quote}”
                      </p>
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      <div className="h-10 w-10 overflow-hidden rounded-full bg-emerald-100 ring-1 ring-emerald-200" data-testid={`img-testimonial-avatar-${t.id}`}>
                        <img
                          src={`https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(t.name)}`}
                          alt=""
                          className="h-full w-full"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-foreground" data-testid={`text-testimonial-cta-${t.id}`}>Verified Learner</div>
                        <div className="text-xs text-muted-foreground" data-testid={`text-testimonial-meta-${t.id}`}>Completed {t.rating >= 4.8 ? "2" : "1"} programs</div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="bg-white" data-testid="section-blog">
          <div className="container-pad py-14">
            <SectionHeading
              kicker="Blog & News"
              title="Latest articles for learners"
              desc="Tips, guides, and updates — designed to help you study smarter and choose the right path."
              testId="heading-blog"
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3" data-testid="grid-posts">
              {posts.map((p) => (
                <Card
                  key={p.id}
                  className="lift overflow-hidden rounded-3xl border bg-white shadow-[0_14px_55px_-40px_rgba(16,24,40,.30)]"
                  data-testid={`card-post-${p.id}`}
                >
                  <div className="relative h-40">
                    <img
                      src={`https://images.unsplash.com/${p.id === "p1" ? "photo-1522202176988-66273c2fd55f" : p.id === "p2" ? "photo-1522071820081-009f0129c71c" : "photo-1513258496099-48168024aec0"}?auto=format&fit=crop&w=900&q=70`}
                      alt={p.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      data-testid={`img-post-${p.id}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-emerald-400/10" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100" data-testid={`badge-post-tag-${p.id}`}>
                      {p.tag}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-muted-foreground" data-testid={`text-post-date-${p.id}`}>{p.date}</div>
                    <div className="mt-2 text-base font-semibold leading-snug" data-testid={`text-post-title-${p.id}`}>
                      {p.title}
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground" data-testid={`text-post-excerpt-${p.id}`}>
                      {p.excerpt}
                    </div>
                    <Button
                      variant="ghost"
                      className="mt-4 px-0 text-emerald-700 hover:bg-transparent hover:text-emerald-800"
                      data-testid={`button-post-read-${p.id}`}
                    >
                      Read More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <a
        href="#home"
        className="fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg ring-1 ring-emerald-500/30 transition hover:bg-emerald-500"
        data-testid="button-back-to-top"
        aria-label="Back to top"
      >
        <ChevronRight className="h-5 w-5 rotate-[-90deg]" strokeWidth={2.2} />
      </a>
    </div>
  );
}
