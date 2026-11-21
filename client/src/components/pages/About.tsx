import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Briefcase,
  GraduationCap,
  Bot,
  BrainCircuit,
  Terminal,
  Cpu,
  Layers,
  ChevronLeft,
  ChevronRight,
  Building2,
  CheckCircle2,
  Flame,
  Globe,
  Database,
  Cloud,
  Pause,
  Play,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { SplitText } from "../ui/SplitText";
import aboutMeImg from "../images/aboutme.png";
import waveAnimation from "../images/Nine-Frame Friendly Wave Animation.gif";

interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "AI & ML" | "Database & Cloud";
  tag: string;
  iconType: "code" | "ai" | "db" | "cloud" | "mobile";
}

const skillsList: SkillItem[] = [
  { name: "React", category: "Frontend", tag: "UI / Web Library", iconType: "code" },
  { name: "JavaScript", category: "Frontend", tag: "Core Language", iconType: "code" },
  { name: "Flutter", category: "Frontend", tag: "Cross-Platform Mobile", iconType: "mobile" },
  { name: "C#", category: "Backend", tag: ".NET Core / Services", iconType: "code" },
  { name: "Java", category: "Backend", tag: "Enterprise Backend", iconType: "code" },
  { name: "Python", category: "Backend", tag: "Data, Backend & AI", iconType: "code" },
  { name: "Docker", category: "Database & Cloud", tag: "Containerization", iconType: "cloud" },
  { name: "Github actions", category: "Database & Cloud", tag: "CI/CD Workflows", iconType: "cloud" },
  { name: "AWS", category: "Database & Cloud", tag: "Cloud Infrastructure", iconType: "cloud" },
  { name: "MongoDB", category: "Database & Cloud", tag: "Document Database", iconType: "db" },
  { name: "MySQL", category: "Database & Cloud", tag: "Relational SQL", iconType: "db" },
  { name: "Microsoft SQL", category: "Database & Cloud", tag: "Enterprise MSSQL", iconType: "db" },
  { name: "PostgreSQL", category: "Database & Cloud", tag: "Advanced SQL", iconType: "db" },
  { name: "LangChain", category: "AI & ML", tag: "LLM Orchestration", iconType: "ai" },
  { name: "LangGraph", category: "AI & ML", tag: "Multi-Agent Frameworks", iconType: "ai" },
  { name: "RAG", category: "AI & ML", tag: "Retrieval-Augmented Gen", iconType: "ai" },
  { name: "Machine Learning", category: "AI & ML", tag: "Supervised & Unsupervised", iconType: "ai" },
  { name: "CNN", category: "AI & ML", tag: "Convolutional Networks", iconType: "ai" },
  { name: "YOLOv8", category: "AI & ML", tag: "Real-Time Computer Vision", iconType: "ai" },
];

const skillCategories = ["Frontend", "Backend", "AI & ML", "Database & Cloud"] as const;

interface TimelineSlide {
  id: number;
  badge: string;
  step: string;
  title: string;
  organization?: string;
  period: string;
  description: string;
  icon: typeof Briefcase;
  tags: string[];
}

const timelineSlides: TimelineSlide[] = [
  {
    id: 1,
    step: "01",
    badge: "Industry Experience",
    title: "Software Engineering Intern",
    organization: "Airport and Aviation Services (Sri Lanka) (Pvt) Ltd",
    period: "2026 June - Present",
    description:
      "Leading development of enterprise web applications, building scalable full-stack features, and engineering modern digital systems.",
    icon: Briefcase,
    tags: ["Enterprise Systems", "Web Architecture", "Full-Stack Development"],
  },
  {
    id: 2,
    step: "02",
    badge: "Higher Education",
    title: "BSc (Hons) in IT Specializing in Artificial Intelligence",
    organization: "SLIIT",
    period: "2024 - 2028",
    description:
      "An undergraduate at Sri Lanka Institute of Information Technology specializing in Artificial Intelligence, with a strong focus on developing intelligent systems and data-driven solutions.",
    icon: GraduationCap,
    tags: ["Artificial Intelligence", "Intelligent Systems", "Deep Learning"],
  },
  {
    id: 3,
    step: "03",
    badge: "Secondary Education",
    title: "Royal College",
    organization: "School",
    period: "2020 - 2023",
    description:
      "Completed my Advanced Level studies at Royal College Colombo in the Mathematics stream, building strong analytical and mathematical problem-solving foundations.",
    icon: Building2,
    tags: ["Mathematics Stream", "Analytical Problem Solving", "Royal College Colombo"],
  },
  {
    id: 4,
    step: "04",
    badge: "Foundational Education & Co-Curricular",
    title: "Lyceum International School",
    organization: "School",
    period: "Up to 2020",
    description:
      "Completed Ordinary Level examination with distinction. Actively participated in school cadetting fostering discipline and leadership, and performed as an instrumentalist in the Eastern Music Band.",
    icon: Building2,
    tags: ["Ordinary Level Examination", "Cadetting & Leadership", "Eastern Music Band"],
  },
];

export function About() {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto sliding timer (changes every 5 seconds)
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % timelineSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const filteredSkills = skillsList.filter((s) => s.category === activeCategory);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % timelineSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + timelineSlides.length) % timelineSlides.length);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 portfolio-page-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#b783f5]/20 bg-[#b783f5]/5 text-[#b783f5] text-xs font-semibold tracking-[0.25em] uppercase mb-4 backdrop-blur-sm">
            About Me
          </div>
          <SplitText
            text="Discover My Story."
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] mb-4 text-white justify-center flex flex-wrap"
            highlightWords={["Story."]}
            accentBar={false}
          />
          <p className="stagger-child text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed" style={{ "--i": 0 } as React.CSSProperties}>
            Get to know more about my journey, skills, and experience
          </p>
        </div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-28"
        >
          {/* Profile Image with subtle organic backdrop */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative mx-auto md:mx-0 w-full max-w-lg lg:max-w-xl flex justify-center items-center"
          >
            {/* Ambient decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#b783f5]/15 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

            <ImageWithFallback
              src={aboutMeImg}
              alt="Manith Gamage"
              className="relative z-10 w-full max-h-[490px] object-contain drop-shadow-[0_12px_35px_rgba(183,131,245,0.22)]"
            />
          </motion.div>

          {/* Bio & Introduction */}
          <div className="space-y-7 text-left">
            {/* Fancy Greeting Badge with Nine-Frame Wave Animation */}
            <div className="inline-flex items-center gap-3.5 px-4 py-2 rounded-2xl bg-[#1e1e1e]/90 border border-white/10 shadow-lg shadow-black/40 backdrop-blur-md">
              <div className="relative w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-[#b783f5]/10 border border-[#b783f5]/30 flex-shrink-0">
                <img
                  src={waveAnimation}
                  alt="Friendly wave"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-[#b783f5] font-semibold">
                  Hello There!
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#b783f5] animate-ping" />
              </div>
            </div>

            {/* Name Heading matching Home page styling */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] font-light text-white tracking-[-0.03em]">
                I&apos;m{" "}
                <span className="font-semibold text-white">
                  Manith Gamage<span className="text-[#b783f5]">.</span>
                </span>
              </h2>

              {/* Accent divider matching Home role indicator */}
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#b783f5]" />
                <p className="text-[#b783f5] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium">
                  Software Engineer & AI Enthusiast
                </p>
              </div>
            </div>

            {/* Narrative text styled like home page typography */}
            <div className="text-white/60 text-sm sm:text-base leading-relaxed sm:leading-8 space-y-4">
              <p>
                I&apos;m an AI-specializing undergraduate at{" "}
                <span className="text-white font-medium">SLIIT</span> and currently a{" "}
                <span className="text-white font-medium">Software Engineering Intern</span> at Airport and Aviation Services (Sri Lanka) (Pvt) Ltd.
              </p>
              <p>
                I&apos;m passionate about building modern web and mobile applications integrated with AI. I&apos;m continuously expanding my expertise in Full-Stack Development, LLM Fine-Tuning, LangChain, LLM Evaluation, and emerging AI technologies, with a strong focus on building intelligent and impactful solutions.
              </p>
            </div>

            {/* Focus Pills matching Home page style */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs text-white/50">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/5">
                <BrainCircuit size={13} className="text-[#b783f5]" /> Full-Stack & AI
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/5">
                <Bot size={13} className="text-[#b783f5]" /> LLMs & LangChain
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/5">
                <Terminal size={13} className="text-[#b783f5]" /> Web & Mobile Apps
              </span>
            </div>

            {/* Stat counters */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="portfolio-card-dark text-center p-5 transition-all border border-white/5"
              >
                <div className="text-3xl font-bold text-[#b783f5]">3+</div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1 uppercase tracking-wider">Years Experience</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="portfolio-card-dark text-center p-5 transition-all border border-white/5"
              >
                <div className="text-3xl font-bold text-[#b783f5]">10+</div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1 uppercase tracking-wider">Completed Projects</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          {/* Section Heading */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/5 text-[#b783f5] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              <Cpu size={13} />
              Core Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-[-0.03em]">
              Technical <span className="font-semibold text-white">Skills<span className="text-[#b783f5]">.</span></span>
            </h2>
            <p className="text-sm sm:text-base text-white/50 max-w-xl mx-auto mt-3">
              Modern programming languages, enterprise frameworks, AI orchestration, and database technologies.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                type="button"
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#b783f5] text-white shadow-lg shadow-[#b783f5]/25 scale-105"
                    : "bg-[#1e1e1e] text-white/60 hover:text-white hover:bg-[#252525] border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dynamic Motion Graphic Skill Cards */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5 sm:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => {
                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    transition={{ duration: 0.35, delay: index * 0.02 }}
                    whileHover={{
                      scale: 1.04,
                      y: -4,
                      transition: { duration: 0.2 },
                    }}
                    className="group relative p-4 sm:p-5 rounded-2xl bg-[#181818]/90 border border-white/[0.07] hover:border-[#b783f5]/40 hover:bg-[#1f1f1f] shadow-lg shadow-black/40 backdrop-blur-sm transition-colors overflow-hidden"
                  >
                    {/* Subtle Corner Glow on Hover */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#b783f5]/0 group-hover:bg-[#b783f5]/10 rounded-full blur-xl transition-all duration-500 pointer-events-none" />

                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#b783f5] group-hover:text-white group-hover:bg-[#b783f5] group-hover:shadow-[0_0_15px_rgba(183,131,245,0.5)] transition-all duration-300">
                        {skill.iconType === "ai" ? (
                          <BrainCircuit size={16} />
                        ) : skill.iconType === "db" ? (
                          <Database size={16} />
                        ) : skill.iconType === "cloud" ? (
                          <Cloud size={16} />
                        ) : skill.iconType === "mobile" ? (
                          <Globe size={16} />
                        ) : (
                          <Terminal size={16} />
                        )}
                      </div>

                      <span className="text-[10px] uppercase font-mono tracking-wider text-white/30 group-hover:text-[#b783f5] transition-colors">
                        {skill.category}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight group-hover:text-white transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-white/45 mt-1 line-clamp-1">
                      {skill.tag}
                    </p>

                    {/* Bottom Neon Accent Bar */}
                    <div className="mt-3.5 h-[2px] w-full bg-white/[0.05] rounded-full overflow-hidden">
                      <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-[#b783f5] to-fuchsia-400 transition-all duration-500 ease-out" />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Experience & Education - Horizontal Hierarchy with Motion Graphic Slides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {/* Section Heading */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/5 text-[#b783f5] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              <Layers size={13} />
              Career & Academic Pathway
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-[-0.03em]">
              Experience & <span className="font-semibold text-white">Education<span className="text-[#b783f5]">.</span></span>
            </h2>
            <p className="text-sm sm:text-base text-white/50 max-w-xl mx-auto mt-3">
              Horizontal interactive hierarchy showcasing my progression across industry roles and academia.
            </p>
          </div>

          {/* Horizontal Stepper Hierarchy Bar */}
          <div className="relative max-w-4xl mx-auto mb-10 px-4">
            <div className="hidden sm:block absolute top-1/2 left-8 right-8 h-[2px] -translate-y-1/2 bg-white/10 z-0">
              <motion.div
                className="h-full bg-gradient-to-r from-[#b783f5] via-purple-500 to-[#b783f5]"
                initial={false}
                animate={{
                  width: `${(currentSlide / (timelineSlides.length - 1)) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            <div className="relative z-10 flex items-center justify-between">
              {timelineSlides.map((slide, idx) => {
                const isCurrent = currentSlide === idx;
                const isPassed = currentSlide >= idx;

                return (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    type="button"
                    className="flex flex-col items-center group cursor-pointer focus:outline-none"
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 border ${
                        isCurrent
                          ? "bg-[#b783f5] text-white border-[#b783f5] shadow-[0_0_25px_rgba(183,131,245,0.6)] scale-110"
                          : isPassed
                          ? "bg-[#252525] text-[#b783f5] border-[#b783f5]/50"
                          : "bg-[#181818] text-white/40 border-white/10 group-hover:border-white/30"
                      }`}
                    >
                      {slide.step}
                    </div>
                    <span
                      className={`text-xs mt-2.5 font-medium tracking-wider uppercase transition-colors hidden sm:block ${
                        isCurrent ? "text-white font-semibold" : "text-white/40 group-hover:text-white/70"
                      }`}
                    >
                      {slide.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Slide Viewer */}
          <div className="relative max-w-4xl mx-auto">
            {/* Slide Navigation Buttons */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-white/40 uppercase tracking-[0.2em] font-mono">
                  Slide {currentSlide + 1} of {timelineSlides.length}
                </span>
                <button
                  type="button"
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono border border-white/10 bg-white/5 text-white/60 hover:text-white cursor-pointer"
                  title={isAutoPlay ? "Pause Auto-Slide" : "Resume Auto-Slide"}
                >
                  {isAutoPlay ? (
                    <>
                      <Pause size={10} className="text-[#b783f5]" /> Auto (5s)
                    </>
                  ) : (
                    <>
                      <Play size={10} className="text-[#b783f5]" /> Paused
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  type="button"
                  aria-label="Previous slide"
                  className="p-2.5 rounded-xl border border-white/10 bg-[#1c1c1c] text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextSlide}
                  type="button"
                  aria-label="Next slide"
                  className="p-2.5 rounded-xl border border-white/10 bg-[#1c1c1c] text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Slide Card Container with Motion Transition */}
            <div className="relative min-h-[300px] overflow-hidden rounded-3xl bg-[#181818]/90 border border-white/[0.08] backdrop-blur-xl p-6 sm:p-10 shadow-2xl shadow-black/80">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50, filter: "blur(6px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -50, filter: "blur(6px)" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Top Row: Badge + Period */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#b783f5]/10 border border-[#b783f5]/25 text-[#b783f5] text-xs font-semibold uppercase tracking-wider">
                        <Flame size={12} />
                        {timelineSlides[currentSlide].badge}
                      </span>

                      <span className="text-xs sm:text-sm font-mono text-white/60 bg-white/[0.04] px-3.5 py-1 rounded-full border border-white/5">
                        {timelineSlides[currentSlide].period}
                      </span>
                    </div>

                    {/* Title & Organization */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight mb-2">
                      {timelineSlides[currentSlide].title}
                    </h3>

                    {timelineSlides[currentSlide].organization && (
                      <p className="text-sm sm:text-base text-[#b783f5] font-medium tracking-wide mb-5">
                        {timelineSlides[currentSlide].organization}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-sm sm:text-base text-white/65 leading-relaxed max-w-3xl mb-8">
                      {timelineSlides[currentSlide].description}
                    </p>
                  </div>

                  {/* Highlights / Tags */}
                  <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-2 sm:gap-3">
                    {timelineSlides[currentSlide].tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/5 text-xs text-white/70"
                      >
                        <CheckCircle2 size={13} className="text-[#b783f5]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Ambient Background Decorative Glow */}
              <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-[#b783f5]/[0.06] blur-[90px] rounded-full pointer-events-none" />
            </div>

            {/* Slide Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {timelineSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === i ? "w-8 bg-[#b783f5]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
