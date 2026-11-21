/* eslint-disable react-hooks/set-state-in-effect */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import profilePic from "../images/profilepic.JPG";
import {
  Github,
  Linkedin,
  ArrowUpRight,
  Mail,
  Download,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const roles = [
  "Full Stack Developer",
  "Mobile Application Developer",
  "AI & ML Enthusiast",
  "Software Engineer",
];

const socials = [
  {
    icon: Github,
    href: "https://github.com/ManithSanvidu",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/manith-gamage-4649012b8/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=manithsgamage@gmail.com",
    label: "Email",
  },
];

export function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];

    if (!isDeleting && displayText === role) {
      const timeout = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? role.substring(0, displayText.length - 1)
          : role.substring(0, displayText.length + 1)
      );
    }, isDeleting ? 45 : 90);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <main className="relative min-h-[100dvh] overflow-hidden bg-[#151515] text-white flex flex-col">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#191919] via-[#111111] to-[#171717]" />

        <div className="absolute left-[35%] top-[20%] w-[350px] h-[350px] bg-purple-600/[0.04] blur-[130px] rounded-full animate-pulse-glow" />
      </div>

      {/* Header */}
      <header className="relative z-30 flex items-center justify-between px-6 md:px-12 py-7">

        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-[#b783f5] btn-press"
        >
          manith<span className="text-white">.</span>
        </a>

        

        <a
          href="#contact"
          className="flex items-center gap-2 text-sm text-white hover:text-[#bb87f7] transition-colors link-hover-draw btn-press"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </a>
      </header>

      {/* Main Hero */}
      <section
        id="home"
        className="relative z-10 flex-1 flex items-center"
      >
        <div className="relative w-full max-w-[1600px] mx-auto px-6 md:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[650px]">

            {/* Left: Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-start items-center"
            >

              {/* Portrait */}
              <div className="relative w-full max-w-[480px] h-[400px] sm:h-[520px] lg:h-[620px]">

                <ImageWithFallback
                  src={profilePic}
                  alt="Manith Gamage"
                  className="w-full h-full object-cover object-center grayscale"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/80 via-transparent to-[#151515]/10" />

                <div className="absolute bottom-7 left-5 md:left-8">
                  <p className="text-sm font-semibold tracking-[0.18em] text-white">
                    MANITH GAMAGE
                  </p>

                  <p className="text-xs text-white/55 mt-2 tracking-wider">
                    SOFTWARE DEVELOPER
                  </p>
                </div>
              </div>

              {/* Geometric decorations */}
              <div className="absolute right-[-10px] lg:right-[-40px] top-[16%] flex flex-col items-center">

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-[#a46cdb] mb-5"
                />

                <motion.div
                  animate={{ rotate: [0, 90, 180, 270, 360] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#b47af2]"
                />

                <div className="absolute top-[-15px] right-[-25px] w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#eeeae5]" />

                <div className="mt-2 w-28 h-28 md:w-32 md:h-32 rounded-full border-[20px] md:border-[24px] border-[#eeeae5] flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#151515]" />
                </div>

              </div>
            </motion.div>

            {/* Right: Introduction */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex flex-col justify-center pt-16 lg:pt-0 lg:pl-16"
            >

              <p className="text-[#b783f5] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-7">
                Welcome to my creative space
              </p>

              <h1 className="text-[48px] sm:text-[68px] md:text-[82px] xl:text-[100px] leading-[0.95] font-light tracking-[-0.055em]">
                MANITH
                <br />
                <span className="font-semibold text-white">
                  GAMAGE<span className="text-[#b783f5]">.</span>
                </span>
              </h1>

              {/* Animated Role */}
              <div className="mt-9 flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#b783f5] animate-accent-draw" />

                <p className="text-[#b783f5] text-sm md:text-base font-medium tracking-wide min-h-6">
                  {displayText}
                  <span className="inline-block animate-blink-caret ml-0.5 text-white">|</span>
                </p>
              </div>

              {/* Description */}
              <p className="mt-7 max-w-md text-white/55 text-sm md:text-base leading-8">
                Empowering innovation through AI-driven web and mobile
                applications. I transform ideas into intelligent,
                functional and meaningful digital experiences.
              </p>

              {/* Skills / Focus */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-8 text-[11px] md:text-xs uppercase tracking-[0.15em] text-white/40">
                <span>AI Integration</span>
                <span>·</span>
                <span>Web Development</span>
                <span>·</span>
                <span>Mobile Apps</span>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-8 mt-12">

                <a
                  href="#contact"
                  className="group flex items-center gap-3 text-sm font-semibold text-white hover:text-[#b783f5] transition-colors btn-press"
                >
                  Let's get in touch

                  <ArrowUpRight
                    size={17}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </a>

                <a
                  href="/Manith_Gamage_Resume.pdf"
                  download="Manith_Gamage_Resume.pdf"
                  className="flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors btn-press"
                >
                  <Download size={15} />
                  Download Resume
                </a>

              </div>

              {/* Social links */}
              <div className="flex items-center gap-5 mt-12">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-white/40 hover:text-[#b783f5] transition-colors duration-300 btn-press"
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>

            </motion.div>

          </div>
        </div>
      </section>
      
    </main>
  );
}
