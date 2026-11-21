/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Github,
  Filter,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  ArrowUpRight,
  Pause,
  Play,
} from "lucide-react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import home from "../images/Home.jpg";
import site from "../images/site.JPG";
import football from "../images/football.JPG";
import lms from "../images/lms.JPG";
import mobile1 from "../images/mobile1.png";
import milkquality from "../images/MilkQuality.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "Web App" | "Mobile App" | "Dashboard";
  demoUrl?: string;
  githubUrl?: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "SiteWatchAI – AI-Powered Construction Safety Monitor",
    description:
      "Developed a full-stack construction safety solution integrating YOLOv11-based PPE detection, real-time monitoring, incident management, analytics, inventory, WhatsApp alerts, and AI chatbot capabilities.",
    image: site,
    tags: ["Python", "React.js", "FastAPI", "YOLOv11", "OpenCV", "MongoDB", "Twilio", "JWT"],
    category: "Web App",
    githubUrl: "https://github.com/ManithSanvidu/AI-Construction-safety-monitor",
  },
  {
    id: 2,
    title: "HomePlanner AI – Smart Home Planning & Design",
    description:
      "Developed an intelligent home planning solution integrating AI-driven floor plan generation, land analysis, cost estimation, design visualization, construction scheduling, readiness assessment, and full-stack development using LangGraph, React, TypeScript, and ASP.NET Core.",
    image: home,
    tags: ["Python", "LangGraph", "React.js", "TypeScript", "ASP.NET Core", "C#", "Supabase"],
    category: "Web App",
    demoUrl: "https://ai-house-planner-akvm.vercel.app",
    githubUrl: "https://github.com/ManithSanvidu/ai-house-planner",
  },
  {
    id: 3,
    title: "AI Powered Match Predictor – FIFA World Cup",
    description:
      "Smart predictive sports analytics platform analyzing historic tournament datasets and applying XGBoost / machine learning models to forecast tournament matches.",
    image: football,
    tags: ["Python", "Machine Learning", "XGBoost", "Scikit-learn", "Sports Analytics"],
    category: "Dashboard",
    demoUrl: "https://fifa-ai-match-predictor.streamlit.app",
    githubUrl: "https://github.com/ManithSanvidu/Fifa-AI-Match-Predictor",
  },
  {
    id: 4,
    title: "LMS SAAS Application",
    description:
      "A SaaS-based interactive learning platform featuring customizable AI voice companions, real-time conversational learning, and tiered subscription plans.",
    image: lms,
    tags: ["TypeScript", "Next.js", "Vapi", "Supabase", "Clerk", "AI Voice Agents", "SaaS"],
    category: "Dashboard",
    demoUrl: "https://lms-saas-application.vercel.app",
    githubUrl: "https://github.com/ManithSanvidu/LMS-Saas--Application",
  },
  {
    id: 6,
    title: "Milk Quality Prediction using Machine Learning",
    description:
      "A machine learning model that classifies milk quality based on physicochemical and sensory attributes such as pH, temperature, odor, and freshness.",
    image: milkquality,
    tags: ["Python", "Machine Learning", "Data Science", "Scikit-learn"],
    category: "Dashboard",
  },
  {
    id: 7,
    title: "HomePlanner Mobile App",
    description:
      "Developed a Flutter mobile application for AI-driven architectural floor plan generation, instant dimension tweaking, and real-time visualization on handheld devices.",
    image: mobile1,
    tags: ["Flutter", "Dart", "REST APIs", "AI Integration", "Mobile Development"],
    category: "Mobile App",
    githubUrl: "https://github.com/ManithSanvidu/ai-house-planner",
  },
];

const categories = ["All", "Web App", "Mobile App", "Dashboard"] as const;

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const filteredProjects = projectData.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  // Clamp active index when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedCategory, searchQuery]);

  // Smooth auto-sliding every 3 seconds
  useEffect(() => {
    if (!isAutoPlay || filteredProjects.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlay, filteredProjects.length]);

  const nextProject = () => {
    if (filteredProjects.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    if (filteredProjects.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 portfolio-page-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header matching Home page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#b783f5]/20 bg-[#b783f5]/5 text-[#b783f5] text-xs font-semibold tracking-[0.25em] uppercase mb-4 backdrop-blur-sm">
            Selected Works
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] mb-4 text-white">
            Featured <span className="font-semibold text-white">Projects<span className="text-[#b783f5]">.</span></span>
          </h1>
          <p className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            A curated collection of intelligent web applications, AI systems, and interactive digital solutions.
          </p>
        </motion.div>

        {/* Filters & Centered Search Bar (NO VIEW SWITCHER) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-10 space-y-6"
        >
          {/* Centered Search bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4 pointer-events-none" />
            <Input
              type="text"
              placeholder="Search projects by tech, title or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 pl-11 pr-11 rounded-2xl border border-white/10 bg-[#1e1e1e]/90 text-white placeholder:text-white/40 focus-visible:ring-2 focus-visible:ring-[#b783f5]/50 focus-visible:border-[#b783f5]/50 text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-white/40 shrink-0 mr-1" />
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-[#b783f5] text-white shadow-lg shadow-[#b783f5]/25 scale-105"
                    : "bg-[#1e1e1e] text-white/60 hover:text-white hover:bg-[#252525] border border-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-medium text-white mb-2">No projects found</h3>
            <p className="text-sm text-white/40">Try adjusting your search criteria or category filter</p>
          </motion.div>
        ) : (
          /* ========================================================
             EXCLUSIVE 180° UPWARD CURVED PARALLAX SLIDER (3s Auto-Slide)
             ======================================================== */
          <div className="relative pt-6 pb-12">
            {/* Top Controls Bar */}
            <div className="flex items-center justify-between max-w-4xl mx-auto mb-6 px-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/40">
                  Project {activeIndex + 1} of {filteredProjects.length}
                </span>

                {/* Auto-Slide Indicator & Pause/Play Control */}
                <button
                  type="button"
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono border border-white/10 bg-white/5 text-white/60 hover:text-white cursor-pointer transition-colors"
                  title={isAutoPlay ? "Pause 3s Auto-Slide" : "Resume 3s Auto-Slide"}
                >
                  {isAutoPlay ? (
                    <>
                      <Pause size={10} className="text-[#b783f5]" /> 3s Auto
                    </>
                  ) : (
                    <>
                      <Play size={10} className="text-[#b783f5]" /> Paused
                    </>
                  )}
                </button>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevProject}
                  aria-label="Previous project"
                  className="p-2.5 rounded-xl border border-white/10 bg-[#1c1c1c] text-white/70 hover:text-white hover:bg-white/10 hover:border-[#b783f5]/40 transition-all cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={nextProject}
                  aria-label="Next project"
                  className="p-2.5 rounded-xl border border-white/10 bg-[#1c1c1c] text-white/70 hover:text-white hover:bg-white/10 hover:border-[#b783f5]/40 transition-all cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* 180° Curved Stage */}
            <div className="relative h-[530px] sm:h-[580px] w-full max-w-5xl mx-auto flex items-center justify-center perspective-[1200px]">
              {/* Curved Background Ambient Arc Guide */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 w-[720px] sm:w-[940px] h-[340px] rounded-[50%_50%_0_0] border-t-2 border-[#b783f5]/15 shadow-[0_-20px_60px_rgba(183,131,245,0.08)]"
              />

              {filteredProjects.map((project, idx) => {
                // Offset relative to active item
                let offset = idx - activeIndex;
                const total = filteredProjects.length;

                // Wrap-around offset for smooth cycle
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                const isActive = offset === 0;
                // Only render items within viewable 180° fan
                const isVisible = Math.abs(offset) <= 2;

                if (!isVisible) return null;

                // 180° Upward Arc Mathematics
                const angle = offset * 28; // degrees
                const rad = (angle * Math.PI) / 180;
                const radiusX = typeof window !== "undefined" && window.innerWidth < 640 ? 220 : 380;
                const radiusY = 90;

                const x = Math.sin(rad) * radiusX;
                const y = -Math.cos(rad) * radiusY + radiusY;
                const rotateZ = angle * 0.75;
                const rotateY = -angle * 0.6;
                const scale = isActive ? 1 : Math.max(0.72, 1 - Math.abs(offset) * 0.16);
                const opacity = isActive ? 1 : Math.max(0.3, 1 - Math.abs(offset) * 0.35);
                const zIndex = 30 - Math.abs(offset) * 5;

                return (
                  <motion.div
                    key={project.id}
                    onClick={() => setActiveIndex(idx)}
                    animate={{
                      x,
                      y,
                      scale,
                      rotateZ,
                      rotateY,
                      opacity,
                      zIndex,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 24,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="absolute w-[300px] sm:w-[420px] cursor-pointer select-none origin-bottom"
                  >
                    <Card
                      className={`overflow-hidden rounded-3xl transition-all duration-300 ${
                        isActive
                          ? "bg-[#191919] border-2 border-[#b783f5] shadow-[0_20px_60px_rgba(183,131,245,0.25)]"
                          : "bg-[#161616]/90 border border-white/10 hover:border-white/20 shadow-xl shadow-black/80"
                      }`}
                    >
                      {/* Image Preview Banner */}
                      <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-black/60">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-transparent to-black/20" />

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 rounded-full text-[10px] uppercase font-mono font-semibold tracking-wider bg-black/70 border border-white/10 text-white backdrop-blur-md">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Content Details */}
                      <div className="p-5 sm:p-6 text-left">
                        <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight line-clamp-1 mb-2">
                          {project.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-white/55 line-clamp-2 leading-relaxed mb-4">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5 max-h-14 overflow-hidden">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono bg-white/[0.04] border border-white/5 text-white/60"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 4 && (
                            <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono bg-white/[0.02] text-white/30">
                              +{project.tags.length - 4}
                            </span>
                          )}
                        </div>

                        {/* Interactive Action Buttons (Demo & Code) */}
                        <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                          {/* Demo Link button - ONLY shown when demoUrl exists */}
                          {project.demoUrl ? (
                            <motion.a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => e.stopPropagation()}
                              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#b783f5] to-purple-600 text-white text-xs font-semibold shadow-md shadow-[#b783f5]/25 hover:shadow-lg hover:shadow-[#b783f5]/40 transition-all cursor-pointer"
                            >
                              <Eye size={14} />
                              <span>Live Demo</span>
                              <ArrowUpRight size={13} className="opacity-80" />
                            </motion.a>
                          ) : (
                            <div className="flex-1 text-[11px] font-mono text-white/30 italic flex items-center gap-1.5 py-2">
                              <span>Internal / No Live URL</span>
                            </div>
                          )}

                          {/* GitHub Repository button - ONLY shown when githubUrl exists */}
                          {project.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white text-xs font-semibold hover:border-white/30 transition-all cursor-pointer"
                              title="View Source Code"
                            >
                              <Github size={14} />
                              <span>Code</span>
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {filteredProjects.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Jump to project ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === i ? "w-8 bg-[#b783f5]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
