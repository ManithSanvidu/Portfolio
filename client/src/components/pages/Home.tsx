import { useState, useEffect, useMemo } from "react";
import { motion } from "motion/react";
import profilePic from "../images/profilepic.JPG";
import {
  ArrowRight,
  Briefcase,
  Award,
  Users,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const roles = [
  "Mobile App Developer",
  "Full Stack Developer",
  "AI & ML Enthusiast",
  "Problem Solver",
];

const socials = [
  { icon: Github, href: "https://github.com/ManithSanvidu", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/manith-gamage-4649012b8/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=manithsgamage@gmail.com", label: "Email" },
];

const highlights = [
  {
    icon: Briefcase,
    title: "Engineering",
    blurb: "Scalable apps & clean architecture",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "Quality",
    blurb: "Craft, testing, and polish",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Collaboration",
    blurb: "Teams, mentorship, and delivery",
    gradient: "from-rose-500 to-red-500",
  },
];

export function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        left: (i * 37 + 11) % 100,
        top: (i * 53 + 7) % 100,
        duration: 3 + (i % 5) * 0.45,
        delay: (i % 8) * 0.28,
        w: i % 3 === 0 ? 2 : 1,
      })),
    []
  );

  useEffect(() => {
    const role = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === role) {
      const t = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(t);
    }

    if (isDeleting && displayText === "") {
      const t = setTimeout(() => {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 0);
      return () => clearTimeout(t);
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting ? role.substring(0, displayText.length - 1) : role.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <div className="relative flex-1 min-h-[100dvh] overflow-hidden portfolio-hero-ai-surface">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-[420px] h-[420px] rounded-full bg-blue-600/20 blur-[100px]"
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-purple-600/18 blur-[100px]"
          animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.w,
            height: p.w,
            boxShadow: "0 0 6px rgba(255,255,255,0.4)",
          }}
          animate={{ opacity: [0.15, 0.55, 0.15] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 min-h-[100dvh] flex flex-col items-center justify-center pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center w-full"
        >
          {/* Circular profile — glowing purple–blue ring */}
          <div className="relative mb-6">
            <div
              className="absolute -inset-4 md:-inset-6 rounded-full opacity-100 blur-xl md:blur-2xl"
              style={{
                background: "linear-gradient(135deg, #2563eb, #3b82f6, #9333ea, #db2777)",
              }}
            />
            <div
              className="relative rounded-full p-[4px]"
              style={{
                boxShadow:
                  "0 0 40px rgba(139, 92, 246, 0.8), 0 0 80px rgba(37, 99, 235, 0.5), inset 0 0 0 2px rgba(255,255,255,0.15)",
                background: "linear-gradient(145deg, rgba(147,51,234,0.6), rgba(59,130,246,0.6))",
              }}
            >
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-[#0b0e14] ring-2 ring-black/40">
                <ImageWithFallback
                  src={profilePic}
                  alt="Manith Gamage"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md px-4 py-2 text-sm text-slate-200 mb-8"
          >
            <Sparkles className="w-4 h-4 text-cyan-300" />
            Welcome to my portfolio
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Hi, I&apos;m{" "}
            <span className="text-blue-500">Manith</span> <span className="text-fuchsia-500">Gamage</span>
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 min-h-[2.5rem] flex items-center justify-center gap-1 font-medium">
            <span className="font-mono text-slate-200">
              {displayText}
              <span className="text-fuchsia-400 animate-pulse">|</span>
            </span>
          </div>

          <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
            Crafting beautiful, functional, and scalable web applications with modern technologies. Passionate about
            clean code, AI-assisted workflows, and exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-10">
            <motion.a
              href="#projects"
              className="portfolio-gradient-btn inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="/Manith.Gamage.Resume.pdf"
              download="Manith.Gamage.Resume.pdf"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-slate-100 shadow-md transition-all w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#about"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-slate-100 shadow-md transition-all w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              About me
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-4 mb-14">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/[0.04] text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/10 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-[18px] h-[18px]" />
              </motion.a>
            ))}
          </div>

          <motion.button
            type="button"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-12"
          >
            Scroll to explore <ChevronDown className="w-4 h-4" />
          </motion.button>

          {/* Bottom highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
            {highlights.map(({ icon: Icon, title, blurb, gradient }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="portfolio-card-dark p-5 text-left"
              >
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} mb-3 shadow-lg`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1">{title}</h3>
                <p className="text-sm text-slate-400 leading-snug">{blurb}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
